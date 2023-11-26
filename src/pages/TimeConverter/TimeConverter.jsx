import { useState } from "react";

import { timeLines } from "../../constants/timeLines";

import { getValidateTime } from "../../utility/getValidateTime";

import "./style.sass"

export const TimeConverter = () => {

    const [currentTime, setCurrentTime] = useState(
        {
            minutes: new Date().getMinutes(),
            hours: new Date().getHours()
        }
    )

    return (
        <div className="time-converter">
            {
                timeLines?.map(
                    (timeLine) => {
                        let currentTimeLine = {
                            hours: currentTime?.hours + timeLine?.value?.hours,
                            minutes: currentTime?.minutes + timeLine?.value?.minutes,
                        }

                        return (
                            <div className="time-line">
                                <input type="time" id={timeLine?.name}
                                    value={getValidateTime(currentTimeLine)}
                                    onChange={
                                        (event) => {
                                            console.log(event.target.value)
                                            setCurrentTime(
                                                {
                                                    hours: +event?.target?.value?.substring(0, 2) - timeLine?.value?.hours,
                                                    minutes: +event?.target?.value?.substring(3) - timeLine?.value?.minutes
                                                }
                                            )
                                        }
                                    }
                                />
                                <label htmlFor={timeLine?.name}>{timeLine?.name}</label>
                            </div>
                        )
                    }
                )
            }
        </div>
    )

}

