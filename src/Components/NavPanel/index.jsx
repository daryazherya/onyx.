import './index.scss';
import { Link } from 'react-router-dom';

const NavPanel = () => {
    return ( 
        <section className="leftPanel-direction">
					<ul className="leftPanel-list">
						<li className="leftPanel-list-item icon-indicators">
							<Link to="/" className="leftPanel-list-item-link">Показания</Link>
						</li>
						<li className="leftPanel-list-item icon-map">
							<Link to="/map" className="leftPanel-list-item-link">Карта</Link>
						</li>
						<li className="leftPanel-list-item icon-history">
							<Link to="/history" className="leftPanel-list-item-link">История</Link>		
						</li>
						<li className="leftPanel-list-item icon-events">
							<Link to="/events" className="leftPanel-list-item-link">События</Link>
						</li>
						<li className="leftPanel-list-item icon-documents">
							<Link to="/documents" className="leftPanel-list-item-link">Документы</Link>
						</li>
						<li className="leftPanel-list-item icon-settings">
							<Link to="/settings" className="leftPanel-list-item-link">Настройки</Link>
						</li>
						<li className="leftPanel-list-item icon-database">
							<Link to="/database" className="leftPanel-list-item-link">База данных</Link>
						</li>
					</ul>
				</section>
     );
}
 
export default NavPanel;