import "./index.scss";
import { useEffect, useState } from "react";
import TableTitles from "./tableTitles";
import SwitchButton from "../Buttons/SwitchButton";
import RenderDataCards from "./RenderCards";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { AppContext } from "../App";
import Preloader from "../Preloader/Preloader";
import PostData from "../api/PostData";
import { InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";

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

        getMeasures();
    }, []);

    const handleChange = (newValue) => {
        // console.log(select, newValue);
        setSelect({
            Id: newValue.target.value,
            Name: newValue.target.value.Name,
        });
        getMeasures();
    };

    useEffect(() => {
        async function getCurrentMeasures() {
            try {
                const response = await fetch("/api/measurements/getmeasurenow");
                if (!response.ok) {
                    setError(true);
                    throw Error(t("errors.tableData"));
                }
                const dataBase = await response.json();
                setData(dataBase);
            } catch (err) {
                console.log(err);
            }
        }
        getCurrentMeasures();
    }, [data]);

    useEffect(() => {
        PostData("/api/measurements/setcurrentchannelset", select);
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
            // console.log(select);
            setData(data);
            setTimeout(() => {
                setPreloader(false);
            }, 1500);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="table">
                <div className="table__wrapper-settings">
                    <FormControl
                        sx={{
                            minWidth: 150,
                        }}
                    >
                        <InputLabel>Представления</InputLabel>
                        <Select
                            label="Представления"
                            className="table__select-channels"
                            onChange={handleChange}
                            value={select.Id}
                            sx={{
                                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                                    {
                                        padding: 1.5,
                                        paddingRight: "32px",
                                    },
                            }}
                        >
                            {channels &&
                                channels.map((channel) => (
                                    <MenuItem
                                        key={channel.Id}
                                        value={channel.Id}
                                    >
                                        {channel.Name}
                                    </MenuItem>
                                ))}
                        </Select>
                    </FormControl>
                    <SwitchButton
                        switchButton={switchButton}
                        setSwitchButton={setSwitchButton}
                        getMeasures={getMeasures}
                    />
                </div>
                {preloader && <Preloader />}
                {switchButton && (
                    <TableTitles data={data} t={t} preloader={preloader} />
                )}
                {!switchButton && (
                    <div className="cards-wrapper">
                        {data && (
                            <RenderDataCards
                                data={data}
                                t={t}
                                preloader={preloader}
                            />
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
