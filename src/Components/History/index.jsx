import "./index.scss";
import Header from "../Header";
import NavPanel from "../NavPanel";

const History = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <NavPanel />
                <p>История</p>
            </main>
        </div>
    );
};

export default History;
