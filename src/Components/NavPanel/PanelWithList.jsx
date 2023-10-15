import { useTranslation } from "react-i18next";
import "./index.scss";
import RenderList from "./RenderList";
import RenderEmptyList from "./RenderEmpyList";
import { useState } from "react";
import { Button } from "@mui/material";

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

    const buttonText = {
        close: "скрыть панель",
        open: ">>",
    };

    return (
        <section className="leftPanel-direction">
            <ul className="leftPanel-direction__list">
                {width < 200
                    ? RenderEmptyList(listNames)
                    : RenderList(listNames)}
            </ul>
            <Button
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
        </section>
    );
};

export default PanelWithList;
