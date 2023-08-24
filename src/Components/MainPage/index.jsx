import './index.scss';
import Header from '../Header';
import NavPanel from "../NavPanel";
import Indicators from '../Indicators';

const MainPage = () => {
    return (  
        <> 
        <Header />
        <main className ="main">
        <NavPanel />
        <Indicators/>
        </main>    
        </>);
}
 
export default MainPage;