import RenderDataTable from "./RenderTable";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const TableTitles = ({ data, t, preloader }) => {
    return !preloader && (
        <TableContainer component={Paper}>
        <Table className="table-indicators">
            <TableHead className="table-indicators__table-head">
                <TableRow>
                    <TableCell>{t("mainTable.tableTitles.time")}</TableCell>
                    <TableCell>{t("mainTable.tableTitles.parameter")}</TableCell>
                    <TableCell>{t("mainTable.tableTitles.value")}</TableCell>
                    <TableCell>{t("mainTable.tableTitles.measureUnits")}</TableCell>
                    <TableCell>{t("mainTable.tableTitles.PDK")}</TableCell>
                    <TableCell>{t("mainTable.tableTitles.PDKss")}</TableCell>
                    <TableCell>{t("mainTable.tableTitles.status")}</TableCell>
                </TableRow>
            </TableHead>
            <TableBody className="table-indicators__table-body">
                {data && RenderDataTable(data)}
            </TableBody>
        </Table>
        </TableContainer>
    );
};
export default TableTitles;
