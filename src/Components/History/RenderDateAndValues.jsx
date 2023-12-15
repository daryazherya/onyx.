import RenderTableCell from "./RenderTableCell";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const RenderDateAndValues = ({ page, rowsPerPage }) => {
    const dataPeriodHistory = useSelector(
        (state) => state.getData.dataPeriodHistory
    );
    return dataPeriodHistory.map((substance, i) =>
        (rowsPerPage > 0
            ? substance.Value.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
              )
            : substance.Value
        ).map((obj) => {
            for (let key in obj) {
                if (key === "StrEnd") {
                    const date = obj[key];
                    if (i < 1) {
                        return (
                            <StyledTableRow key={obj.ChannelID}>
                                <TableCell>
                                    {`${new Date(
                                        obj[key]
                                    ).toLocaleDateString()} ${new Date(
                                        obj[key]
                                    ).toLocaleTimeString()}`}
                                </TableCell>
                                <RenderTableCell
                                    date={date}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                />
                            </StyledTableRow>
                        );
                    }
                }
            }
        })
    );
};

export default RenderDateAndValues;
