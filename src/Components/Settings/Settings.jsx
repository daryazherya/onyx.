import "./index.scss";
import { useState } from "react";
import i18n from "i18next";
import NavPanel from "../NavPanel";

const Settings = () => {
    const [lang, setLang] = useState(true);

    const toggleLang = () => {
        if (lang) {
            setLang(!lang);
            i18n.changeLanguage("en");
            localStorage.setItem("i18nextLng", JSON.stringify("en"));
        } else {
            setLang(!lang);
            i18n.changeLanguage("ru");
            localStorage.setItem("i18nextLng", JSON.stringify("ru"));
        }
    };

    return (
        <>
            <div className="wrapper">
                <main className="main">
                    <NavPanel />
                    <div className="settings">
                        <p className="settings-description">Сменить язык</p>
                        <input
                            onClick={toggleLang}
                            className="settings-toggle"
                            type="checkbox"
                        ></input>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Settings;
