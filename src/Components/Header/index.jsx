import './index.scss';
import logo from './logo/header-logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import i18n from 'i18next'
import { useTranslation } from 'react-i18next';



const Header = () => {
    const { t } = useTranslation();
    const [ lang, setLang] = useState(true);

    const toggleLang = () => {
        if(lang) {
            setLang(!lang);
            i18n.changeLanguage('en');
            localStorage.setItem('i18nextLng', JSON.stringify('en'))
        } else {
            setLang(!lang);    
            i18n.changeLanguage('ru');
            localStorage.setItem('i18nextLng', JSON.stringify('ru'))
        }
        
    }
      
    
    return (  
        <>
        <header className="header">
            <div className='header-title'>
                <div className="header-logo-icon-container">
                    <img className="header-logo-icon" src={logo} alt="logo"/>
                </div>
                <div className="header-settings">
                    <Link to="">{t('header.about')}</Link>
                    <input onClick={toggleLang} className= "header-settings-toggle" type="checkbox"></input>
                </div>
            </div>
        </header>
        </>
    );
}
 
export default Header;