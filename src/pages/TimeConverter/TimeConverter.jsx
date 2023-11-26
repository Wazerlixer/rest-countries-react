import { useState } from "react";
import "./style.sass"

export const TimeConverter = () => {
    const [currentTime, setCurrentTime] = useState(
        {
            minutes: 0,
            hours: 0
        }
    )

    return (
        <div className="time-converter">
            <input type="time" id="msk"
                value={
                    `${currentTime.hours + 1 >= 10 ? currentTime.hours + 1 : `0${currentTime.hours + 1}`}:${currentTime.minutes >= 10 ? currentTime.minutes : `0${currentTime.minutes}`}`
                }
                onChange={
                    (event) => {
                        console.log(event.target.value)
                        setCurrentTime(
                            {
                                hours: +event?.target?.value?.substring(0, 2) - 1,
                                minutes: +event?.target?.value?.substring(3)
                            }
                        )
                    }
                }
            />
            <label htmlFor="msk">msk</label>
            <input type="time" id="kyiv"
                value={
                    `${currentTime.hours >= 10 ? currentTime.hours : `0${currentTime.hours}`}:${currentTime.minutes >= 10 ? currentTime.minutes : `0${currentTime.minutes}`}`
                }
                onChange={
                    (event) => {
                        console.log(event.target.value)
                        setCurrentTime(
                            {
                                hours: +event?.target?.value?.substring(0, 2),
                                minutes: +event?.target?.value?.substring(3)
                            }
                        )
                    }
                }
            />
            <label htmlFor="kyiv">kyiv</label>
        </div>
    )

}

