const pullWeatherData = (cityName) => {
    let weatherArray = [];
    let weatherPull = fetch(`http://api.weatherapi.com/v1/forecast.json?key=c39557da4c1a406caab153204231707&q=${cityName}&days=6`, {
        mode: 'cors'
    })
    .then(function(result) {
        return result.json();
    })
    .then(function(result) {
        // console.log(result);

        let currentDayObject = {
            condition: result.current.condition["text"],
            con_icon: result.current.condition["icon"],
            lastUpdated: result.current.last_updated,
            temp_f: result.current.temp_f,
            temp_c: result.current.temp_c,
            humid: result.current.humidity,
            precipitation: result.current.precip_in
        }
        weatherArray.push(currentDayObject);
        for (let i = 0; i < result.forecast.forecastday.length; i++) {
            let dayObject = {
                condition: result.forecast.forecastday[i].day.condition["text"]
            }
            weatherArray.push(dayObject);    
        }
    })
    return weatherArray;
}

export default pullWeatherData;