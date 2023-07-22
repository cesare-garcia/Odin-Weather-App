import loadPage from './loadPage';
import pullWeatherData from './pullWeatherDate';
import showWeatherData from './showWeatherData';
import './style.css';

loadPage();
pullWeatherData("austin");

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", (e) => {
    if ( searchInput.validity.valid) {
        e.preventDefault();
        let display = document.querySelector(".display");
        let hourRows = document.querySelectorAll(".hourRow");
        display.innerHTML = "";
        hourRows.forEach((element) => {
            element.innerHTML = "";
        })
        let a = pullWeatherData(searchInput.value);
    }
});

const toggleButton = document.querySelector(".toggleT");
toggleButton.addEventListener("click", (e) => {
    


    // if (toggledTemp.classList.contains("hide")) {
    //     console.log("yes");
    //     console.log(toggledTemp);
    // } else if (!toggledTemp.classList.contains("hide")) {
    //     console.log("no");
    // }
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

const dayButtons = document.querySelectorAll(".dayButtons");
dayButtons.forEach((element) => element.addEventListener("click", (e) => {
    let dayBoxes = document.querySelectorAll(`[data-dayBox]`);
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
                if (!dayBoxes[i].classList.contains("hide")) {
                    dayBoxes[i].classList.add("hide");
                    dayBoxes[i+1].classList.remove("hide");
                }
            }
        }
    }    
}));