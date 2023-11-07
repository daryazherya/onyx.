import "./index.scss";
import { useEffect, useState } from "react";
import TableTitles from "./tableTitles";
import SwitchButton from "./SwitchButton";
import RenderDataCards from "./RenderCards";
import SelectChannels from "./SelectChannels";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../App";
import Preloader from "../Preloader/Preloader";
// import { Select } from "@mui/material";

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
        // setPreloader(true);
        // getMeasures();
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
                setTimeout(() => {
                    setPreloader(false);
                    setError(true);
                }, 1500);
                throw Error(t("errors.tableData"));
            }
            const data = await response.json();

            setTimeout(() => {
                setData(data);
                setPreloader(false);
            }, 1500);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getMeasures();
    },[]);

    return (
        <>
            <div className="table">
                <div className="table__wrapper-settings">
                    <select
                        className="table__select-channels"
                        onChange={handleChange}
                    >
                        {channels && <SelectChannels channels={channels} />}
                    </select>
                    <SwitchButton
                        switchButton={switchButton}
                        setSwitchButton={setSwitchButton}
                        setPreloader={setPreloader}
                        getMeasures={getMeasures}
                    />
                </div>
                {preloader && <Preloader />}
                {switchButton && (
                    <TableTitles data={data} t={t} preloader={preloader} />
                )}
                {!switchButton &&(
                    <div className="cards-wrapper">
                        {data && (
                            <RenderDataCards data={data} t={t} preloader={preloader} />
                        )}
                    </div>
                )}
                {error && !preloader && (
                    <div className="tableData-error">
                        {t("errors.tableData")}
                    </div>
                )}
            </div>
        </>
    );
};

export default MainTable;
