import { useEffect, useState } from "react";
import "./index.scss";
// import { Link } from 'react-router-dom';
import TableTitles from "./tableTitles";
import SwitchButton from "./TableButton";
import RenderDataCards from "./RenderCards";
import SelectChannels from "./SelectChannels";
import { useTranslation } from "react-i18next";

const MainTable = () => {
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [channels, setChannels] = useState(null);
    const [switchButton, setSwitchButton] = useState(true);
    const [error, setError] = useState(false);
    const [select, setSelect] = useState({
        Id: 1,
        Name: "Пост Дарьи.Все каналы",
    });

    useEffect(() => {
        fetch("/api/measurements/getchannelsets")
            .then((res) => {
                if (!res.ok) {
                    setError(true);
                    throw Error(t("errors.channels"));
                }

                return res.json();
            })
            .then((channels) => {
                setChannels(channels);
            });
    }, []);

    useEffect(() => {
        fetch("/api/measurements/setcurrentchannelset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(select),
        });
    }, [select]);

    useEffect(() => {
        fetch("/api/measurements/getmeasurenow")
            .then((res) => {
                if (!res.ok) {
                    setError(true);
                    throw Error(t("errors.tableData"));
                }
                return res.json();
            })
            .then((data) => {
                // console.log(data);
                setData(data);
            });
    }, [data]);

    return (
        <>
            <div className="table">
                <div className="table__wrapper-settings">
                    <select
                        onChange={(e) => {
                            setSelect({
                                Id: e.target.value,
                                Name: e.target.children[e.target.value - 1]
                                    .innerText,
                            });
                        }}
                        className="table__select-channels"
                    >
                        {channels && <SelectChannels channels={channels} />}
                    </select>
                    <SwitchButton
                        switchButton={switchButton}
                        setSwitchButton={setSwitchButton}
                    />
                </div>
                {switchButton && <TableTitles data={data} t={t} />}
                {!switchButton && (
                    <div className="cards-wrapper">
                        {data && <RenderDataCards data={data} t={t} />}
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
