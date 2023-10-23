import datePickers from "../History/DatePickers";
import { useContext, useState } from "react";
import formatISO from "date-fns/formatISO";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ru from "date-fns/locale/ru";
import FormButton from "../History/FormButton";
import EventTable from "./EventTable";
import { AppContext } from "../App";

const FormEvents = () => {
    const today = new Date();
    const { setPreloader } = useContext(AppContext);
    const [valueStartEvent, setValueStartEvent] = useState(new Date());
    const [valueEndEvent, setValueEndEvent] = useState(new Date());
    const [formDataEvent, setFormDataEvent] = useState({
        PeriodBegin: formatISO(today.setHours(0, 0, 0, 0)),
        PeriodEnd: formatISO(new Date()),
    });
    const [dataPeriodEvents, setDataPeriodEvents] = useState(null);

    const postFormData = () => {
        fetch("/api/measurements/GetAlertsForPeriod", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formDataEvent),
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error("Нет данных за период");
                }
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPreloader(false);
                setDataPeriodEvents(data);
            });
    };

    return (
        <>
            <form className="form__events">
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ru}
                >
                    {datePickers(
                        formDataEvent,
                        setFormDataEvent,
                        valueStartEvent,
                        setValueStartEvent,
                        valueEndEvent,
                        setValueEndEvent
                    )}

                    {FormButton(postFormData, setPreloader)}
                </LocalizationProvider>
            </form>
            <EventTable dataPeriodEvents={dataPeriodEvents} />
        </>
    );
};

export default FormEvents;
