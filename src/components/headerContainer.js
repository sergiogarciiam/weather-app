import { renderDataController } from "../controllers/renderDataController";
import { $ } from "../utils/selectorUtil";

export const createHeaderContainer = () => {
  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header-container");

  headerContainer.appendChild(createSearch());
  headerContainer.appendChild(createTitle());
  headerContainer.appendChild(createToggle());

  return headerContainer;
};

function createSearch() {
  const searchContainer = document.createElement("div");
  const input = document.createElement("input");
  const icon = document.createElement("i");

  searchContainer.classList.add("search-container");
  input.classList.add("search");
  icon.className = "fa-solid fa-magnifying-glass";

  input.addEventListener("focus", () => {
    document.addEventListener("keydown", handleKeyDown);
  });

  input.addEventListener("blur", () => {
    document.removeEventListener("keydown", handleKeyDown);
  });

  searchContainer.appendChild(input);
  searchContainer.appendChild(icon);

  return searchContainer;
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
  button.textContent = "ºC";

  button.addEventListener("click", toggleActive);

  toggleContainer.appendChild(button);

  return toggleContainer;
}

function toggleActive(event) {
  event.target.classList.toggle("active");
  event.target.textContent = event.target.textContent === "ºC" ? "ºF" : "ºC";
  renderDataController.changeMetric();
}

function handleKeyDown(event) {
  const input = $(".search");
  if (event.keyCode === 13) {
    renderDataController
      .fillDataFromNew(input.value)
      .then(() => (input.value = ""))
      .catch(() => console.log("No city"));
  }
}
