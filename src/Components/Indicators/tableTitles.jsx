import RenderDataTable from "./RenderTable";

const TableTitles = ({ data, t }) => {
    return (
        <table className="table-indicators">
            <thead className="table-indicators__table-head">
                <tr>
                    <th>{t("mainTable.tableTitles.time")}</th>
                    <th>{t("mainTable.tableTitles.parameter")}</th>
                    <th>{t("mainTable.tableTitles.value")}</th>
                    <th>{t("mainTable.tableTitles.measureUnits")}</th>
                    <th>{t("mainTable.tableTitles.PDK")}</th>
                    <th>{t("mainTable.tableTitles.PDKss")}</th>
                    <th>{t("mainTable.tableTitles.status")}</th>
                </tr>
            </thead>
            <tbody className="table-indicators__table-body">
                {data && RenderDataTable(data)}
            </tbody>
        </table>
    );
};
export default TableTitles;
