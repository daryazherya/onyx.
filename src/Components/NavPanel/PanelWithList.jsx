import { useTranslation } from "react-i18next";
import "./index.scss";
import RenderList from "./RenderList";
import RenderEmptyList from "./RenderEmpyList";
import PanelButton from "../Buttons/PanelButton";
import { useSelector } from "react-redux";

const PanelWithList = () => {
    const width = useSelector((state) => state.widthNav.width);

    const { t } = useTranslation();

    const listNames = [
        { indicators: t("navPanel.indicatorsTitle") },
        { map: t("navPanel.mapTitle") },
        { history: t("navPanel.historyTitle") },
        { events: t("navPanel.eventsTitle") },
        { documents: t("navPanel.documentsTitle") },
        { settings: t("navPanel.settingsTitle") },
        { dataBase: t("navPanel.dataBaseTitle") },
        { about: t("navPanel.about") },
    ];

    return (
        <section className="leftPanel-direction">
            <ul className="leftPanel-direction__list">
                {width < 200
                    ? RenderEmptyList(listNames)
                    : RenderList(listNames)}
            </ul>
            <PanelButton />
        </section>
    );
};

export default PanelWithList;
