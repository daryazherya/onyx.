import { useTranslation } from 'react-i18next';
import './index.scss';
import RenderList from './RenderList';
import RenderEmptyList from './RenderEmpyList';
// import { useEffect, useState } from 'react';

const PanelWithList = ({ width}) => {
    
    
    const { t } = useTranslation();
    const listNames = [
        {indicators: t('navPanel.indicatorsTitle')},
        {map: t('navPanel.mapTitle')},
        {history: t('navPanel.historyTitle')},
        {events: t('navPanel.eventsTitle')},
        {documents: t('navPanel.documentsTitle')},
        {settings: t('navPanel.settingsTitle')},
        {dataBase: t('navPanel.dataBaseTitle')}
    ];

    return ( <section  className="leftPanel-direction">
            <ul className="leftPanel-direction__list" >
                {width < 200 ? RenderEmptyList(listNames) : RenderList(listNames)}
            </ul> 
            <div className={"left-panel__button button-close"}>fkhkjv</div>  
            </section> );
}
 
export default PanelWithList;