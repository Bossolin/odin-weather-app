import "./style.css";

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

const getWeatherData = async (location) => {
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7e290a13a31e4917e8dde47f392e9439`
    );
    const data = await request.json();
    processData(data);
    console.log(dataObj);
  } catch (err) {
    // Add error message when no city found
    console.log("ERROR =>", err);
  }
};

const submitCity = (e) => {
  e.preventDefault();
  const city = e.path[1][0].value;
  getWeatherData(city);
};

const formTag = (() => {
  const form = document.createElement("form");
  const input = document.createElement("input");
  const btn = document.createElement("button");
  btn.innerText = "»";
  btn.addEventListener("click", submitCity);
  form.appendChild(input, btn);
  return form;
})();

document.body.appendChild(formTag);
