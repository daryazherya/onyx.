import RenderTableTitles from "./RenderTableTitles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import RenderDateAndValues from "./RenderDateAndValues";
import { useState } from "react";
import { useSelector } from "react-redux";

const RenderTableHistory = () => {
    const preloader = useSelector((state) => state.preload.preloader);
    const dataPeriodHistory = useSelector(
        (state) => state.getData.dataPeriodHistory
    );

    const [pageHistoryTable, setPageHistoryTable] = useState(0);
    const [rowsPerPageHistoryTable, setRowsPerPageHistoryTable] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPageHistoryTable(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPageHistoryTable(parseInt(event.target.value, 10));
        setPageHistoryTable(0);
    };

    if (dataPeriodHistory.length === 0) {
        return <div> Данные за выбранный период пока не сформированы</div>;
    }

    const emptyRows =
        pageHistoryTable > 0
            ? Math.max(
                  0,
                  (1 + pageHistoryTable) * rowsPerPageHistoryTable -
                      (dataPeriodHistory
                          ? dataPeriodHistory[0].Value.length
                          : 0)
              )
            : 0;

    return (
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
            {!preloader && dataPeriodHistory && (
                <TableContainer sx={{ maxHeight: 550, padding: 0 }}>
                    <Table className="history-table" stickyHeader>
                        <TableHead className="history-table__table-head">
                            <TableRow>
                                <TableCell>Дата/время</TableCell>
                                <RenderTableTitles />
                            </TableRow>
                        </TableHead>
                        <TableBody className="history-table__table-body">
                            <RenderDateAndValues
                                page={pageHistoryTable}
                                rowsPerPage={rowsPerPageHistoryTable}
                            />
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 38 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[10, 15]}
                        labelRowsPerPage={"Количество строк"}
                        labelDisplayedRows={function defaultLabelDisplayedRows({
                            from,
                            to,
                            count,
                        }) {
                            return `${from}–${to} из ${
                                count !== -1 ? count : `больше чем ${to}`
                            }`;
                        }}
                        component="div"
                        count={
                            dataPeriodHistory &&
                            dataPeriodHistory[0].Value.length
                        }
                        rowsPerPage={rowsPerPageHistoryTable}
                        page={pageHistoryTable}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            )}
        </Paper>
    );
};

export default RenderTableHistory;
