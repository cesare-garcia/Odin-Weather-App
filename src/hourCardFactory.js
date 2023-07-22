const hourCardFactory = (hour, hourF, hourC, hourCIcon) => {
    let hourBox = document.createElement("div");
    let hourAdjust = hour.split(" ");
    let timeDiv = document.createElement("div");
    timeDiv.innerText = hourAdjust[1];
    let fDiv = document.createElement("div");
    fDiv.innerText = `${hourF}°F`;
    let cDiv = document.createElement("div");
    cDiv.innerText = `${hourC}°C`;
    cDiv.classList.add("hideHours");
    let icon = new Image(70, 70);
    icon.src = hourCIcon;

    hourBox.appendChild(timeDiv);
    hourBox.appendChild(fDiv);
    hourBox.appendChild(cDiv);
    hourBox.appendChild(icon);

    return hourBox;
};

export default hourCardFactory;