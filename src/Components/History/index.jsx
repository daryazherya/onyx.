import "./index.scss";
import Header from "../Header";
import NavPanel from "../NavPanel";
import Form from "./Form";

const History = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <NavPanel />
                <div className="wrapper__form">
                    <Form />
                </div>
            </main>
        </div>
    );
};

export default History;
