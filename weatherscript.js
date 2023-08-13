const apikey = "g04hky5kvkGaEGRJSr3ogWmkgF9EnpmI";
let lockey = null; // Initialize lockey with a default value

function myfunction() {
    const cityInput = document.getElementById("cityInput").value;

    // Construct the initial API URL
    const locapiUrl = `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apikey}&q=${cityInput}`;

    // Fetch location key
    fetch(locapiUrl)
        .then(response => response.json())
        .then(data => {
            lockey = data[0].Key; // Set lockey after fetching data
            const weatherurl = `https://dataservice.accuweather.com/currentconditions/v1/${lockey}?apikey=${apikey}`;
            fetch(weatherurl)
                .then(response => response.json())
                .then(data1 => display1(data1))
                .catch(error => console.error("Error fetching weather data", error));
        })
        .catch(error => console.error('Error fetching data:', error));
}

function display1(data) {
    const CityName = document.getElementById("cityName");
    const WeatherIcon = document.getElementById("WeatherIcon");
    const Weathertext = document.getElementById("description");
    const temperature = document.getElementById("temperature");

    const forecast = data[0].WeatherText;

    if (forecast.includes("Clear")) {
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/clear-day.svg";
    }
    CityName.textContent = data[0].WeatherText;
    Weathertext.textContent = data[0].Temperature.Imperial.Value + " F";
    
}
