export const getValidateTime = (currentTime) => {

    if (currentTime) {
        let validateTime = {
            hours: "",
            minutes: ""
        };

        if (currentTime.hours >= 10) {
            validateTime.hours = currentTime?.hours;
        }
        else {
            validateTime.hours = `0${currentTime?.hours}`
        }

        if (currentTime.minutes >= 10) {
            validateTime.minutes = currentTime?.minutes;
        }
        else {
            validateTime.minutes = `0${currentTime?.minutes}`
        }

        return `${validateTime?.hours}:${validateTime?.minutes}`
    }
    else return ""
}