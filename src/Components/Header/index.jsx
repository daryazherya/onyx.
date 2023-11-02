import "./index.scss";
import logo from "./logo/header-logo.png";

const Header = () => {
    return  <header className="header">
                <div className="header-title">
                    <div className="header-logo-icon-container">
                        <img
                            className="header-logo-icon"
                            src={logo}
                            alt="logo"
                        />
                    </div>
                </div>
            </header>
};

export default Header;
