import { useTranslation } from "react-i18next";
import "./index.scss";
import RenderList from "./RenderList";
import RenderEmptyList from "./RenderEmpyList";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PanelWithList = ({ width, setWidth }) => {
    const [arrow, setArrow] = useState(true);

    const { t } = useTranslation();
    const listNames = [
        { indicators: t("navPanel.indicatorsTitle") },
        { map: t("navPanel.mapTitle") },
        { history: t("navPanel.historyTitle") },
        { events: t("navPanel.eventsTitle") },
        { documents: t("navPanel.documentsTitle") },
        { settings: t("navPanel.settingsTitle") },
        { dataBase: t("navPanel.dataBaseTitle") },
    ];

    return (
        <section className="leftPanel-direction">
            <ul className="leftPanel-direction__list">
                {width < 200
                    ? RenderEmptyList(listNames)
                    : RenderList(listNames)}
            </ul>
            <Link
                onClick={() => {
                    if (!arrow) {
                        setWidth(250);
                    } else {
                        setWidth(80);
                    }
                    setArrow(!arrow);
                }}
                className={
                    arrow && width > 80
                        ? "left-panel__button button-close"
                        : "left-panel__button button-open"
                }
            ></Link>
        </section>
    );
};

export default PanelWithList;
