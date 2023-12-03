import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";

const Chart = ({ dataChart, preloader }) => {
    const colors = [
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#00FFFF",
        "#FF00FF",
        "#800000",
        "#808000",
        "#800080",
        "#000080",
        "#C0C0C0",
        "#00FF00",
        "#00FFFF",
        "#FF00FF",
        "#FFA500",
        "#FFC0CB",
        "#DDA0DD",
        "#E6E6FA",
        "#4B0082",
        "#FFD700",
        "#FF7F50",
        "#FFDAB9",
        "#B22222",
        "#D2691E",
        "#FFFFF0",
    ];

    return (
        !preloader &&
        dataChart && (
            <ResponsiveContainer width="100%" height="50%">
                <LineChart
                    data={dataChart}
                    margin={{
                        top: 40,
                        right: 40,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    {dataChart &&
                        Object.keys(dataChart[0]).map((element, i) => {
                            if (i !== 0) {
                                return (
                                    <Line
                                        dataKey={element}
                                        key={i}
                                        strokeWidth={2}
                                        stroke={colors[i]}
                                    ></Line>
                                );
                            }
                        })}
                    <XAxis dataKey="time" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="4 4" />
                    <Tooltip />
                    <Legend verticalAlign="top" height={50} width={"100%"} />
                </LineChart>
            </ResponsiveContainer>
        )
    );
};
export default Chart;
