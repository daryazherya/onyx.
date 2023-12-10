import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import RenderTableTitles from "./RenderTableTitles";
import RenderTableDataEvents from "./RenderTableDataEvents";

const EventTable = ({ dataPeriodEvents, preloader }) => {
    return (
        dataPeriodEvents &&
        !preloader && (
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer sx={{ maxHeight: 550, padding: 0 }}>
                    <Table className="events-table" stickyHeader>
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
                </TableContainer>
            </Paper>
        )
    );
};

export default EventTable;
