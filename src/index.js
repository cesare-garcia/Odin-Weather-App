import loadPage from './loadPage';
import pullWeatherData from './pullWeatherDate';
import './style.css';

loadPage();

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", (e) => {
    if ( searchInput.validity.valid) {
        e.preventDefault();
        let a = pullWeatherData(searchInput.value);
        console.log(a);
    }
});

const hourButtons = document.querySelectorAll(".hourButtons");
hourButtons.forEach((element) => element.addEventListener("click", (e) => {
    let hourRows = document.querySelectorAll(".hourRow");
    if (e.target.getAttribute("id") === "leftHour") {
        if (!hourRows[0].classList.contains("hide")) {
            hourRows[0].classList.add("hide");
            hourRows[2].classList.remove("hide");
        } else if (!hourRows[1].classList.contains("hide")) {
            hourRows[1].classList.add("hide");
            hourRows[0].classList.remove("hide");
        } else if (!hourRows[2].classList.contains("hide")) {
            hourRows[2].classList.add("hide");
            hourRows[1].classList.remove("hide");
        }
    } else {
        if (!hourRows[0].classList.contains("hide")) {
            hourRows[0].classList.add("hide");
            hourRows[1].classList.remove("hide");
        } else if (!hourRows[1].classList.contains("hide")) {
            hourRows[1].classList.add("hide");
            hourRows[2].classList.remove("hide");
        } else if (!hourRows[2].classList.contains("hide")) {
            hourRows[2].classList.add("hide");
            hourRows[0].classList.remove("hide");
        }
    }
}));

let dayBoxes = document.querySelectorAll(`[data-dayBox]`);
const dayButtons = document.querySelectorAll(".dayButtons");
dayButtons.forEach((element) => element.addEventListener("click", (e) => {
    if (e.target.getAttribute("id") === "leftDay") {
        if (!dayBoxes[0].classList.contains("hide")) {
            dayBoxes[0].classList.add("hide");
            dayBoxes[6].classList.remove("hide");
        } else {
            dayBoxes.forEach((element) => {
                let elementIndex = Number(element.getAttribute("data-dayBox"));
                let nextLeftIndex = elementIndex - 1;
                if (!element.classList.contains("hide")) {
                    dayBoxes[elementIndex].classList.add("hide");
                    dayBoxes[nextLeftIndex].classList.remove("hide");
                }
            })
        }
    } else if (e.target.getAttribute("id") === "rightDay") {
        if (!dayBoxes[6].classList.contains("hide")) {
            dayBoxes[0].classList.remove("hide");
            dayBoxes[6].classList.add("hide");
        } else {
            for (let i = dayBoxes.length - 1; i >= 0; i--) {
                console.log(dayBoxes[i]);
                if (!dayBoxes[i].classList.contains("hide")) {
                    dayBoxes[i].classList.add("hide");
                    dayBoxes[i+1].classList.remove("hide");
                }
            }
        }
    }    
}));