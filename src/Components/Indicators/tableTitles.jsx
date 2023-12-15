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
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const TableTitles = memo(function TableTitles() {
    const data = useSelector((state) => state.getData.data);
    const preloader = useSelector((state) => state.preload.preloader);
    const { t } = useTranslation();
    const [pageForIndicator, setPageForIndicator] = useState(0);
    const [rowsPerPageIndicator, setRowsPerPageIndicator] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPageForIndicator(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        // console.log(event.target.value);
        setRowsPerPageIndicator(parseInt(event.target.value, 5));
        setPageForIndicator(0);
    };

    const emptyRows =
        pageForIndicator > 0
            ? Math.max(
                  0,
                  (1 + pageForIndicator) * rowsPerPageIndicator -
                      (data ? data.length : 0)
              )
            : 0;

    return (
        !preloader &&
        data && (
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
                        <RenderDataTable
                            rowsPerPage={rowsPerPageIndicator}
                            page={pageForIndicator}
                        />
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
                    rowsPerPage={rowsPerPageIndicator}
                    page={pageForIndicator}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </TableContainer>
        )
    );
});
export default TableTitles;
