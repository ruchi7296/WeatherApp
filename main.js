const weatherApi = {
  key: "49c8cb3085d452883f6d6eeed30cd70f",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

var input = document.querySelector('.input_text');

input.addEventListener('keypress', (event) => {
  if (event.keyCode == 13) {
    console.log(input.value);
    getWeatherReport(input.value);
    document.querySelector('.weather-body').style.display = "block";
  }
});

function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then(response => response.json())
    .then(showWeather);
}

function showWeather(weather) {
  console.log(weather);

  let city = document.getElementById('city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.getElementById('temp');
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let weatherType = document.getElementById('weather');
  weatherType.innerText = `${weather.weather[0].main}`;

  let date = document.getElementById('date');
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);


  if (weatherType.textContent == "Clear") {
    document.body.style.backgroundImage = "url(/WeatherApp/sunny.jpg)";
    weathercon.innerHTML =
      "<i class='fas  fa-sun' style='color: #eccc68;'></i>";

  } else if (weatherType == "Clouds") {
    document.body.style.backgroundImage = "url('/WeatherApp/cloud.jpg')";
    weathercon.innerHTML =
      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";

  } else if (weatherType == "Rain") {
    document.body.style.backgroundImage = "url(/WeatherApp/rain.jpg)";
    weathercon.innerHTML =
    "<i class='fas fa-cloud-showers-heavy' style='color: #f1f2f6;'></i>"
      
  } else {
    document.body.style.backgroundImage = "url('/WeatherApp/cloud.jpg')";
    weathercon.innerHTML =
      "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";

  }
}

function dateManage(dateArg) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let date = dateArg.getDate();
  let day = days[dateArg.getDay()];

  return `${date} ${month} ${day} ${year}`;

}

// .catch(err => alert("Wrong city name!"));

