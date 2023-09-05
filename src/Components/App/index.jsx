import { Suspense } from 'react';
// import { createContext } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../MainPage";
import Map from "../Map";
import History from "../History";
import Events from "../Events";
import Documents from "../Documents";
import Indicators from '../Indicators';
import { useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext(null);
function App() {
  const [width, setWidth] = useState(250);

    return (
      <Suspense>
        <AppContext.Provider value={{width, setWidth}}>
    <Router>
      <Routes>
        {/* <Route path="/" element= {<MainPage/>}></Route> */}
        <Route path="/indicators" element= {<Indicators/>}></Route>
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
      </Suspense>
    );

}
export default App;
