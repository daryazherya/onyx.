import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Preloader() {
    return (
        <Box
            sx={{
                display: "flex",
                alighItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: 25,
            }}
        >
            <CircularProgress size={50} thickness={5} />
        </Box>
    );
}
