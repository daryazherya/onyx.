import "./index.scss";
import { Link } from "react-router-dom";

const SwitchButton = ({ switchButton, setSwitchButton, setPreloader }) => {
    return (
        <div className="table__button-switch">
            <Link
                onClick={() => {
                    setSwitchButton(true);
                    setPreloader(true);
                }}
                to="/indicators"
                className={
                    switchButton
                        ? "table__button-switch_left left-active"
                        : "table__button-switch_left"
                }
            ></Link>
            <Link
                onClick={() => {
                    setSwitchButton(false);
                    setPreloader(true);
                }}
                to="/indicators"
                className={
                    !switchButton
                        ? "table__button-switch_right right-active"
                        : "table__button-switch_right"
                }
            ></Link>
        </div>
    );
};

export default SwitchButton;
