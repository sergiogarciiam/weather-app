import { createPageContainer } from "./controllers/displayController";
import { renderDataController } from "./controllers/renderDataController";

import "./assets/styles/header.css";
import "./assets/styles/main.css";
import "./assets/styles/forecast.css";
import "./assets/styles/app.css";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

createPageContainer();
renderDataController.fillData("Madrid");
