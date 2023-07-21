import LeftIcon from "/img/icons8-arrow-64.png";
import RightIcon from "/img/icons8-arrow-64 (1).png";

const loadPage = () => {
    const content = document.querySelector("#content");
    const leftDiv = document.createElement("div");
    leftDiv.classList.add("left");
    const leftImageDiv = document.createElement("div");
    leftImageDiv.classList.add("leftImage");
    const leftHourlyDiv = document.createElement("div");
    leftHourlyDiv.classList.add("leftHourly");
    const arrowNav = document.createElement("div");
    arrowNav.classList.add("arrowNav");
    const leftArrow = new Image(32, 32);
    leftArrow.src = LeftIcon;
    const rightArrow = new Image(32, 32);
    rightArrow.src = RightIcon;
    const hourRow1 = document.createElement("div");
    hourRow1.classList.add("hourRow");
    const hourRow2 = document.createElement("div");
    hourRow2.classList.add("hourRow");
    hourRow2.classList.add("hide");
    const hourRow3 = document.createElement("div");
    hourRow3.classList.add("hourRow");
    hourRow3.classList.add("hide");
    const rightDiv = document.createElement("div");
    rightDiv.classList.add("right");
    const weatherForm = document.createElement("form");
    const searchLabel = document.createElement("label");
    searchLabel.setAttribute("for", "searchInput");
    searchLabel.innerText = "City: ";
    const searchInput = document.createElement("input");
    searchInput.setAttribute("id", "searchInput");
    searchInput.setAttribute("name", "searchInput");
    searchInput.required = true;
    const searchButton = document.createElement("button");
    searchButton.innerText = "Search";
    searchButton.classList.add("searchButton");
    const displayDiv = document.createElement("div");
    const weatherCard = document.createElement("div");
    const weatherNav = document.createElement("div");
    
    content.appendChild(leftDiv);
    content.appendChild(rightDiv);
    leftDiv.appendChild(leftImageDiv);
    leftDiv.appendChild(leftHourlyDiv);
    leftHourlyDiv.appendChild(arrowNav);
    arrowNav.appendChild(leftArrow);
    arrowNav.appendChild(rightArrow);
    leftHourlyDiv.appendChild(hourRow1);
    leftHourlyDiv.appendChild(hourRow2);
    leftHourlyDiv.appendChild(hourRow3);
    rightDiv.appendChild(weatherForm);
    weatherForm.appendChild(searchLabel);
    weatherForm.appendChild(searchInput);
    weatherForm.appendChild(searchButton);
    rightDiv.appendChild(displayDiv);
    displayDiv.appendChild(weatherCard);
    displayDiv.appendChild(weatherNav);

    for (let i =0; i < 24; i++) {
        let hourBox = document.createElement("div");
        hourBox.setAttribute("data-hourBox", `${i}`);
        if (i < 8) {
            hourBox.innerText = "test1";
            hourRow1.appendChild(hourBox);
        } else if (i < 16) {
            hourBox.innerText = "test2";
            hourRow2.appendChild(hourBox);
        } else {
            hourBox.innerText = "test3";
            hourRow3.appendChild(hourBox);
        }
    }
};

export default loadPage;