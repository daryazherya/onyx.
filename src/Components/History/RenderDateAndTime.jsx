import RenderFormData from "./RenderFormData";
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { styled } from '@mui/material/styles'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover}, 
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

const RenderDateAndTime = ({data}) => {
    return data.map((substance, i)=> substance.Value.map(obj => {
        for(let key in obj) {
            if(key === 'StrEnd') {
                const date = obj[key];
                if(i < 1) {
                return  < StyledTableRow > 
                    <TableCell key ={obj.ChannelID}>
                        {obj[key]}
                    </TableCell> 
                    <RenderFormData data = {data} date = {date}/>
                </ StyledTableRow >
                }     
            }
        }
    }))
    
}
 
export default RenderDateAndTime;