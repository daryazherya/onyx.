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

const RenderDataTable = (data) => {
    return data.map((indicator) => {
        return (
            <StyledTableRow key={indicator.ChannelID}>
                <TableCell>{`${new Date(
                    indicator.Time
                ).toLocaleDateString()} ${new Date(
                    indicator.Time
                ).toLocaleTimeString()}`}</TableCell>
                <TableCell>{indicator.SubstanceShortName}</TableCell>
                <TableCell>{indicator.Value.toFixed(3)}</TableCell>
                <TableCell>{indicator.MeasureUnits}</TableCell>
                <TableCell>
                    {indicator.PDK
                        ? indicator.PDK.toFixed(3)
                        : "Не введена ПДК"}
                </TableCell>
                <TableCell>
                    {indicator.PDKss
                        ? indicator.PDKss.toFixed(3)
                        : "Не введена ПДКcc"}
                </TableCell>
                <TableCell>{indicator.Status.Description}</TableCell>
            </StyledTableRow>
        );
    });
};
export default RenderDataTable;
