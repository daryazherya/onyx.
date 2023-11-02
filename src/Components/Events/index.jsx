import "./index.scss";
import NavPanel from "../NavPanel";
import FormEvents from "./FormEvents";

const Events = () => {
    return (
        <div className="wrapper">
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
