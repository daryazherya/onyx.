import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { formatISO } from "date-fns";
import {  useMemo, useState } from "react";

const DatePickers = (
    periodData,
    setPeriodData,
    valueStart,
    setValueStart,
    valueEnd,
    setValueEnd
) => {

    const [errorDate, setErrorDate] = useState(null); 
    const errorMessage = useMemo(() =>  errorDate === 'minDate' ? 'Выберите другую дату': '', [errorDate]);

    
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
                    setValueStart(newValueStart);
                    setPeriodData({
                        ...periodData,
                        PeriodBegin: formatISO(
                            newValueStart.setHours(0, 0, 0, 0)
                        ),
                    });
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
                    setValueEnd(newValueEnd);
                    setPeriodData({
                        ...periodData,
                        PeriodEnd: formatISO(newValueEnd),
                    });
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
