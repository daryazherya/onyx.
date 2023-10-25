import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const RenderTableDataEvents = ({ dataPeriodEvents }) => {
    return dataPeriodEvents.map((message) => {
        return (
            <StyledTableRow key={message.AlertID}>
                <TableCell>{message.Source}</TableCell>
                <TableCell>{message.Value}</TableCell>
                <TableCell>{message.StatusDesc}</TableCell>
                <TableCell>{message.Timestamp}</TableCell>
                <TableCell>{message.Importance}</TableCell>
            </StyledTableRow>
        );
    });
};
export default RenderTableDataEvents;
