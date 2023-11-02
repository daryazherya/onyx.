import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { formatISO } from "date-fns";

const DatePickers = (
    periodData,
    setPeriodData,
    valueStart,
    setValueStart,
    valueEnd,
    setValueEnd
) => {
    return (
        <DemoContainer
            sx={{ marginRight: 2}}
            components={["DatePicker", "DatePicker"]}
        >
            <DatePicker
                sx={{
                    width: 130,
                    "& .MuiButtonBase-root ": {
                        marginRight: "5px",
                    },
                    ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input" : {
                        padding: 1.5,
                    }
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
                    ".css-nxo287-MuiInputBase-input-MuiOutlinedInput-input" : {
                        padding: 1.5,
                    }
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
                disableFuture
            />
        </DemoContainer>
    );
};

export default DatePickers;
