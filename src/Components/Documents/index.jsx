import "./index.scss";
import NavPanel from "../NavPanel";
import { formatISO } from "date-fns";
import DatePickers from "../DatePickers/DatePickers";
import { useState } from "react";
import { ru } from "date-fns/locale";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import FormButton from "../Buttons/FormButton";
import SelectChannels from "../Indicators/SelectChannels";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useSelector } from "react-redux";

const Documents = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [valueType, setValueType] = useState("20");
    const [valueStart, setValueStart] = useState(today);
    const [valueEnd, setValueEnd] = useState(new Date());
    const [formDataDocuments, setFormDataDocuments] = useState({
        PeriodBegin: formatISO(today),
        PeriodEnd: formatISO(new Date()),
        TypeOfReport: "Year",
        ChannelSetId: 1,
    });
    // const [dataPeriodDocuments, setDataPeriodDocuments] = useState(null);
    return (
        <div className="wrapper">
            <main className="main">
                <NavPanel />
                <form className="form__history">
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        adapterLocale={ru}
                    >
                        {DatePickers(
                            formDataDocuments,
                            setFormDataDocuments,
                            valueStart,
                            setValueStart,
                            valueEnd,
                            setValueEnd
                        )}
                        <FormControl
                            sx={{
                                minWidth: 130,
                            }}
                        >
                            <InputLabel>Тип отчета</InputLabel>
                            <Select
                                label="Тип отчета"
                                value={valueType}
                                sx={{
                                    ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                                        {
                                            padding: 1.5,
                                        },
                                }}
                            >
                                <MenuItem value="20">20 минут</MenuItem>
                                <MenuItem value="H">Час</MenuItem>
                                <MenuItem value="D">День</MenuItem>
                                <MenuItem value="M">Месяц</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl
                            sx={{
                                minWidth: 150,
                            }}
                        >
                            <InputLabel>Представления</InputLabel>
                            <SelectChannels />
                        </FormControl>
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
                                sx={{
                                    ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                                        {
                                            padding: 1.5,
                                        },
                                }}
                            >
                                <MenuItem value="20">20 минут</MenuItem>
                                <MenuItem value="H">Час</MenuItem>
                                <MenuItem value="D">День</MenuItem>
                                <MenuItem value="M">Месяц</MenuItem>
                            </Select>
                        </FormControl>
                        <FormButton />
                    </LocalizationProvider>
                </form>
            </main>
        </div>
    );
};

export default Documents;
