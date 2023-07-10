import { $, $$ } from "../utils/selectorUtil";

export async function fillData(location) {
  const data = await getData(location);

  const cityName = $(".city-name");
  const actualDate = $(".actual-date");

  const conditionImage = $(".condition-image");
  const actualTemperature = $(".actual-temperature");
  const condition = $(".condition");
  const minMaxTemperature = $(".min-max-temperature");

  console.log(data);

  // header
  cityName.textContent = data.location.name;
  actualDate.textContent = data.location.localtime;

  // main
  conditionImage.src = data.current.condition.icon;
  actualTemperature.textContent = data.current.temp_c;
  condition.textContent = data.current.condition.text;
  minMaxTemperature.textContent =
    data.forecast.forecastday[0].day.mintemp_c + "ºC";
  minMaxTemperature.textContent +=
    " / " + data.forecast.forecastday[0].day.maxtemp_c + "ºC";

  // forecast
  setDaysData(data.forecast.forecastday);
}

function getData(location) {
  console.log(location);

  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1a7eae88a41840b4910100427230607&q=${location}&days=14`
  )
    .then((response) => response.json())
    .catch(() => console.log("Error getting data"));
}

function setDaysData(forecast) {
  const daysContainers = $$(".day-container");
  let cont = 0;

  daysContainers.forEach((dayContainer) => {
    const day = dayContainer.querySelector(".forecast-day");
    const minTemperature = dayContainer.querySelector(".forecast-min");
    const maxTemperature = dayContainer.querySelector(".forecast-max");

    day.textContent = forecast[cont].date;
    minTemperature.textContent = forecast[cont].day.mintemp_c + "ºC";
    maxTemperature.textContent = forecast[cont].day.maxtemp_c + "ºC";

    cont += 1;
  });
}
