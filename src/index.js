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

