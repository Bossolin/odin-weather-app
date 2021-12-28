import Data from "./Data";
import "./style.css";

(() => {
  const header = (() => {
    const headerDiv = document.createElement("div");
    headerDiv.classList.add("header");
    headerDiv.innerText = "Weather App";
    return headerDiv;
  })();

  const submitCity = (e) => {
    e.preventDefault();
    const city = e.path[1][0].value;
    Data.getWeatherData(city);
    e.path[1].reset();
  };

  const formTag = (() => {
    const form = document.createElement("form");

    const input = document.createElement("input");
    input.classList.add("input-city");

    const btn = document.createElement("button");
    btn.classList.add("submit-btn");
    btn.innerText = "»";
    btn.addEventListener("click", submitCity);

    form.appendChild(input);
    form.appendChild(btn);
    return form;
  })();

  const dataDiv = (() => {
    const data = document.createElement("div");
    data.classList.add("data");

    return data;
  })();

  document.body.appendChild(header);
  document.body.appendChild(formTag);
  document.body.appendChild(dataDiv);

  Data.getWeatherData("Tromso");
})();
