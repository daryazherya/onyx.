import RenderTableTitles from "./RenderTableTitles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import RenderDateAndValues from "./RenderDateAndValues";


const RenderTableHistory = ({ dataPeriodHistory, preloader }) => {
    // console.log(dataPeriodHistory);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows =
        page > 0
            ? Math.max(
                  0,
                  (1 + page) * rowsPerPage -
                      (dataPeriodHistory
                          ? dataPeriodHistory[0].Value.length
                          : 0)
              )
            : 0;

    return (
        <>
            {preloader && <Preloader />}
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                {!preloader && dataPeriodHistory && (
                    <TableContainer sx={{ maxHeight: 550, padding: 0 }}>
                        <Table className="history-table">
                            <TableHead className="history-table__table-head">
                                <TableRow>
                                    <TableCell>Дата/время</TableCell>
                                    <RenderTableTitles
                                        data={dataPeriodHistory}
                                        page={page}
                                        rowsPerPage={rowsPerPage}
                                    />
                                </TableRow>
                            </TableHead>
                            <TableBody className="history-table__table-body">
                                <RenderDateAndValues
                                    data={dataPeriodHistory}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                />
                                {emptyRows > 0 && (
                                    <TableRow
                                        style={{ height: 38 * emptyRows }}
                                    >
                                        <TableCell colSpan={6} />
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                        <TablePagination
                            rowsPerPageOptions={[10, 15]}
                            component="div"
                            count={
                                dataPeriodHistory &&
                                dataPeriodHistory[0].Value.length
                            }
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </TableContainer>
                )}
            </Paper>
        </>
    );
};

export default RenderTableHistory;
