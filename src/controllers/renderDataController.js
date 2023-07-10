import { $, $$ } from "../utils/selectorUtil";
import { getData } from "./apiController";

export const renderDataController = (() => {
  let data = null;

  async function fillData(location) {
    data = await getData(location);

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
    actualTemperature.textContent = data.current.temp_c + "ºC";
    condition.textContent = data.current.condition.text;
    minMaxTemperature.textContent =
      data.forecast.forecastday[0].day.mintemp_c + "ºC";
    minMaxTemperature.textContent +=
      " / " + data.forecast.forecastday[0].day.maxtemp_c + "ºC";

    // forecast
    setDaysData();
  }

  function setDaysData() {
    const daysContainers = $$(".day-container");
    const forecast = data.forecast.forecastday;
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

  function setHoursData() {
    const daysContainers = $$(".hour-container");
    const forecast = data.forecast.forecastday[0].hour;
    let cont = 0;

    daysContainers.forEach((dayContainer) => {
      const hour = dayContainer.querySelector(".forecast-hour");
      const minTemperature = dayContainer.querySelector(".forecast-min");
      const maxTemperature = dayContainer.querySelector(".forecast-max");

      hour.textContent = forecast[cont].time;
      minTemperature.textContent = forecast[cont].temp_c + "ºC";

      cont += 1;
    });
  }

  return { fillData, setDaysData, setHoursData };
})();
