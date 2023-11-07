
const RenderDataCards = ({ data, t, preloader }) => {
    const calculatePercents = (value, pdk) => {
        if (!value || !pdk) {
            return "Нет ПДК";
        } else {
            const result = (value.toFixed(2) * 100) / pdk.toFixed(2);
            return `${result.toFixed(1)}%`;
        }
    };

    const setGraduent = (value, pdk) => {
        if (!value || !pdk) {
            return 0;
        } else {
            const result = (value.toFixed(2) * 100) / pdk.toFixed(2);
            return result.toFixed();
        }
    };

    return data.map((indicator) => {
        return !preloader && (
            <div className="card__indicator" key={indicator.ChannelID}>
                <div className="card__indicator__description">
                    <p className="card__indicator__date">{`${new Date(
                        indicator.Time
                    ).toLocaleDateString()} ${new Date(
                        indicator.Time
                    ).toLocaleTimeString()}`}</p>
                    <p className="card__indicator__name">
                        {indicator.SubstanceShortName}
                    </p>
                    <p className="card__indicator__value">
                        {indicator.Value.toFixed(3)}
                    </p>
                    <p className="card__indicator__units">
                        {indicator.MeasureUnits}
                    </p>
                    <p>{t("mainTable.tableTitles.status")}:</p>
                    <p className="card__indicator__status">
                        {indicator.Status.Description}
                    </p>
                </div>
                <div className="card__indicator__calculator">
                    {calculatePercents(indicator.Value, indicator.PDK)}
                </div>
                <div className="card__indicator__progress-bar-container">
                    <p
                        className="card__indicator__progress-bar"
                        style={{
                            height: `${setGraduent(
                                indicator.Value,
                                indicator.PDK
                            )}px`,
                            background:
                                setGraduent(indicator.Value, indicator.PDK) < 50
                                    ? "linear-gradient(0deg ,#39d812 0%,#edc71f 100%)"
                                    : "linear-gradient(0deg ,#39d812 0%,#f0623b 100%)",
                        }}
                    ></p>
                </div>
            </div>
        );
    });
};
export default RenderDataCards;
