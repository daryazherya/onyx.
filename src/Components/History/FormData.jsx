import { useState, useEffect } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import ru from "date-fns/locale/ru";
import { formatISO } from "date-fns";
import SelectChannels from "../Indicators/SelectChannels";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import { Radio, RadioGroup } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../App";
import { useTranslation } from "react-i18next";
import RenderDataTable from "../Indicators/RenderTable";

const FormData = () => {
    const { channels, setChannels } = useContext(AppContext);
    const { t } = useTranslation();
    const [valueStart, setValueStart] = useState(new Date());
    const [valueEnd, setValueEnd] = useState(new Date());
    const [value, setValue] = useState("20");
    const [formData, setFormData] = useState({
        PeriodBegin: formatISO(new Date()),
        PeriodEnd: formatISO(new Date()),
        PeriodType: "20",
        IsOnlyAverage: true,
        ChannelSetId: 1,
    });
    const [dataPeriod, setDataPeriod] = useState(null);

    useEffect(() => {
        fetch("/api/measurements/getchannelsets")
            .then((res) => {
                if (!res.ok) {
                    // setError(true);
                    throw Error(t("errors.channels"));
                }

                return res.json();
            })
            .then((data) => {
                setChannels(data);
            });
    }, []);

    const handleChange = (e) => {
        setValue(e.target.value);
        setFormData({ ...formData, PeriodType: e.target.value });
        console.log(formData);
    };

    const postFormData = () => {
        fetch("/api/measurements/GetDataForPeriod", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                setDataPeriod(data);
            });
    };

    return (
        <>
            <select
                className="form__select"
                onChange={(e) => {
                    setFormData({
                        ...formData,
                        ChannelSetId: parseInt(e.target.value),
                    });
                    console.log(formData);
                }}
            >
                {channels && <SelectChannels channels={channels} />}
            </select>

            <form className="form__history">
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ru}
                >
                    <DemoContainer
                        sx={{ marginRight: 2 }}
                        components={["DatePicker", "DatePicker"]}
                    >
                        <DatePicker
                            sx={{
                                width: 150,
                                "& .MuiButtonBase-root ": {
                                    marginRight: "5px",
                                    padding: 0,
                                },
                            }}
                            label="Начало периода"
                            value={valueStart}
                            onChange={(newValueStart) => {
                                setValueStart(newValueStart);
                                setFormData({
                                    ...formData,
                                    PeriodBegin: formatISO(newValueStart),
                                });
                                console.log(formData, newValueStart);
                            }}
                            disableFuture
                        />
                        <DatePicker
                            sx={{
                                width: 150,
                                "& .MuiButtonBase-root ": {
                                    marginRight: "5px",
                                    padding: 0,
                                },
                            }}
                            label="Конец периода"
                            value={valueEnd}
                            onChange={(newValueEnd) => {
                                setValueEnd(newValueEnd);
                                setFormData({
                                    ...formData,
                                    PeriodEnd: formatISO(newValueEnd),
                                });
                                console.log(formData, newValueEnd);
                            }}
                            disableFuture
                        />
                    </DemoContainer>
                    <fieldset className="form__typeAverage">
                        <legend className="form__typeAverage_description">
                            Тип усреднений
                        </legend>
                        <RadioGroup
                            value={value}
                            onChange={handleChange}
                            sx={{
                                "&.MuiFormGroup-root": {
                                    display: "block",
                                },
                            }}
                        >
                            <FormControlLabel
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                    },
                                }}
                                control={<Radio value="20" />}
                                label="Базовые 20 мин"
                            />
                            <FormControlLabel
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                    },
                                }}
                                control={<Radio value="H" />}
                                label="Час"
                            />
                            <FormControlLabel
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                    },
                                }}
                                control={<Radio value="D" />}
                                label="День"
                            />
                            <FormControlLabel
                                sx={{
                                    "& .MuiTypography-root": {
                                        fontSize: "15px",
                                    },
                                }}
                                control={<Radio value="M" />}
                                label="Месяц"
                            />
                        </RadioGroup>
                    </fieldset>
                    <Button
                        onClick={postFormData}
                        sx={{
                            fontSize: 12,
                            height: 40,
                            alignSelf: "center",
                            marginLeft: 2,
                        }}
                        variant="contained"
                    >
                        Показать
                    </Button>
                </LocalizationProvider>
            </form>
            {/* <RenderDataTable /> */}
        </>
    );
};

export default FormData;
