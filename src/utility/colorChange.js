import { colours } from '../constants/colours';

export const colorChange = (currentTime) => {
    let TimeConverterElement = document.querySelector(".time-converter");

    if (TimeConverterElement) {
        if (currentTime >= 0 && currentTime <= 23) {
            if (currentTime == 0) currentTime = 24;
            TimeConverterElement.style.backgroundColor = colours[currentTime - 1]?.color;
        }
        if (currentTime >= 5 && currentTime <= 17) {
            TimeConverterElement.style.color = "black";
        }
        else{
            TimeConverterElement.style.color = "white";
        }
    }
}