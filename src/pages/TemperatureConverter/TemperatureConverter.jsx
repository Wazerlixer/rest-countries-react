import { useState } from "react"

export const TemperatureConverter = () => {
    const [currentTemperature, setCurrentTemperature] = useState(0)

    return (
        <div className="tempertaure-converter">
            <input type="number" id="fahrenheit" value={((currentTemperature * 9 / 5) + 32).toFixed(1)}
                onChange={
                    (event) => {
                        setCurrentTemperature((event.target.value - 32) * 5 / 9)
                    }
                }
            />
            <label htmlFor="fahrenheit">fahrenheit</label>
            <br />
            <input type="number" id="celsium" value={ currentTemperature }
                onChange={
                    (event) => {
                        setCurrentTemperature(event.target.value)
                    }
                }
            />
            <label htmlFor="celsium">celsium</label>

        </div>
    )
}