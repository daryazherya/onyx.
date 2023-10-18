import TableCell from '@mui/material/TableCell';

const RenderFormTitles = ({data}) => {
    return data.map(substance => {
        return <TableCell sx={{fontWeight: '800'}}
            key={substance.Key.ChannelID}
            > 
            {substance.Key.ChannelName} 
            {/* {substance.Key.PostName}  */}
        </TableCell>   
    })
}
 
export default RenderFormTitles;