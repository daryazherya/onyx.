import Indicators from "../Indicators";
import Map from "../Map";
import History from "../History";
import Events from "../Events";
import Documents from "../Documents";
import { createContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const AppContext = createContext(null);
    return (
        <AppContext.Provider>
    <Router>
      <Routes>
        <Route path="/" element= {<Indicators />} ></Route>
        <Route path="/map" element={<Map/>}></Route>
        <Route path="/history" element={<History/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/documents" element={<Documents/>}></Route>
        {/* <Route path="/settings" element={<Settings/>}></Route>
        <Route path="/database" element={<Database/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>  */}
      </Routes>
    </Router>
    </AppContext.Provider> 
    );
}

export default App;
