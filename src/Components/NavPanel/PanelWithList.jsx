import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './index.scss';

const PanelWithList = ({width }) => {
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

    const renderList = (arr) => {
        return arr.map((obj) => {
            return Object.keys(obj).map((key) => {
                    return <li key={key} className={`leftPanel-list-item icon-${key}`}>
                        <Link to={`/${key}`} className="leftPanel-list-item-link">{`${obj[key]}`}</Link>
                    </li>
            })
        })
    }
    const renderEmptyList = (arr) => {
        return arr.map((obj) => {
        return Object.keys(obj).map((key) => {
                return <li key={key} className="leftPanel-list-item-empty">
                    <Link to={`/${key}`} className={`icon-${key}`}></Link>
                </li>
        })
    })
}

    return ( <section  className="leftPanel-direction">
            <ul className="leftPanel-list">
                {width < 150 ? renderEmptyList(listNames): renderList(listNames)}
            </ul>   
            </section> );
}
 
export default PanelWithList;