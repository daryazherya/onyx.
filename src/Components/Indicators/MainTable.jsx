import { useEffect, useState } from 'react';
import './index.scss';
// import { Link } from 'react-router-dom';
import RenderDataTable from './RenderTable';
import SwitchButton from './TableButton';
import RenderDataCards from './RenderCards';


const MainTable = () => {
    const [data , setData] = useState(null);
    const [switchButton , setSwitchButton] = useState(true);
    const [progressBar ,setProgressBar]= useState(0);
    // const [error , setError] = useState(null);
    

    useEffect(()=> {
        fetch('http://localhost:8000/data')
        .then((res) => {
            if(res.ok !== true){
                throw Error('Ошибка! Нет данных.');
            }
            // setError(null);
            return res.json();
        }).then((data)=>{
            // console.log(data)
            setData(data);
        })
    },[data])

    return ( 
        <div className="table">
            <SwitchButton switchButton={switchButton} setSwitchButton={setSwitchButton}/>
            {switchButton && <table className="table-indicators">
                    <thead className="table-indicators__table-head">
                            <tr>
                                <th>Время</th>
                                <th>Параметр</th>
                                <th>Значение</th>
                                <th>Ед. измерения</th>
                                <th>ПДК мр</th>
                                <th>ПДК сс</th>
                                <th>Статус устройства</th>
                            </tr>
                        </thead>
                        <tbody className="table-indicators__table-body">  
                            {data && RenderDataTable(data)}
                        </tbody>
            </table>}
           {!switchButton && <div className="cards-wrapper">{data && RenderDataCards(data)}</div>}
            {/* {error && <div className ="tableData-error">{error}</div>} */}
        </div>
        
     );
}
 
export default MainTable;