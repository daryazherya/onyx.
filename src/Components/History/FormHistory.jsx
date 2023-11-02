import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ru from "date-fns/locale/ru";
import { formatISO } from "date-fns";
import SelectChannels from "../Indicators/SelectChannels";
import FormButton from "../Buttons/FormButton";
import { useContext } from "react";
import { AppContext } from "../App";
import { useTranslation } from "react-i18next";
import RenderTableHistory from "./RenderTableHistory";
import DatePickers from "../DatePickers/DatePickers";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { MenuItem } from "@mui/material";
import PostForm from '../api/PostForm';



const FormHistory = () => {
    const today = new Date();
    const { channels, setChannels, preloader, setPreloader } =
        useContext(AppContext);
    const { t } = useTranslation();
    const [valueType, setValueType] = useState("20");
    const [valueStart, setValueStart] = useState(new Date());
    const [valueEnd, setValueEnd] = useState(new Date());
    const [formDataHistory, setFormDataHistory] = useState({
        PeriodBegin: formatISO(today.setHours(0, 0, 0, 0)),
        PeriodEnd: formatISO(new Date()),
        PeriodType: "20",
        IsOnlyAverage: true,
        ChannelSetId: 1,
    });
    const [dataPeriodHistory, setDataPeriodHistory] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function res() {
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
        res();
    }, []);

    const handleChange = (event) => {
        setValueType(event.target.value);
        setFormDataHistory({ ...formDataHistory, PeriodType: event.target.value });
    };

    async function postFormData() {
        const data = await PostForm("/api/measurements/GetDataForPeriod",formDataHistory);

        setTimeout(() => {
            setPreloader(false);
            setDataPeriodHistory(data);
        }, 1400);
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
                    <FormControl sx={{ m:1, minWidth: 120 , alignItems: "center", ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select" : {
                        padding: 1.5,
                    } }}>
                        <InputLabel id="demo-simple-select-helper-label">Тип усреднений</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            label="Тип усреднений"
                            value={valueType}
                            onChange={handleChange}
                        >
            
                            <MenuItem  value='20'>20-минутный</MenuItem>
                            <MenuItem  value='H'>Часовой</MenuItem>
                            <MenuItem  value='D'>Дневной</MenuItem>
                            <MenuItem  value='M'>Месячный</MenuItem>
                        </Select>
                     </FormControl>
                     <select
                        className="form__select"
                        onChange={(e) => {
                            setFormDataHistory({
                                ...formDataHistory,
                                ChannelSetId: parseInt(e.target.value),
                            });
                        }}
                    >
                        {channels && <SelectChannels channels={channels} />}
                    </select>
                    <FormButton
                        postFormData={postFormData}
                        setPreloader={setPreloader}
                    />
                </LocalizationProvider>
            </form>
            {error && (
                    <div className="tableData-error">
                        {t("errors.tableData")}
                    </div>
            )}
            <RenderTableHistory
                dataPeriodHistory={dataPeriodHistory}
                preloader={preloader}
            />

        </>
    );
};

export default FormHistory;
