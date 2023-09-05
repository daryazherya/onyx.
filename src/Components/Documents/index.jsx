import './index.scss';
import Header from '../Header';
import NavPanel from '../NavPanel';

const Documents = () => {
     return (  
         <div className="wrapper"> 
         <Header />
         <main className ="main">
         <NavPanel />
         <p>Доки</p>
         </main>    
         </div>
      );       
}
 
export default Documents;