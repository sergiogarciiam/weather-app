export const createMainContainer = () => {
  const mainContainer = document.createElement("main");
  mainContainer.classList.add("main-container");

  mainContainer.appendChild(createMainStat());
  //mainContainer.appendChild(createSecondStat());

  return mainContainer;
};

function createMainStat() {
  const mainStatContainer = document.createElement("div");
  const image = document.createElement("img");
  const actualTemperature = document.createElement("h2");
  const condition = document.createElement("p");
  const minMaxTemperature = document.createElement("p");

  mainStatContainer.classList.add("main-stat-container");
  image.classList.add("condition-image");
  actualTemperature.classList.add("actual-temperature");
  condition.classList.add("condition");
  minMaxTemperature.classList.add("min-max-temperature");

  mainStatContainer.appendChild(image);
  mainStatContainer.appendChild(actualTemperature);
  mainStatContainer.appendChild(condition);
  mainStatContainer.appendChild(minMaxTemperature);

  return mainStatContainer;
}

function createSecondStat() {}
