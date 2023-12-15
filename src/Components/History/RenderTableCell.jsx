import TableCell from "@mui/material/TableCell";
import { useSelector } from "react-redux";

const RenderTableCell = ({ date, page, rowsPerPage }) => {
    const dataPeriodHistory = useSelector(
        (state) => state.getData.dataPeriodHistory
    );

    return dataPeriodHistory.map((substance) =>
        (rowsPerPage > 0
            ? substance.Value.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
              )
            : substance.Value
        ).map((obj) => {
            if (Object.values(obj).includes(date)) {
                for (let key in obj) {
                    if (key === "StrValue") {
                        return <TableCell>{obj[key].slice(0, 5)}</TableCell>;
                    }
                }
            }
        })
    );
};

export default RenderTableCell;
