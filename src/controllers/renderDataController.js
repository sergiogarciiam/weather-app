import { $, $$ } from "../utils/selectorUtil";
import { getData } from "./apiController";

export const renderDataController = (() => {
  let data = null;
  let metric = "c";

  async function fillDataFromNew(location) {
    data = await getData(location);
    fillData();
  }

  function changeMetric() {
    metric = metric === "c" ? "f" : "c";
    fillData();
  }

  function fillData() {
    const cityName = $(".city-name");
    const actualDate = $(".actual-date");

    const conditionImage = $(".condition-image");
    const actualTemperature = $(".actual-temperature");
    const condition = $(".condition");
    const minMaxTemperature = $(".min-max-temperature");

    // header
    cityName.textContent = data.location;
    actualDate.textContent = data.time;

    // main
    conditionImage.src = data.icon;
    actualTemperature.textContent = metric === "c" ? data.tempC : data.tempF;
    condition.textContent = data.condition;
    minMaxTemperature.textContent =
      metric === "c" ? data.minMaxTempC : data.minMaxTempF;

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
      minTemperature.textContent =
        metric === "c" ? forecast[cont].minTempC : forecast[cont].minTempF;
      maxTemperature.textContent =
        metric === "c" ? forecast[cont].maxTempC : forecast[cont].maxTempF;

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
      minTemperature.textContent =
        metric === "c" ? forecast[cont].tempC : forecast[cont].tempF;

      cont += 1;
    });
  }

  return { fillDataFromNew, changeMetric, setDaysData, setHoursData };
})();
