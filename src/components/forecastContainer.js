let TYPE = "Daily";

export const createForecastContainer = () => {
  const forecastContainer = document.createElement("main");
  forecastContainer.classList.add("forecast-container");

  forecastContainer.appendChild(createSelect());
  //forecastContainer.appendChild(createDaily());

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
  // do stuff
}

function createDaily() {}

function createHourly() {}
