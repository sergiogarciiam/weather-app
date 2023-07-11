export function getData(location) {
  console.log(location);

  return fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=1a7eae88a41840b4910100427230607&q=${location}&days=14`
  )
    .then((response) => response.json())
    .then((data) => processData(data))
    .catch(() => console.log("Error getting data"));
}

function processData(data) {
  return {
    location: `${data.location.name}, ${data.location.country}`,
    time: data.location.localtime,

    tempC: `${data.current.temp_c} ºC`,
    minMaxTempC: `${data.forecast.forecastday[0].day.mintemp_c} ºC / ${data.forecast.forecastday[0].day.maxtemp_c} ºC`,

    tempF: `${data.current.temp_f} ºF`,
    minMaxTempF: `${data.forecast.forecastday[0].day.mintemp_f} ºF / ${data.forecast.forecastday[0].day.maxtemp_f} ºF`,

    condition: data.current.condition.text,
    icon: data.current.condition.icon,

    forecastDays: [
      {
        day: getDateToWeek(data.forecast.forecastday[0].date),
        minTempC: `${data.forecast.forecastday[0].day.mintemp_c} ºC`,
        maxTempC: `${data.forecast.forecastday[0].day.maxtemp_c} ºC`,
        minTempF: `${data.forecast.forecastday[0].day.mintemp_f} ºF`,
        maxTempF: `${data.forecast.forecastday[0].day.maxtemp_f} ºF`,
      },
      {
        day: getDateToWeek(data.forecast.forecastday[1].date),
        minTempC: `${data.forecast.forecastday[1].day.mintemp_c} ºC`,
        maxTempC: `${data.forecast.forecastday[1].day.maxtemp_c} ºC`,
        minTempF: `${data.forecast.forecastday[1].day.mintemp_f} ºF`,
        maxTempF: `${data.forecast.forecastday[1].day.maxtemp_f} ºF`,
      },
      {
        day: getDateToWeek(data.forecast.forecastday[2].date),
        minTempC: `${data.forecast.forecastday[2].day.mintemp_c} ºC`,
        maxTempC: `${data.forecast.forecastday[2].day.maxtemp_c} ºC`,
        minTempF: `${data.forecast.forecastday[2].day.mintemp_f} ºF`,
        maxTempF: `${data.forecast.forecastday[2].day.maxtemp_f} ºF`,
      },
      {
        day: getDateToWeek(data.forecast.forecastday[3].date),
        minTempC: `${data.forecast.forecastday[3].day.mintemp_c} ºC`,
        maxTempC: `${data.forecast.forecastday[3].day.maxtemp_c} ºC`,
        minTempF: `${data.forecast.forecastday[3].day.mintemp_f} ºF`,
        maxTempF: `${data.forecast.forecastday[3].day.maxtemp_f} ºF`,
      },
      {
        day: getDateToWeek(data.forecast.forecastday[4].date),
        minTempC: `${data.forecast.forecastday[4].day.mintemp_c} ºC`,
        maxTempC: `${data.forecast.forecastday[4].day.maxtemp_c} ºC`,
        minTempF: `${data.forecast.forecastday[4].day.mintemp_f} ºF`,
        maxTempF: `${data.forecast.forecastday[4].day.maxtemp_f} ºF`,
      },
      {
        day: getDateToWeek(data.forecast.forecastday[5].date),
        minTempC: `${data.forecast.forecastday[5].day.mintemp_c} ºC`,
        maxTempC: `${data.forecast.forecastday[5].day.maxtemp_c} ºC`,
        minTempF: `${data.forecast.forecastday[5].day.mintemp_f} ºF`,
        maxTempF: `${data.forecast.forecastday[5].day.maxtemp_f} ºF`,
      },
      {
        day: getDateToWeek(data.forecast.forecastday[6].date),
        minTempC: `${data.forecast.forecastday[6].day.mintemp_c} ºC`,
        maxTempC: `${data.forecast.forecastday[6].day.maxtemp_c} ºC`,
        minTempF: `${data.forecast.forecastday[6].day.mintemp_f} ºF`,
        maxTempF: `${data.forecast.forecastday[6].day.maxtemp_f} ºF`,
      },
    ],

    forecastHours: [
      {
        hour: data.forecast.forecastday[0].hour[0].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[0].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[0].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[1].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[1].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[1].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[2].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[2].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[2].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[3].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[3].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[3].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[4].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[4].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[4].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[5].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[5].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[5].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[6].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[6].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[6].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[7].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[7].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[7].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[8].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[8].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[8].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[9].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[9].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[9].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[10].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[10].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[10].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[11].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[11].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[11].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[12].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[12].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[12].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[13].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[13].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[13].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[14].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[14].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[14].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[15].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[15].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[15].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[16].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[16].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[16].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[17].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[17].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[17].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[18].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[18].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[18].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[19].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[19].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[19].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[20].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[20].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[20].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[21].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[21].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[21].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[22].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[22].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[22].temp_f} ºF`,
      },
      {
        hour: data.forecast.forecastday[0].hour[23].time.slice(-5),
        tempC: `${data.forecast.forecastday[0].hour[23].temp_c} ºC`,
        tempF: `${data.forecast.forecastday[0].hour[23].temp_f} ºF`,
      },
    ],
  };
}

function getDateToWeek(stringDate) {
  const date = new Date(stringDate);
  const dayOfWeek = date.getDay();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return daysOfWeek[dayOfWeek];
}
