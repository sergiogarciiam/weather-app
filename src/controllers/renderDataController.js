import { $, $$ } from "../utils/selectorUtil";
import { getData } from "./apiController";

export const renderDataController = (() => {
  let data = null;

  async function fillData(location, metric) {
    data = await getData(location, metric);

    const cityName = $(".city-name");
    const actualDate = $(".actual-date");

    const conditionImage = $(".condition-image");
    const actualTemperature = $(".actual-temperature");
    const condition = $(".condition");
    const minMaxTemperature = $(".min-max-temperature");

    console.log(data);

    // header
    cityName.textContent = data.location;
    actualDate.textContent = data.time;

    // main
    conditionImage.src = data.icon;
    actualTemperature.textContent = data.tempC;
    condition.textContent = data.condition;
    minMaxTemperature.textContent = data.minMaxTempC;

    // forecast
    setDaysData();
    setHoursData();
  }

  function setDaysData() {
    const daysContainers = $$(".day-container");
    const forecast = data.forecastDays;
    let cont = 0;

    daysContainers.forEach((dayContainer) => {
      const day = dayContainer.querySelector(".forecast-day");
      const minTemperature = dayContainer.querySelector(".forecast-min");
      const maxTemperature = dayContainer.querySelector(".forecast-max");

      day.textContent = forecast[cont].day;
      minTemperature.textContent = forecast[cont].minTempC;
      maxTemperature.textContent = forecast[cont].maxTempC;

      cont += 1;
    });
  }

  function setHoursData() {
    const hoursContainers = $$(".hour-container");
    const forecast = data.forecastHours;
    let cont = 0;

    hoursContainers.forEach((dayContainer) => {
      const hour = dayContainer.querySelector(".forecast-hour");
      const minTemperature = dayContainer.querySelector(".forecast-min");

      hour.textContent = forecast[cont].hour;
      minTemperature.textContent = forecast[cont].tempC;

      cont += 1;
    });
  }

  return { fillData, setDaysData, setHoursData };
})();
