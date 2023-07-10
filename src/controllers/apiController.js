export function getData(location) {
  console.log(location);

  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1a7eae88a41840b4910100427230607&q=${location}&days=14`
  )
    .then((response) => response.json())
    .catch(() => console.log("Error getting data"));
}
