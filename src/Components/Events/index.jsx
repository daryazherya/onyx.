import "./index.scss";
import Header from "../Header";
import NavPanel from "../NavPanel";

const Events = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <NavPanel />
                <p>События</p>
            </main>
        </div>
    );
};

export default Events;
