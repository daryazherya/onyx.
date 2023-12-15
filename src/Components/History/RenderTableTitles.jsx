import TableCell from "@mui/material/TableCell";
import { useSelector } from "react-redux";

const RenderTableTitles = () => {
    const dataPeriodHistory = useSelector(
        (state) => state.getData.dataPeriodHistory
    );
    return dataPeriodHistory.map((substance) => {
        console.log(substance.Key.ChannelID);
        return (
            <TableCell sx={{ fontWeight: "800" }} key={substance.Key.ChannelID}>
                {substance.Key.ChannelName}
            </TableCell>
        );
    });
};

export default RenderTableTitles;
