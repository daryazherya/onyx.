import "./index.scss";
import Header from "../Header";
import NavPanel from "../NavPanel";
import FormData from "./FormData";

const History = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <NavPanel />
                <div>
                    <FormData />
                </div>
            </main>
        </div>
    );
};

export default History;
