import "./index.scss";
import { Resizable } from "re-resizable";
import PanelWithList from "./PanelWithList";
import { useContext, useState } from "react";
import { AppContext } from "../App";

const NavPanel = () => {
    const { width, setWidth } = useContext(AppContext);
    const [mousePos, setMousePos] = useState({});

    const handleMouseMove = (event) => setMousePos({ x: event.clientX });

    return (
        <Resizable
            maxWidth={250}
            minWidth={80}
            size={{ width }}
            onResize={(e) => {
                handleMouseMove(e);
                setWidth(mousePos.x);
            }}
        >
            <PanelWithList width={width} setWidth={setWidth} />
        </Resizable>
    );
};

export default NavPanel;
