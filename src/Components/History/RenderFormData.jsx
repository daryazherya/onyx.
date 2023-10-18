import TableCell from '@mui/material/TableCell';



const RenderFormData = ({data,date}) => {
    return data.map(substance => substance.Value.map(obj => {
        if(Object.values(obj).includes(date)) {
            for(let keygen in obj) {  
                if(keygen === 'StrValue' ) {
                    return <TableCell>
                        {obj[keygen]}
                    </TableCell>                  
                } 
            }
        }       
    }))
}
 
export default RenderFormData;