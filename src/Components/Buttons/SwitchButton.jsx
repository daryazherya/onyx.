import { Link } from "react-router-dom";

const SwitchButton = ({ switchButton, setSwitchButton, getMeasures }) => {
    return (
        <div className="table__button-switch">
            <Link
                onClick={() => {
                    setSwitchButton(true);
                    getMeasures();
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
                    getMeasures();
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