import { useEffect, useState } from 'react';
import './mainTable.scss';
import { Link } from 'react-router-dom';


const MainTable = () => {
    const [data , setData] = useState(null);
    const [error , setError] = useState(null);

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
            setData(data)
        })
    },[data])


    const renderDataTable = (data)=> {
        return data.map(indicator => {
            return ( <tr key={indicator.ChannelID}>
                <td>{`${new Date(indicator.Time).toLocaleDateString()} ${new Date(indicator.Time).toLocaleTimeString()}`}</td>
                <td>{indicator.Name}</td>
                <td>{Math.round(indicator.Value*1000)/1000}</td>
                <td>{indicator.MeasureUnits}</td>
                <td>{Math.round(indicator.PDK*1000)/1000}</td>
                <td>{Math.round(indicator.PDKss*1000)/1000}</td>
                <td>{indicator.Status.Description}</td>
            </tr>
            )
        })
    }
    const renderDataCards = (data)=> {
        return data.map(indicator => {

            return ( 
            <div className="card-indicator" key={indicator.ChannelID}>
                <p>{`${new Date(indicator.Time).toLocaleDateString()} ${new Date(indicator.Time).toLocaleTimeString()}`}</p>
                <p>{indicator.Name}</p>
                <p>{Math.round(indicator.Value*1000)/1000}</p>
                <p>{indicator.MeasureUnits}</p>
                <p>{indicator.Status.Description}</p>
            </div>
            )
        })
    }


    return ( 
        <div className="main-table">
            <div className="table-button-switch">
            <Link to="/indicators" className = "table-button-switch-left left-active"></Link>
            <Link to="/indicators" className = "table-button-switch-right"></Link>
            </div>
            
            <table className="table-indicators">
                    <thead className="table-indicators-table-head">
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
                        <tbody className="table-indicators-table-body">  
                            {data && renderDataTable(data)}
                        </tbody>
            </table>
            <div className="cards-wrapper">{data && renderDataCards(data)}</div>
            {error && <div className ="tableData-error">{error}</div>}
        </div>
        
     );
}
 
export default MainTable;