import TableCell from "@mui/material/TableCell";

const RenderTableTitles = () => {
    const titles = ["Источник", "Описание", "Статус", "Время", "Важное"];
    return titles.map((el) => {
        return <TableCell sx={{ fontWeight: "800" }}>{el}</TableCell>;
    });
};

export default RenderTableTitles;
