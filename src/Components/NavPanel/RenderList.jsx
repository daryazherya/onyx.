import { Link } from 'react-router-dom';
import './index.scss';

const RenderList = (arr) => {
    return arr.map((obj) => {
        return Object.keys(obj).map((key) => {
                return <li key={key} className={`leftPanel-list__item icon-${key}`}>
                    <Link to={`/${key}`} className="leftPanel-list__item-link">{`${obj[key]}`}</Link>
                </li>
        })
    })
}
export default RenderList;