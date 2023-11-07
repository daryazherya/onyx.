import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import RenderTableTitles from "./RenderTableTitles";
import RenderTableDataEvents from "./RenderTableDataEvents";


const EventTable = ({ dataPeriodEvents}) => {
    return dataPeriodEvents && (
                <Paper sx={{ width: "100%", overflow: "hidden" }}>
                    <TableContainer sx={{ maxHeight: 550, padding: 0 }}>
                        <Table className="events-table">
                            <TableHead className="events-table__table-head">
                                <TableRow>
                                    <RenderTableTitles />
                                </TableRow>
                            </TableHead>
                            <TableBody className="events-table__table-body">
                                <RenderTableDataEvents
                                    dataPeriodEvents={dataPeriodEvents}
                                />
                            </TableBody>
                        </Table>
                        {/* <TablePagination
                    rowsPerPageOptions={[10, 15]}
                    component="div"
                    count={
                        dataPeriodEvents &&
                        dataPeriodEvents[0].Value.length
                    }
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                /> */}
                    </TableContainer>
                </Paper>
    )
};

export default EventTable;
