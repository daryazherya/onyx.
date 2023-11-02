import DatePickers from "../DatePickers/DatePickers";
import { useContext, useState } from "react";
import formatISO from "date-fns/formatISO";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ru from "date-fns/locale/ru";
import FormButton from "../Buttons/FormButton";
import EventTable from "./EventTable";
import { AppContext } from "../App";

const FormEvents = () => {
    const today = new Date();
    const { preloader, setPreloader } = useContext(AppContext);
    const [valueStartEvent, setValueStartEvent] = useState(new Date());
    const [valueEndEvent, setValueEndEvent] = useState(new Date());
    const [formDataEvent, setFormDataEvent] = useState({
        PeriodBegin: formatISO(today.setHours(0, 0, 0, 0)),
        PeriodEnd: formatISO(new Date()),
    });
    const [dataPeriodEvents, setDataPeriodEvents] = useState(null);

    async function postFormData() {
        try {
            const response = await fetch(
                "/api/measurements/GetAlertsForPeriod",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(formDataEvent),
                }
            );
            if (!response.ok) {
                throw Error("Нет данных за период");
            }
            const data = await response.json();
            setTimeout(() => {
                setPreloader(false);
                setDataPeriodEvents(data);
            }, 1400);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form className="form__events">
                <LocalizationProvider
                    dateAdapter={AdapterDateFns}
                    adapterLocale={ru}
                >
                    {DatePickers(
                        formDataEvent,
                        setFormDataEvent,
                        valueStartEvent,
                        setValueStartEvent,
                        valueEndEvent,
                        setValueEndEvent
                    )}
                    <FormButton
                        postFormData={postFormData}
                        setPreloader={setPreloader}
                    />
                </LocalizationProvider>
            </form>
            <EventTable
                dataPeriodEvents={dataPeriodEvents}
                preloader={preloader}
            />
        </>
    );
};

export default FormEvents;
