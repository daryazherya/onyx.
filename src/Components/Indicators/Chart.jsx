import { useSelector } from "react-redux";
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
import { colors } from "../../variables/colorsChart";

const Chart = () => {
    const dataChart = useSelector((state) => state.getData.dataChart);
    const preloader = useSelector((state) => state.preload.preloader);

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
