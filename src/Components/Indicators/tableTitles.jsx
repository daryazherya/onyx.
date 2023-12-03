import RenderDataTable from "./RenderTable";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { memo, useState } from "react";
import { TablePagination } from "@mui/material";

const TableTitles = memo(function TableTitles({ data, t, preloader }) {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        console.log(event.target.value);
        setRowsPerPage(parseInt(event.target.value, 5));
        setPage(0);
    };

    const emptyRows =
        page > 0
            ? Math.max(0, (1 + page) * rowsPerPage - (data ? data.length : 0))
            : 0;

    return (
        !preloader && (
            <TableContainer component={Paper}>
                <Table className="table-indicators" stickyHeader>
                    <TableHead className="table-indicators__table-head">
                        <TableRow>
                            <TableCell>
                                {t("mainTable.tableTitles.time")}
                            </TableCell>
                            <TableCell>
                                {t("mainTable.tableTitles.parameter")}
                            </TableCell>
                            <TableCell>
                                {t("mainTable.tableTitles.value")}
                            </TableCell>
                            <TableCell>
                                {t("mainTable.tableTitles.measureUnits")}
                            </TableCell>
                            <TableCell>
                                {t("mainTable.tableTitles.PDK")}
                            </TableCell>
                            <TableCell>
                                {t("mainTable.tableTitles.PDKss")}
                            </TableCell>
                            <TableCell>
                                {t("mainTable.tableTitles.status")}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="table-indicators__table-body">
                        {data && RenderDataTable(data, rowsPerPage, page)}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 56.5 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[5, 10]}
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
                    count={data && data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        )
    );
});
export default TableTitles;
