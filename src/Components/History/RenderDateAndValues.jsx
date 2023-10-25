import RenderTableCell from "./RenderTableCell";
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

const RenderDateAndValues = ({ data, page, rowsPerPage }) => {
    return data.map((substance, i) =>
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
                            <StyledTableRow>
                                <TableCell key={obj.ChannelID}>
                                    {obj[key]}
                                </TableCell>
                                <RenderTableCell
                                    data={data}
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
