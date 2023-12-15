import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValueStart, setValueEnd } from "../../store/slices/FormData";

const DatePickers = () => {
    const dispatch = useDispatch();
    const valueStart = new Date(
        useSelector((state) => state.formData.valueStart)
    );
    const valueEnd = new Date(useSelector((state) => state.formData.valueEnd));
    const [errorDate, setErrorDate] = useState(null);
    const errorMessage = useMemo(
        () => (errorDate === "minDate" ? "Выберите другую дату" : ""),
        [errorDate]
    );

    return (
        <DemoContainer
            sx={{ marginRight: 2 }}
            components={["DatePicker", "DatePicker"]}
        >
            <DatePicker
                sx={{
                    width: 130,
                    "& .MuiButtonBase-root ": {
                        marginRight: "5px",
                    },
                    ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                        padding: 1.5,
                    },
                }}
                label="Начало периода"
                value={valueStart}
                onChange={(newValueStart) => {
                    dispatch(setValueStart(newValueStart.toString()));
                }}
                disableFuture
            />
            <DatePicker
                sx={{
                    width: 130,
                    "& .MuiButtonBase-root ": {
                        marginRight: "5px",
                        padding: 0,
                    },
                    ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                        padding: 1.5,
                    },
                }}
                label="Конец периода"
                value={valueEnd}
                onChange={(newValueEnd) => {
                    dispatch(setValueEnd(newValueEnd.toString()));
                }}
                onError={(newError) => setErrorDate(newError)}
                minDate={valueStart}
                slotProps={{
                    textField: {
                        helperText: errorMessage,
                    },
                }}
                disableFuture
            />
        </DemoContainer>
    );
};

export default DatePickers;
