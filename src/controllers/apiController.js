import { $ } from "../utils/selectorUtil";

export async function fillData(location) {
  const data = await getData(location);

  const cityName = $(".city-name");
  const actualDate = $(".actual-date");

  const conditionImage = $(".condition-image");
  const actualTemperature = $(".actual-temperature");
  const condition = $(".condition");
  const minMaxTemperature = $(".min-max-temperature");

  console.log(data);

  cityName.textContent = data.location.name;
  actualDate.textContent = data.location.localtime;

  conditionImage.src = data.current.condition.icon;
  actualTemperature.textContent = data.current.temp_c;
  condition.textContent = data.current.condition.text;
  minMaxTemperature.textContent = data.forecast.forecastday[0].day.mintemp_c;
}

function getData(location) {
  console.log(location);

  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1a7eae88a41840b4910100427230607&q=${location}$days=15`
  )
    .then((response) => response.json())
    .catch(() => console.log("Error getting data"));
}
