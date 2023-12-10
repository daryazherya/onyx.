import "./index.scss";
import { memo, useEffect, useState } from "react";
import TableTitles from "./tableTitles";
import SwitchButton from "../Buttons/SwitchButton";
import RenderDataCards from "./RenderCards";
import { useTranslation } from "react-i18next";
import Preloader from "../Preloader/Preloader";
import PostData from "../fetch/PostData";
import { InputLabel, Pagination } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Chart from "./Chart";
import SelectChannels from "./SelectChannels";
import { useDispatch, useSelector } from "react-redux";
import { setData, setChannels, setDataChart } from "../../store/slices/getData";
import { setPreloader } from "../../store/slices/preload";

const MainTable = memo(function MainTable() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const data = useSelector((state) => state.getData.data);
    const dataChart = useSelector((state) => state.getData.dataChart);
    const preloader = useSelector((state) => state.preload.preloader);
    const select = useSelector((state) => state.selectName.select);
    const switchButton = useSelector(
        (state) => state.switchButton.switchButton
    );
    const [error, setError] = useState(false);
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
                dispatch(setChannels(data));
            });
        dispatch(setPreloader(true));
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
        setPage(value);
    };

    async function getCurrentMeasures() {
        try {
            const response = await fetch("/api/measurements/getmeasurenow");
            if (!response.ok) {
                setTimeout(() => {
                    dispatch(setPreloader(false));
                    setError(true);
                }, 2500);
                throw Error(t("errors.tableData"));
            }
            const newData = await response.json();

            if (JSON.stringify(newData) !== JSON.stringify(data)) {
                dispatch(setData(newData));
                dispatch(setDataChart(changeDataForChart(newData)));
            }

            if (preloader) {
                setTimeout(() => {
                    dispatch(setPreloader(false));
                }, 2500);
            }
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
                    <SelectChannels />
                </FormControl>
                <SwitchButton getMeasures={getCurrentMeasures} />
            </div>
            {preloader && <Preloader />}
            {switchButton === "table" && data && <TableTitles />}
            {switchButton === "graphic" && <Chart />}
            {switchButton === "cards" && (
                <div className="cards-wrapper">
                    {data && (
                        <RenderDataCards
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
