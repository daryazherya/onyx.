import DatePickers from "../DatePickers/DatePickers";
import { useContext, useState } from "react";
import formatISO from "date-fns/formatISO";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ru from "date-fns/locale/ru";
import FormButton from "../Buttons/FormButton";
import EventTable from "./EventTable";
import { AppContext } from "../App";
import PostData from "../fetch/PostData";
import Preloader from "../Preloader/Preloader";
import { useTranslation } from "react-i18next";

const FormEvents = () => {
    const today = new Date();
    const { preloader, setPreloader } = useContext(AppContext);
    const {t} = useTranslation();
    const [valueStartEvent, setValueStartEvent] = useState(new Date());
    const [valueEndEvent, setValueEndEvent] = useState(new Date());
    const [formDataEvent, setFormDataEvent] = useState({
        PeriodBegin: formatISO(today.setHours(0, 0, 0, 0)),
        PeriodEnd: formatISO(new Date()),
    });
    const [dataPeriodEvents, setDataPeriodEvents] = useState(null);
    const [error, setError] = useState(false);


    async function postFormData() {
        try {
            setPreloader(true)
            const response = await PostData("/api/measurements/GetAlertsForPeriod",formDataEvent)
            if (!response.ok) {
                setTimeout(() => {
                    setPreloader(false);
                    setError(true);
                }, 1500);
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
                    />
                </LocalizationProvider>
            </form>
            {preloader && <Preloader/>}
            {dataPeriodEvents && <EventTable
                    dataPeriodEvents={dataPeriodEvents}
                    preloader={preloader}
            />}
            {error && !preloader && (
                <div className="tableData-error">{t("errors.tableData")}</div>
            )}
        </>
    );
};

export default FormEvents;
