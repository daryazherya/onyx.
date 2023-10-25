import { useState, useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ru from "date-fns/locale/ru";
import { formatISO } from "date-fns";
import SelectChannels from "../Indicators/SelectChannels";
import FormButton from "./FormButton";
import { RadioGroup } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";
import { useTranslation } from "react-i18next";
import RenderTableHistory from "./RenderTableHistory";
import RadioBox from "./RadioBox";
import DatePickers from "./DatePickers";

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

    useEffect(() => {
        async function res() {
            try {
                const response = await fetch(
                    "/api/measurements/getchannelsets"
                );
                if (!response.ok) {
                    // setError(true);
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

    const handleChange = (e) => {
        setValueType(e.target.value);
        setFormDataHistory({ ...formDataHistory, PeriodType: e.target.value });
    };

    async function postFormData() {
        const response = await fetch("/api/measurements/GetDataForPeriod", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataHistory),
        });

        const data = await response.json();
        setTimeout(() => {
            setPreloader(false);
            setDataPeriodHistory(data);
        }, 1400);
    }

    return (
        <>
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
                    <fieldset className="form__typeAverage">
                        <legend className="form__typeAverage_description">
                            Тип усреднений
                        </legend>
                        <RadioGroup
                            value={valueType}
                            onChange={handleChange}
                            sx={{
                                "&.MuiFormGroup-root": {
                                    display: "block",
                                },
                            }}
                        >
                            <RadioBox />
                        </RadioGroup>
                    </fieldset>
                    <FormButton
                        postFormData={postFormData}
                        setPreloader={setPreloader}
                    />
                </LocalizationProvider>
            </form>
            <RenderTableHistory
                dataPeriodHistory={dataPeriodHistory}
                preloader={preloader}
            />
        </>
    );
};

export default FormHistory;
