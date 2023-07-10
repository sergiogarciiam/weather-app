export const createMainContainer = () => {
  const mainContainer = document.createElement("div");
  const actualTemperature = document.createElement("h2");
  const conditionContainer = document.createElement("p");
  const condition = document.createElement("p");
  const image = document.createElement("img");
  const minMaxTemperature = document.createElement("p");

  mainContainer.classList.add("main-container");
  actualTemperature.classList.add("actual-temperature");
  conditionContainer.classList.add("condition-container");
  condition.classList.add("condition");
  image.classList.add("condition-image");
  minMaxTemperature.classList.add("min-max-temperature");

  conditionContainer.appendChild(condition);
  conditionContainer.appendChild(image);

  mainContainer.appendChild(actualTemperature);
  mainContainer.appendChild(conditionContainer);
  mainContainer.appendChild(minMaxTemperature);

  return mainContainer;
};
