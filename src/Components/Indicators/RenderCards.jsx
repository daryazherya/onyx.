import { useState } from "react";

const RenderDataCards = (data)=> {
    // const [percents, setPercents] = useState(0);

    const calculatePercents  = (value, pdk) => {
        if(!value || !pdk) {
            return 'Не введена ПДК';
        }
       const result = (Math.round(value*100)/100) * 100 /(Math.round(pdk*100)/100);
        return Math.round(result * 10)/10 + '%';
    }

    return data.map(indicator => {
        return <div className="card-indicator" key={indicator.ChannelID}>
            <p className="card-indicator__date">{`${new Date(indicator.Time).toLocaleDateString()} ${new Date(indicator.Time).toLocaleTimeString()}`}</p>
            <p className="card-indicator__name">{indicator.Name}</p>
            <p className="card-indicator__value">{Math.round(indicator.Value*1000)/1000}</p>
            <p className="card-indicator__units">{indicator.MeasureUnits}</p>
            <p className="card-indicator__status">Статус прибора: {indicator.Status.Description}</p>
            <div className="card-indicator__progress-bar-container">
            <p className="card-indicator__progress-bar">{calculatePercents(indicator.Value,indicator.PDK)}</p>   
            </div>
        </div>       
    })
}
export default RenderDataCards;