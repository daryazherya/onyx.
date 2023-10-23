import "./index.scss";
import Header from "../Header";
import NavPanel from "../NavPanel";
import FormHistory from "./FormHistory";

const History = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <NavPanel />
                <div className="wrapper__form">
                    <FormHistory />
                </div>
            </main>
        </div>
    );
};

export default History;
