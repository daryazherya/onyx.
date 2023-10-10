import "./index.scss";
import Header from "../Header";
import NavPanel from "../NavPanel";
import FormData from "./FormData";
import RenderDataTable from "../Indicators/RenderTable";

const History = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="main">
                <NavPanel />
                <div>
                <FormData/>
                {/* <RenderDataTable/> */}
                </div>
            </main>
        </div>
    );
};

export default History;
