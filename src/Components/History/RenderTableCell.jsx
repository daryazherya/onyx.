import TableCell from "@mui/material/TableCell";

const RenderTableCell = ({ data, date, page, rowsPerPage }) => {
    return data.map((substance) =>
        (rowsPerPage > 0
            ? substance.Value.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
              )
            : substance.Value
        ).map((obj) => {
            if (Object.values(obj).includes(date)) {
                for (let keygen in obj) {
                    if (keygen === "StrValue") {
                        return <TableCell>{obj[keygen]}</TableCell>;
                    }
                }
            }
        })
    );
};

export default RenderTableCell;
