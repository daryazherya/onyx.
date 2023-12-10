import DatePickers from "../DatePickers/DatePickers";
import { useState } from "react";
import formatISO from "date-fns/formatISO";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ru from "date-fns/locale/ru";
import FormButton from "../Buttons/FormButton";
import EventTable from "./EventTable";
import PostData from "../fetch/PostData";
import Preloader from "../Preloader/Preloader";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { setPreloader } from "../../store/slices/preload";

const FormEvents = () => {
    const today = new Date();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const preloader = useSelector((state) => state.preload.preloader);
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
            dispatch(setPreloader(true));
            const response = await PostData(
                "/api/measurements/GetAlertsForPeriod",
                formDataEvent
            );
            if (response === undefined || !response.ok) {
                setTimeout(() => {
                    dispatch(setPreloader(false));
                    setError(true);
                }, 1500);
                throw Error("Нет данных за период");
            }
            const data = await response.json();
            setTimeout(() => {
                dispatch(setPreloader(false));
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
                    <FormButton postFormData={postFormData} />
                </LocalizationProvider>
            </form>
            {preloader && <Preloader />}
            {dataPeriodEvents && (
                <EventTable
                    dataPeriodEvents={dataPeriodEvents}
                    preloader={preloader}
                />
            )}
            {error && !preloader && (
                <div className="tableData-error">{t("errors.tableData")}</div>
            )}
        </>
    );
};

export default FormEvents;
