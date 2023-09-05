import './index.scss';
import Header from '../Header';
import NavPanel from '../NavPanel';

const Map = () => {

    return (  
        <div className="wrapper"> 
        <Header />
        <main className ="main">
        <NavPanel />
            <p>карта</p>
        </main>    
        </div>
     );
}
 
export default Map;