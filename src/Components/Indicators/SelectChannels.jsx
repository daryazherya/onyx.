const SelectChannels = ({ channels }) => {
    return channels.map((channel) => {
        return (
            <option key={channel.Id} value={channel.Id}>
                {channel.Name}
            </option>
        );
    });
};
export default SelectChannels;
