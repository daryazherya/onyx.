import Header from "../Header";
import NavPanel from "../NavPanel";
import './index.scss';
// import { useState } from "react";
import MainTable from "./MainTable";
import { useContext } from "react"
import { AppContext } from "../App";


const Indicators = () => {
const {width,setWidth} = useContext(AppContext);
    return (
        <div className="wrapper"> 
        <Header />
        <main className ="main">
        <NavPanel width = {width} setWidth={setWidth}/>
        <MainTable/>
        </main>    
        </div>)
}
 
export default Indicators;