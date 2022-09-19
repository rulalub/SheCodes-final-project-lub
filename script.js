


let apiKey = "79ee03a958e204e023122acbd595e9dc";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;


function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let currentDay = days[currentTime.getDay()];
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${currentDay} ${hour}:${minutes}`;
}


let currentDate = document.querySelector("date");
let currentTime = new Date();
currentDate.innerHTML = formatDate(currentTime);

function formatDay(time)  {

    let date= new Date (time );
    let days = ["Tue", "Wed", "Thu", "Fri","Sat", "Sun","Mon"];

    let day = dat.getDay();

    return days [day];
}


function displayForecast(response) {
let forecast = response.data.daily;


}

let forecastHTML = `<div class="row">`;
  forecast.forEach(function (forecastDay, index) {
    if (index < 6) {
      forecastHTML =
        forecastHTML +



<div class="col-sm-2">
              <div class="forecast-day">${formatDay(forecastDay.dt)}</div>
              <div class="forecast-icon">
                <img
                  src="images/${forecastDay.weather[0].icon}.svg"
                  alt="partly-cloudy-day"
                  width="40"
                />
              </div>
              <div class="forecast-temperature">
                <span class="forecast-tempearture-max"> ${Math.round(
                  forecastDay.temp.max
                )}° </span>
                <span class="forecast-tempearture-min"> ${Math.round(
                  forecastDay.temp.min
                )}° </span>
              </div>
            </div>`;
    }
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}

function getForecast(coordinates) {
  console.log(coordinates);
  let apiKey = "79ee03a958e204e023122acbd595e9dc";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}



function showWeatherData(response) {
  let temperatureElement = document.querySelector("#currentTemp");
  let cityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#sky-weather");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let iconElement = document.querySelector("#icon");


celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].main;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `./images/${response.data.weather[0].icon}.svg`
  );
  iconElement.setAttribute("alt", response.data.weather[0].main);

  getForecast(response.data.coord);
}