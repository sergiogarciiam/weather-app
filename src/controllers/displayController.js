import { createForecastContainer } from "../components/forecastContainer";
import { createHeaderContainer } from "../components/headerContainer";
import { createMainContainer } from "../components/mainContainer";
import { createLinks } from "../components/links";

export const createPageContainer = () => {
  const pageContainer = document.createElement("div");
  pageContainer.classList.add("page-container");

  pageContainer.appendChild(createHeaderContainer());
  pageContainer.appendChild(createMainContainer());
  pageContainer.appendChild(createForecastContainer());
  pageContainer.appendChild(createLinks());

  document.body.appendChild(pageContainer);
};
