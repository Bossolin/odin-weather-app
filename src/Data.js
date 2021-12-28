const Data = (() => {
  let dataObj = {};

  const processData = (data) => {
    dataObj = {
      clouds: data.clouds,
      main: data.main,
      name: data.name,
      rain: data.rain,
      snow: data.snow,
      weather: data.weather[0],
      wind: data.wind,
    };
  };

  const displayWeather = (data) => {
    const dataDiv = document.querySelector(".data");
    dataDiv.classList.add("active");
    dataDiv.innerHTML = "";

    const cityName = document.createElement("div");
    cityName.classList.add("city-name");
    cityName.innerText = data.name;

    const weather = (() => {
      const weatherDiv = document.createElement("div");
      weatherDiv.classList.add("weather");

      const weatherImg = document.createElement("img");
      weatherImg.classList.add("weather-img");
      weatherImg.src = `http://openweathermap.org/img/wn/${data.weather.icon}@2x.png`;

      const weatherDesc = document.createElement("p");
      weatherDesc.classList.add("weather-desc");
      weatherDesc.innerText = data.weather.description;

      weatherDiv.appendChild(weatherImg);
      weatherDiv.appendChild(weatherDesc);

      return weatherDiv;
    })();

    const temp = document.createElement("p");
    temp.classList.add("temp");
    temp.innerText = `${Math.round(data.main.temp)}°C`;

    const feels = document.createElement("p");
    feels.classList.add("feels");
    feels.innerText = `Feels like ${Math.round(data.main.feels_like)}°C`;

    const humidity = document.createElement("p");
    humidity.classList.add("humidity");
    humidity.innerText = `Humidity: ${data.main.humidity}%`;

    dataDiv.appendChild(cityName);
    dataDiv.appendChild(weather);
    dataDiv.appendChild(temp);
    dataDiv.appendChild(feels);
    dataDiv.appendChild(humidity);
  };

  const getWeatherData = async (location) => {
    try {
      const request = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7e290a13a31e4917e8dde47f392e9439`
      );
      const data = await request.json();
      processData(data);
      console.log(dataObj);
      displayWeather(dataObj);
    } catch (err) {
      const dataDiv = document.querySelector(".data");
      dataDiv.classList.add("active");
      dataDiv.innerHTML = "";

      const error = document.createElement("div");
      error.innerText = "No such city found:(";
      error.classList.add("error");

      dataDiv.appendChild(error);
      console.log("ERROR =>", err);
    }
  };

  return { getWeatherData };
})();

export default Data;
