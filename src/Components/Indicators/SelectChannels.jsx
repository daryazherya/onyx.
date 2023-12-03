import { MenuItem, Select } from "@mui/material";

const SelectChannels = ({
    channels,
    select,
    setDataChart,
    setPreloader,
    setSelect,
}) => {
    const handleChange = (newValue, e) => {
        setSelect({
            Id: newValue.target.value,
            Name: e.props.children,
        });
        setPreloader(true);
        setDataChart(null);
    };
    return (
        <Select
            label="Представления"
            onChange={handleChange}
            value={
                channels && channels.find((channel) => channel.Id === select.Id)
                    ? select.Id
                    : ""
            }
            sx={{
                ".css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                    {
                        padding: 1.5,
                        paddingRight: "32px",
                    },
            }}
        >
            {channels &&
                channels.map((channel) => (
                    <MenuItem key={channel.Id} value={channel.Id}>
                        {channel.Name}
                    </MenuItem>
                ))}
        </Select>
    );
};
export default SelectChannels;
