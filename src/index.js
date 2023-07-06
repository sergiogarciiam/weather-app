import { createPageContainer } from "./controllers/displayController";
import { getData } from "./controllers/apiController";

import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";

createPageContainer();
getData();