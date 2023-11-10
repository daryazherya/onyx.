import { MenuItem } from "@mui/material";

const SelectChannels = ({ channels }) => {
    return channels.map((channel) => {
        return (
            <MenuItem key={channel.Id} value={channel.Id}>
                {channel.Name}
            </MenuItem>
        );
    });
};
export default SelectChannels;
