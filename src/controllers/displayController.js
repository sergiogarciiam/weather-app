import { createHeaderContainer } from "../components/headerContainer";
import { createMainContainer } from "../components/mainContainer";

export const createPageContainer = () => {
  const pageContainer = document.createElement("header");
  pageContainer.classList.add("page-container");

  pageContainer.appendChild(createHeaderContainer());
  pageContainer.appendChild(createMainContainer());

  document.body.appendChild(pageContainer);
};
