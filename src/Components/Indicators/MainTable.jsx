import { useEffect, useState } from "react";
import "./index.scss";
// import { Link } from 'react-router-dom';
import RenderDataTable from "./RenderTable";
import SwitchButton from "./TableButton";
import RenderDataCards from "./RenderCards";
import SelectChannels from "./SelectChannels";

const MainTable = () => {
    const [data, setData] = useState(null);
    const [channels, setChannels] = useState(null);
    const [switchButton, setSwitchButton] = useState(true);
    const [select, setSelect] = useState({
        Id: 1,
        Name: "Пост Дарьи.Все каналы",
    });
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("http://localhost:9000/api/measurements/getchannelsets")
            .then((res) => {
                if (!res.ok) {
                    setError(true);
                    throw Error("Ошибка! Нет данных o каналах.");
                }

                return res.json();
            })
            .then((channels) => {
                setChannels(channels);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:9000/api/measurements/setcurrentchannelset", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(select),
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => console.log(data, 11));
    }, []);

    useEffect(() => {
        fetch("http://localhost:9000/api/measurements/getmeasurenow")
            .then((res) => {
                if (!res.ok) {
                    setError(true);
                    throw Error("Ошибка! Нет данных.");
                }
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <>
            <div className="table">
                <div className="table__wrapper-settings">
                    <select
                        onChange={(e) => {
                            setSelect({
                                Id: +e.target.value,
                                Name: e.target.children[e.target.value - 1]
                                    .innerText,
                            });
                        }}
                        className="table__select-channels"
                    >
                        {channels && <SelectChannels channels={channels} />}
                    </select>
                    <SwitchButton
                        switchButton={switchButton}
                        setSwitchButton={setSwitchButton}
                    />
                </div>
                {switchButton && (
                    <table className="table-indicators">
                        <thead className="table-indicators__table-head">
                            <tr>
                                <th>Время</th>
                                <th>Параметр</th>
                                <th>Значение</th>
                                <th>Ед. измерения</th>
                                <th>ПДК мр</th>
                                <th>ПДК сс</th>
                                <th>Статус устройства</th>
                            </tr>
                        </thead>
                        <tbody className="table-indicators__table-body">
                            {data && RenderDataTable(data)}
                        </tbody>
                    </table>
                )}
                {!switchButton && (
                    <div className="cards-wrapper">
                        {data && <RenderDataCards data={data} />}
                    </div>
                )}
                {error && (
                    <div className="tableData-error">
                        Ошибка загрузки данных.
                    </div>
                )}
            </div>
        </>
    );
};

export default MainTable;
