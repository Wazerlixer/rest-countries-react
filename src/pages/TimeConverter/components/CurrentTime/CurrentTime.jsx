export const CurrentTime = ({ time, value, setCurrentValue }) => {
    let currentValue = (value * time?.rate).toFixed(2);

    return (
        <div className="current-time">
            <input
                value={currentValue}
                onChange={
                    (event) => setCurrentValue(event.target.value / time?.rate)
                }
                type="number"
                id={time?.unit}
            />
            <label htmlFor={time?.unit}>
                {
                    time?.unit
                }
            </label>
        </div>
    )
}