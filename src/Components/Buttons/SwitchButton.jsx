import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";
// import { setPreloader } from "../../store/slices/preload";
import { useDispatch } from "react-redux";
import { setSwitchButton } from "../../store/slices/switchButton";

const SwitchButton = ({ getMeasures }) => {
    const dispatch = useDispatch();
    return (
        <ButtonGroup
            sx={{
                ".MuiButtonGroup-grouped": {
                    fontSize: "10px",
                    padding: "8px 10px",
                    border: "0.5px solid rgb(151, 151, 151)",
                    backgroundColor: "rgb(228, 227, 232)",
                    boxShadow: "0px 1px 6px rgb(74, 74, 74)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                },
            }}
        >
            <Button
                onClick={() => {
                    dispatch(setSwitchButton("table"));
                    // dispatch(setPreloader(true));
                    getMeasures();
                }}
                className="table__button-switch_left"
            ></Button>
            <Button
                onClick={() => {
                    dispatch(setSwitchButton("graphic"));
                    // dispatch(setPreloader(true));
                    getMeasures();
                }}
                className="table__button-switch_middle"
            ></Button>
            <Button
                onClick={() => {
                    dispatch(setSwitchButton("cards"));
                    // dispatch(setPreloader(true));
                    getMeasures();
                }}
                className="table__button-switch_right"
            ></Button>
        </ButtonGroup>
    );
};

export default SwitchButton;
