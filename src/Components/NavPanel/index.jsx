import "./index.scss";
import { Resizable } from "re-resizable";
import PanelWithList from "./PanelWithList";
import { useContext, useState } from "react";
import { AppContext } from "../App";
import Header from "../Header";
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
            <Header/>
            <PanelWithList width={width} setWidth={setWidth}/>
        </Resizable>
    );
};

export default NavPanel;
