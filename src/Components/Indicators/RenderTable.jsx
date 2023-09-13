
const RenderDataTable = (data)=> {
    return data.map(indicator => {
        return  <tr key={indicator.ChannelID}>
            <td>{`${new Date(indicator.Time).toLocaleDateString()} ${new Date(indicator.Time).toLocaleTimeString()}`}</td>
            <td>{indicator.Name}</td>
            <td>{Math.round(indicator.Value*1000)/1000}</td>
            <td>{indicator.MeasureUnits}</td>
            <td>{Math.round(indicator.PDK*1000)/1000}</td>
            <td>{Math.round(indicator.PDKss*1000)/1000}</td>
            <td>{indicator.Status.Description}</td>
        </tr>
        
    })
} 
export default RenderDataTable;