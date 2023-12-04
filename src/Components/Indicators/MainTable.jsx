import "./index.scss";
import { memo, useEffect, useState } from "react";
import TableTitles from "./tableTitles";
import SwitchButton from "../Buttons/SwitchButton";
import RenderDataCards from "./RenderCards";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../App";
import Preloader from "../Preloader/Preloader";
import PostData from "../fetch/PostData";
import { InputLabel, Pagination } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Chart from "./Chart";
import SelectChannels from "./SelectChannels";

const MainTable = memo(function MainTable() {
    const { channels, setChannels, setPreloader, preloader } =
        useContext(AppContext);
    const { t } = useTranslation();
    const [data, setData] = useState(null);
    const [switchButton, setSwitchButton] = useState("table");
    const [error, setError] = useState(false);
    const [select, setSelect] = useState({
        Id: 1,
        Name: "Пост Дарьи.Все каналы",
    });
    const [dataChart, setDataChart] = useState(null);
    const [page, setPage] = useState(0);
    const numberCards = 6;

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
        setPreloader(true);
    }, []);

    const changeDataForChart = (dataBase) => {
        const timeTick = new Date(dataBase[0].Time).toLocaleTimeString();
        const obj = {};
        obj.time = timeTick;

        dataBase.forEach((substance) => {
            obj[substance.SubstanceShortName] = substance.Value;
        });
        return dataChart === null ? [obj] : [...dataChart, obj];
    };

    const handleChange = (event, value) => {
        console.log(value, "<<<");
        setPage(value);
    };

    async function getCurrentMeasures() {
        try {
            const response = await fetch("/api/measurements/getmeasurenow");
            if (!response.ok) {
                setTimeout(() => {
                    setPreloader(false);
                    setError(true);
                }, 2500);
                throw Error(t("errors.tableData"));
            }
            const newData = await response.json();
            // console.log(newData);
            if (JSON.stringify(newData) !== JSON.stringify(data)) {
                setData(newData);
                setDataChart(changeDataForChart(newData));
            }

            setTimeout(() => {
                setPreloader(false);
            }, 2500);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function post() {
            try {
                await PostData(
                    "/api/measurements/setcurrentchannelset",
                    select
                );
                setTimeout(() => {
                    getCurrentMeasures();
                }, 2000);
            } catch (error) {
                console.log(error);
            }
        }
        post();
    }, [select]);

    useEffect(() => {
        const interval = setInterval(() => {
            getCurrentMeasures();
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, [data]);

    return (
        <div className="table">
            <div className="table__wrapper-settings">
                <FormControl
                    sx={{
                        minWidth: 150,
                    }}
                >
                    <InputLabel>Представления</InputLabel>
                    <SelectChannels
                        select={select}
                        channels={channels}
                        setDataChart={setDataChart}
                        setPreloader={setPreloader}
                        setSelect={setSelect}
                    />
                </FormControl>
                <SwitchButton
                    switchButton={switchButton}
                    setSwitchButton={setSwitchButton}
                    getMeasures={getCurrentMeasures}
                    setPreloader={setPreloader}
                />
            </div>
            {preloader && <Preloader />}
            {switchButton === "table" && data && (
                <TableTitles data={data} t={t} preloader={preloader} />
            )}
            {switchButton === "graphic" && (
                <Chart dataChart={dataChart} preloader={preloader} />
            )}
            {switchButton === "cards" && (
                <div className="cards-wrapper">
                    {data && (
                        <RenderDataCards
                            data={data}
                            t={t}
                            preloader={preloader}
                            numberCards={numberCards}
                            page={page}
                        />
                    )}
                </div>
            )}
            {error && !preloader && (
                <div className="tableData-error">{t("errors.tableData")}</div>
            )}
            {switchButton === "cards" && (
                <div className="pagination__cards">
                    <Pagination
                        count={data && Math.round(data.length / numberCards)}
                        page={page}
                        onChange={handleChange}
                        variant="outlined"
                        shape="rounded"
                    />
                </div>
            )}
        </div>
    );
});

export default MainTable;
