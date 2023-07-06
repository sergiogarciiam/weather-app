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
  cityName.classList.add("city-name");
  actualDate.classList.add("actual-date");

  titleContainer.appendChild(cityName);
  titleContainer.appendChild(actualDate);

  return titleContainer;
}

function createToggle() {
  const toggleContainer = document.createElement("div");
  const button = document.createElement("button");

  toggleContainer.classList.add("toggle-container");
  button.classList.add("toggle-button");

  button.addEventListener("click", toggleActive);

  toggleContainer.appendChild(button);

  return toggleContainer;
}

function toggleActive(event) {
  event.target.classList.toggle("active");
}
