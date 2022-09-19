


let apiKey = "79ee03a958e204e023122acbd595e9dc";
let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;


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
let forecast = response.


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
