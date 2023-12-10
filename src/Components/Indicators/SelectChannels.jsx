import { MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setDataChart } from "../../store/slices/getData";
import { setPreloader } from "../../store/slices/preload";
import { setSelect } from "../../store/slices/selects";

const SelectChannels = () => {
    const channels = useSelector((state) => state.getData.channels);
    const select = useSelector((state) => state.selectName.select);
    const dispatch = useDispatch();

    const handleChange = (newValue, e) => {
        dispatch(
            setSelect({
                Id: newValue.target.value,
                Name: e.props.children,
            })
        );
        dispatch(setPreloader(true));
        dispatch(setDataChart(null));
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
