import "./style.css";

let dataObj = {};

const processData = (data) => {
  dataObj = {
    weather: {
      icon: data.weather[0].main,
      description: data.weather[0].description,
    },
    wind: data.wind.speed,
    temperature: {
      temp: data.main.temp,
      feels: data.main.feels_like,
      humidity: data.main.humidity,
    },
  };
};

const getWeatherData = async (location) => {
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7e290a13a31e4917e8dde47f392e9439`
    );
    const data = await request.json();
    // dataObj = { ...data };
    processData(data);
    console.log(dataObj);
  } catch (err) {
    console.log("ERROR =>", err);
  }
};

getWeatherData("Tromso");
