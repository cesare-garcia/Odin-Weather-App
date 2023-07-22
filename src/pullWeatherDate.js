import dayCardFactory from "./dayCardFactory";
import hourCardFactory from "./hourCardFactory";

const pullWeatherData = (cityName) => {
    
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=c39557da4c1a406caab153204231707&q=${cityName}&days=7`, {
        mode: 'cors'
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        // daily forecast
        let data = response.forecast.forecastday;
        for (let i = 0; i < 7; i++) {
            if ( i === 0) {
                dayCardFactory(0, response.location.name, data[0].date, data[0].day.condition.text, data[0].day.condition.icon, data[0].day.mintemp_c, data[0].day.maxtemp_c, data[0].day.mintemp_f, data[0].day.maxtemp_f, data[0].day.totalprecip_in);
            } else {
                dayCardFactory(i, response.location.name, data[i].date, data[i].day.condition.text, data[i].day.condition.icon, data[i].day.mintemp_c, data[i].day.maxtemp_c, data[i].day.mintemp_f, data[i].day.maxtemp_f, data[i].day.totalprecip_in);
            }
        }

        // hourly forecast
        let hourRows = document.querySelectorAll(".hourRow");
        let hourData = response.forecast.forecastday[0].hour;
        for (let i = 0; i < 24; i++) {
            if (i < 8) {
                let hourBox = hourCardFactory(hourData[i].time, hourData[i].temp_f, hourData[i].temp_c, hourData[i].condition.icon);
                hourBox.setAttribute("data-hourBox", `${i}`);
                hourRows[0].appendChild(hourBox);
            } else if (i < 16) {
                let hourBox = hourCardFactory(hourData[i].time, hourData[i].temp_f, hourData[i].temp_c, hourData[i].condition.icon);
                hourBox.setAttribute("data-hourBox", `${i}`);
                hourRows[1].appendChild(hourBox);
            } else {
                let hourBox = hourCardFactory(hourData[i].time, hourData[i].temp_f, hourData[i].temp_c, hourData[i].condition.icon);
                hourBox.setAttribute("data-hourBox", `${i}`);
                hourRows[2].appendChild(hourBox);
            }
        }
    })
}

export default pullWeatherData;