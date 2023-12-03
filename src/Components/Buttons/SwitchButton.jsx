import ButtonGroup from "@mui/material/ButtonGroup";
import { Button } from "@mui/material";

const SwitchButton = ({ setSwitchButton, getMeasures, setPreloader }) => {
    return (
        <ButtonGroup
            sx={{
                ".MuiButtonGroup-grouped": {
                    fontSize: "10px",
                    padding: "8px 20px",
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
                    setSwitchButton("table");
                    setPreloader(true);
                    getMeasures();
                }}
                href="#/indicators"
                className="table__button-switch_left"
            ></Button>
            <Button
                onClick={() => {
                    setSwitchButton("graphic");
                    setPreloader(true);
                    getMeasures();
                }}
                href="#/indicators"
                className="table__button-switch_middle"
            ></Button>
            <Button
                onClick={() => {
                    setSwitchButton("cards");
                    setPreloader(true);
                    getMeasures();
                }}
                href="#/indicators"
                className="table__button-switch_right"
            ></Button>
        </ButtonGroup>
    );
};

export default SwitchButton;
