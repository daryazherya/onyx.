import { Link } from "react-router-dom";
import "./index.scss";
const RenderEmptyList = (arr) => {
    return arr.map((obj) => {
        return Object.keys(obj).map((key) => {
            return (
                <li key={key} className="leftPanel-list__item_empty">
                    <Link to={`/${key}`} className={`icon-${key}`}></Link>
                </li>
            );
        });
    });
};
export default RenderEmptyList;
