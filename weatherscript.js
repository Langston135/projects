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
    const bool = data[0].IsDayTime;
    // Set the correct weather data according to date
    if (forecast.includes("Mostly clear") && bool) {
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/fair-day.svg";
    }
    else if (forecast.includes("Mostly clear")) {
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/fair-night";
    }
    else if (forecast.includes("Mostly cloudy") && bool) {
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/cloudy-day-3.svg";
    }
    else if (forecast.includes("Mostly cloudy")){
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/partly-cloudy-night-3.svg"
    }
    else if (forecast.includes("Rain") && bool ){
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/rainy-1-day.svg";
    }
    else if (forecast.includes("Rain")) {
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/rainy-1-night.svg";
    }
    else if (forecast.includes("Snow")){
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/snowy-4.svg";
    }
     else if (forecast.includes("Mostly sunny") && bool){
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/fair-day.svg";
    }
    else if (forecast.includes("Mostly sunny")){
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/fair-night.svg";
    }
    else if (forecast.includes("sunny") || forecast.includes("Sunny")) {
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "images/clear-day.svg";
    }
    else if(forecast.includes("lightning")) {
       WeatherIcon.style.display = "block";
       WeatherIcon.src = "images/thunder-day.svg"; 
    }
    else {
        WeatherIcon.style.display = "block";
        WeatherIcon.src = "/images/clear-night.svg";
    }
    CityName.textContent = data[0].WeatherText;
    Weathertext.textContent = data[0].Temperature.Imperial.Value + " F" ;
    
}
