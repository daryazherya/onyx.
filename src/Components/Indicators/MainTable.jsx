import { useEffect, useState } from "react";
import "./index.scss";
import TableTitles from "./tableTitles";
import SwitchButton from "./TableButton";
import RenderDataCards from "./RenderCards";
import SelectChannels from "./SelectChannels";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../App";
import Preloader from "../Preloader/Preloader";
import { Select } from "@mui/material";

const MainTable = () => {
    const { channels, setChannels, setPreloader, preloader } =
        useContext(AppContext);
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [switchButton, setSwitchButton] = useState(true);
    const [error, setError] = useState(false);
    const [select, setSelect] = useState({
        Id: 1,
        Name: "Пост Дарьи.Все каналы",
    });

    const handleChange = (e) => {
        setSelect({
            Id: e.target.value,
            Name: e.target.children[e.target.value - 1].innerText,
        });
        setPreloader(true);
        getMeasures();
    };

    useEffect(() => {
        fetch("/api/measurements/getchannelsets")
            .then((res) => {
                if (!res.ok) {
                    setError(true);
                    throw Error(t("errors.channels"));
                }

                return res.json();
            })
            .then((data) => {
                setChannels(data);
            });
    }, []);

    useEffect(() => {
        fetch("/api/measurements/setcurrentchannelset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(select),
        });
    }, [select]);

    async function getMeasures() {
        try {
            setPreloader(true);
            const response = await fetch("/api/measurements/getmeasurenow");
            if (!response.ok) {
                throw Error(t("errors.tableData"));
            }
            const data = await response.json();

            setTimeout(() => {
                setPreloader(false);
                setData(data);
            }, 1400);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMeasures();
    }, []);

    return (
        <>
            <div className="table">
                <div className="table__wrapper-settings">
                    <select
                        className="table__select-channels"
                        onChange={handleChange}
                        value={select.Name}
                    >
                        {channels && <SelectChannels channels={channels} />}
                    </select>
                    <SwitchButton
                        switchButton={switchButton}
                        setSwitchButton={setSwitchButton}
                        setPreloader={setPreloader}
                    />
                </div>
                {preloader && <Preloader />}
                {switchButton && !preloader && (
                    <TableTitles data={data} t={t} />
                )}
                {!switchButton && (
                    <div className="cards-wrapper">
                        {data && !preloader && (
                            <RenderDataCards data={data} t={t} />
                        )}
                    </div>
                )}
                {error && (
                    <div className="tableData-error">
                        {t("errors.tableData")}
                    </div>
                )}
            </div>
        </>
    );
};

export default MainTable;
