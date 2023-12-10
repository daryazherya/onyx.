import "./index.scss";
import { Resizable } from "re-resizable";
import PanelWithList from "./PanelWithList";
import { useState } from "react";
import Header from "../Header";
import { useDispatch, useSelector } from "react-redux";
import { setWidth } from "../../store/slices/widthNav";

const NavPanel = () => {
    const width = useSelector((state) => state.widthNav.width);
    const dispatch = useDispatch();
    const [mousePos, setMousePos] = useState({});
    const handleMouseMove = (event) => setMousePos({ x: event.clientX });

    return (
        <Resizable
            maxWidth={250}
            minWidth={80}
            size={{ width }}
            onResize={(e) => {
                handleMouseMove(e);
                dispatch(setWidth(mousePos.x));
            }}
        >
            <Header />
            <PanelWithList />
        </Resizable>
    );
};

export default NavPanel;
