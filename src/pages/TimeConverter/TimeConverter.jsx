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

                        let currentMinutes = currentTime?.minutes + timeLine?.value?.minutes;
                        let extraHour = currentMinutes >= 60 ? 1 : 0;
                        let currentHoures = currentTime?.hours + timeLine?.value?.hours + extraHour;

                        let currentTimeLine = {
                            minutes: currentMinutes >= 60 ? currentMinutes % 60 : currentMinutes,
                            hours: currentHoures >= 24 ? currentHoures % 24 : currentHoures
                        }

                        return (
                            <div className="time-line" key={timeLine?.name}>
                                <input type="time" id={timeLine?.name}
                                    value={getValidateTime(currentTimeLine)}
                                    onChange={
                                        (event) => {
                                            console.log(event.target.value)
                                            let currentChangeValue = {
                                                hours: event.target.value.substring(0, 2),
                                                minutes: event.target.value.substring(3)
                                            }

                                            let currentMinutes = currentChangeValue?.minutes - timeLine?.value?.minutes;
                                            let extraHour = currentMinutes < 0 ? -1 : 0;
                                            let currentHoures = currentChangeValue?.hours - timeLine?.value?.hours + extraHour;

                                            setCurrentTime(
                                                {
                                                    minutes: currentMinutes < 0 ? 60 + currentMinutes : currentMinutes,
                                                    hours: currentHoures < 0 ? 24 + currentHoures : currentHoures
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

