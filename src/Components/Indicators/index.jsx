import NavPanel from "../NavPanel";
import "./index.scss";
import MainTable from "./MainTable";

const Indicators = () => {
    return (
        <div className="wrapper">
            <main className="main">
                <NavPanel />
                <MainTable />
            </main>
        </div>
    );
};

export default Indicators;
