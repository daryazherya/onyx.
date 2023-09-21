
const RenderDataTable = (data)=> {
    return data.map(indicator => {
        return  <tr key={indicator.ChannelID}>
            <td>{`${new Date(indicator.Time).toLocaleDateString()} ${new Date(indicator.Time).toLocaleTimeString()}`}</td>
            <td>{indicator.Name}</td>
            <td>{indicator.Value.toFixed(3)}</td>
            <td>{indicator.MeasureUnits}</td>
            <td>{indicator.PDK ? indicator.PDK.toFixed(3) : 'Не введена ПДК'}</td>
            <td>{indicator.PDKss ? indicator.PDKss.toFixed(3) : 'Не введена ПДКcc'}</td>
            <td>{indicator.Status.Description}</td>
        </tr>
        
    })
} 
export default RenderDataTable;