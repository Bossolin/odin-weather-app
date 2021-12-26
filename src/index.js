import "./style.css";

let dataObj = {};

const getWeatherData = async (location) => {
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=7e290a13a31e4917e8dde47f392e9439`
    );
    const data = await request.json();
    dataObj = { ...data };
    console.log(dataObj);
  } catch (err) {
    console.log("ERROR =>", err);
  }
};

getWeatherData("Tromso");
