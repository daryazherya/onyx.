import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const EventTable = ({ dataPeriodEvents }) => {
    // console.log(dataPeriodEvents);
    const columns = [
        [
            { field: "Источник" },
            { field: "Описание" },
            { field: "Статус" },
            { field: "Время" },
            { field: "Важное" },
        ],
    ];

    return (
        <Box sx={{ height: 400, width: "100%" }}>
            {dataPeriodEvents && (
                <DataGrid
                    rows={[]}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                />
            )}
        </Box>
    );
};

export default EventTable;
