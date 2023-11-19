import { useState } from "react";

export const TimeConverter = () => {
    const [currentTime, setCurrentTime] = useState(0)
    return (
        <div className="time-converter">
            <input type="number" id="msk" value={(currentTime + 2).toFixed(1)}
                onChange={
                    (event) => {
                        setCurrentTime(event.target.value - 2)
                    }
                }
            />
            <label htmlFor="msk">msk</label>
            <input type="number" id="kyiv" value={setCurrentTime}
                onChange={

                    (event) => {
                        setCurrentTime(event.target.value)
                    }
                }
            />
            <label htmlFor="kyiv">kyiv</label>



        </div>
    )

}

