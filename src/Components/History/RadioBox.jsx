import FormControlLabel from "@mui/material/FormControlLabel";
import { Radio } from "@mui/material";

const RadioBox = () => {
    const typesPeriod = [
        { 20: "Базовые 20 мин" },
        { H: "Час" },
        { D: "День" },
        { M: "Месяц" },
    ];

    return typesPeriod.map((obj, i) => {
        for (let key in obj) {
            return (
                <FormControlLabel
                    key={i}
                    sx={{
                        "& .MuiTypography-root": {
                            fontSize: "15px",
                        },
                    }}
                    control={
                        <Radio
                            value={key}
                            sx={{
                                "&.Mui-checked": {
                                    color: "#665995",
                                },
                            }}
                        />
                    }
                    label={obj[key]}
                />
            );
        }
    });
};

export default RadioBox;
