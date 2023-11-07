import { useState } from "react";
import { Button } from "@mui/material";

const PanelButton = ({width,setWidth}) => {
    const [arrow, setArrow] = useState(true);

    const buttonText = {
        close: "<<<",
        open: ">>>",
    };

    return  <Button
                sx={{ margin: 1 }}
                onClick={() => {
                    if (arrow) {
                        setWidth(80);
                    } else {
                        setWidth(250);
                    }
                    setArrow(!arrow);
                }}
                variant="outlined"
            >
                {(arrow && width > 200) || (!arrow && width > 200)
                    ? buttonText.close
                    : buttonText.open}
            </Button>
} 

export default PanelButton;
           
