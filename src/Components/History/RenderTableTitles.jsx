import TableCell from "@mui/material/TableCell";

const RenderTableTitles = ({ data }) => {
    return data.map((substance) => {
        return (
            <TableCell sx={{ fontWeight: "800" }} key={substance.Key.ChannelID}>
                {substance.Key.ChannelName}
            </TableCell>
        );
    });
};

export default RenderTableTitles;
