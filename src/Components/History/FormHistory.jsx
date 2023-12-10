import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ru from "date-fns/locale/ru";
import { formatISO } from "date-fns";
import FormButton from "../Buttons/FormButton";
import { useTranslation } from "react-i18next";
import RenderTableHistory from "./RenderTableHistory";
import DatePickers from "../DatePickers/DatePickers";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { MenuItem } from "@mui/material";
import PostData from "../fetch/PostData";
import Preloader from "../Preloader/Preloader";
import { useDispatch, useSelector } from "react-redux";
import { setChannels } from "../../store/slices/getData";
import { setPreloader } from "../../store/slices/preload";

const FormHistory = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const { t } = useTranslation();
    const preloader = useSelector((state) => state.preload.preloader);
    const channels = useSelector((state) => state.getData.channels);
    const dispatch = useDispatch();
    const [valueType, setValueType] = useState("20");
    const [valueStart, setValueStart] = useState(today);
    const [valueEnd, setValueEnd] = useState(new Date());
    const [formDataHistory, setFormDataHistory] = useState({
        PeriodBegin: formatISO(today),
        PeriodEnd: formatISO(new Date()),
        PeriodType: "20",
        IsOnlyAverage: true,
        ChannelSetId: 1,
    });
    const [dataPeriodHistory, setDataPeriodHistory] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function getChannelSets() {
            try {
                const response = await fetch(
                    "/api/measurements/getchannelsets"
                );
                if (!response.ok) {
                    throw Error(t("errors.channels"));
                }
                const data = await response.json();
                setChannels(data);
            } catch (err) {
                console.log(err);
            }
        }
        getChannelSets();
    }, []);

    const handleChange = (event) => {
        setValueType(event.target.value);
        setFormDataHistory({
            ...formDataHistory,
            PeriodType: event.target.value,
        });
    };

    const handleChangeChannel = (event) => {
        setFormDataHistory({
            ...formDataHistory,
            ChannelSetId: event.target.value,
        });
    };

    async function postFormData() {
        try {
            setPreloader(true);
            const response = await PostData(
                "/api/measurements/GetDataForPeriod",
                formDataHistory
            );

            if (response === undefined || !response.ok) {
                setTimeout(() => {
                    setPreloader(false);
                    setError(true);
                }, 1500);
                throw Error(t("errors.tableData"));
            }
            const data = await response.json();

            setTimeout(() => {
                setPreloader(false);
                setDataPeriodHistory(data);
            }, 1500);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form className="form__history">
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ru}
                >
                    {DatePickers(
                        formDataHistory,
                        setFormDataHistory,
                        valueStart,
                        setValueStart,
                        valueEnd,
                        setValueEnd
                    )}
                    <FormControl
                        sx={{
                            minWidth: 150,
                            marginRight: "15px",
                        }}
                    >
                        <InputLabel>Тип усреднений</InputLabel>
                        <Select
                            label="Тип усреднений"
                            value={valueType}
                            onChange={handleChange}
                            sx={{
                                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                                    {
                                        padding: 1.5,
                                    },
                            }}
                        >
                            <MenuItem value="20">20 минут</MenuItem>
                            <MenuItem value="H">Час</MenuItem>
                            <MenuItem
                                value="D"
                                disabled={
                                    valueStart.toLocaleDateString() ===
                                    valueEnd.toLocaleDateString()
                                }
                            >
                                День
                            </MenuItem>
                            <MenuItem
                                value="M"
                                disabled={
                                    valueStart.toLocaleDateString() ===
                                    valueEnd.toLocaleDateString()
                                }
                            >
                                Месяц
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl
                        sx={{
                            minWidth: 150,
                        }}
                    >
                        <InputLabel>Представления</InputLabel>
                        <Select
                            label="Представления"
                            onChange={handleChangeChannel}
                            value={formDataHistory.ChannelSetId}
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
                    <FormButton postFormData={postFormData} />
                </LocalizationProvider>
            </form>
            {preloader && <Preloader />}
            {dataPeriodHistory && (
                <RenderTableHistory
                    dataPeriodHistory={dataPeriodHistory}
                    preloader={preloader}
                />
            )}
            {error && !preloader && (
                <div className="tableData-error">{t("errors.tableData")}</div>
            )}
        </>
    );
};

export default FormHistory;
