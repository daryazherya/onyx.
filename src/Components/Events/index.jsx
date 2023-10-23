import "./index.scss";
import Header from "../Header";
import NavPanel from "../NavPanel";
import FormEvents from "./FormEvents";

const Events = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <NavPanel />
                <div className="wrapper__form">
                    <FormEvents />
                </div>
            </main>
        </div>
    );
};

export default Events;
