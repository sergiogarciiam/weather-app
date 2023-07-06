export function getData() {
  //location and temp type
  fetch(
    "https://api.weatherapi.com/v1/current.json?key=1a7eae88a41840b4910100427230607&q=London"
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
