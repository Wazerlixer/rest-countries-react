export const CurrentCurrency = ({ currency, value, setCurrentValue }) => {
    let currentValue = (value * currency?.rate).toFixed(2);

    return (
        <div className="current-currency">
            <input
                value={currentValue}
                onChange={
                    (event) => setCurrentValue(event.target.value / currency?.rate)
                }
                type="number"
                id={currency?.unit}
            />
            <label htmlFor={currency?.unit}>
                {
                    currency?.unit
                }
            </label>
        </div>
    )
}