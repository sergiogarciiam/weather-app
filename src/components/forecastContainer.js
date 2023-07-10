import { renderDataController } from "../controllers/renderDataController";
import { $ } from "../utils/selectorUtil";

let TYPE = "Daily";

export const createForecastContainer = () => {
  const forecastContainer = document.createElement("div");
  forecastContainer.classList.add("forecast-container");

  forecastContainer.appendChild(createSelect());
  forecastContainer.appendChild(createDaily());

  return forecastContainer;
};

function createSelect() {
  const select = document.createElement("select");
  const dailyOption = document.createElement("option");
  const hourlyOption = document.createElement("option");

  dailyOption.textContent = "Daily";
  hourlyOption.textContent = "Hourly";

  select.addEventListener("click", setSelection);

  select.add(dailyOption);
  select.add(hourlyOption);

  return select;
}

function setSelection(event) {
  if (event.target.value === TYPE) return;

  TYPE = TYPE === "Daily" ? "Hourly" : "Daily";

  const forecast = $(".forecast-container");
  const container = $(".daily-hourly-container");

  container.remove();

  if (TYPE === "Daily") {
    forecast.appendChild(createDaily());
    renderDataController.setDaysData();
  } else {
    forecast.appendChild(createHourly());
    renderDataController.setHoursData();
  }
}

function createDaily() {
  const container = document.createElement("div");
  container.classList.add("daily-hourly-container");

  for (let index = 0; index < 14; index++) {
    container.appendChild(createSpecificForecast("day"));
  }

  return container;
}

function createHourly() {
  const container = document.createElement("div");
  container.classList.add("daily-hourly-container");

  for (let index = 0; index < 14; index++) {
    container.appendChild(createSpecificForecast("hour"));
  }

  return container;
}

function createSpecificForecast(type) {
  const dayContainer = document.createElement("div");
  const day = document.createElement("p");
  const minTemperature = document.createElement("p");
  const maxTemperature = document.createElement("p");

  dayContainer.classList.add(`${type}-container`);
  day.classList.add(`forecast-${type}`);
  minTemperature.classList.add("forecast-min");
  maxTemperature.classList.add("forecast-max");

  dayContainer.appendChild(day);
  dayContainer.appendChild(minTemperature);
  dayContainer.appendChild(maxTemperature);

  return dayContainer;
}
