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
import { setErrorIndicator } from "../../store/slices/errors";

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
    const errorIndicator = useSelector(
        (state) => state.errorMessage.errorIndicator
    );
    const [pageCards, setPageCards] = useState(0);
    const numberCards = 6;
    console.log(data);

    useEffect(() => {
        async function getChannelSets() {
            try {
                const response = await fetch(
                    "/api/measurements/getchannelsets"
                );
                if (!response.ok) {
                    dispatch(setErrorIndicator(true));
                    throw Error(t("errors.channels"));
                }
                const data = await response.json();

                dispatch(setChannels(data));
                dispatch(setPreloader(true));
            } catch (err) {
                console.log(err);
            }
        }
        getChannelSets();
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
        setPageCards(value);
    };

    async function getCurrentMeasures() {
        try {
            const response = await fetch("/api/measurements/getmeasurenow");
            if (!response.ok) {
                setTimeout(() => {
                    dispatch(setPreloader(false));
                    dispatch(setErrorIndicator(true));
                }, 2500);
                throw Error(t("errors.tableData"));
            }
            const newData = await response.json();

            if (JSON.stringify(newData) !== JSON.stringify(data)) {
                dispatch(setData(newData));
                dispatch(setDataChart(changeDataForChart(newData)));
                dispatch(setPreloader(false));
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
            {switchButton === "table" && <TableTitles />}
            {switchButton === "graphic" && <Chart />}
            {switchButton === "cards" && (
                <>
                    <div className="cards-wrapper">
                        <RenderDataCards
                            numberCards={numberCards}
                            page={pageCards}
                        />
                    </div>
                    {data && (
                        <div className="pagination__cards">
                            <Pagination
                                count={
                                    data &&
                                    Math.round(data.length / numberCards)
                                }
                                page={pageCards}
                                onChange={handleChange}
                                variant="outlined"
                                shape="rounded"
                            />
                        </div>
                    )}
                </>
            )}
            {errorIndicator && !preloader && (
                <div className="tableData-error">{t("errors.tableData")}</div>
            )}
        </div>
    );
});

export default MainTable;
