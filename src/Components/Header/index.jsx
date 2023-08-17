import './index.scss';
import logo from './logo/header-logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    return (  
        <>
        <header className="header">
            <div className='header-title'>
                <div className="header-logo-icon-container">
                    <img className="header-logo-icon" src={logo} alt="logo"/>
                </div>
                <div className="header-settings">
                    <button>Выбрать язык</button>
                    <Link to="">O программе</Link>
                </div>
            </div>
        </header>
        </>
    );
}
 
export default Header;