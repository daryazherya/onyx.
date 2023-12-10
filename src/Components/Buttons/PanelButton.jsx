import { useState } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setWidth } from "../../store/slices/widthNav";

const PanelButton = () => {
    const [arrow, setArrow] = useState(true);
    const width = useSelector((state) => state.widthNav.width);
    const dispatch = useDispatch();

    const buttonText = {
        close: "<<<",
        open: ">>>",
    };

    return (
        <Button
            sx={{ margin: 1 }}
            onClick={() => {
                if (arrow) {
                    dispatch(setWidth(80));
                } else {
                    dispatch(setWidth(250));
                }
                setArrow(!arrow);
            }}
            variant="outlined"
        >
            {(arrow && width > 200) || (!arrow && width > 200)
                ? buttonText.close
                : buttonText.open}
        </Button>
    );
};

export default PanelButton;
