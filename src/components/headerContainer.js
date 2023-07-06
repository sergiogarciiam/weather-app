export const createHeaderContainer = () => {
  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header-container");

  headerContainer.appendChild(createSearch());
  headerContainer.appendChild(createTitle());
  headerContainer.appendChild(createToggle());

  return headerContainer;
};

function createSearch() {
  const input = document.createElement("input");
  return input;
}

function createTitle() {
  const titleContainer = document.createElement("div");
  const cityName = document.createElement("h1");
  const actualDate = document.createElement("h3");

  titleContainer.classList.add("title-container");

  cityName.textContent = "Hello";
  actualDate.textContent = "20";

  titleContainer.appendChild(cityName);
  titleContainer.appendChild(actualDate);

  return titleContainer;
}

function createToggle() {
  const toggleContainer = document.createElement("div");
  const button = document.createElement("button");

  toggleContainer.classList.add("toggle-container");

  toggleContainer.appendChild(button);

  return toggleContainer;
}
