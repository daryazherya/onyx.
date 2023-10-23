import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Preloader() {
    return (
        <Box sx={{ display: "flex", width: 500 }}>
            <CircularProgress />
        </Box>
    );
}
