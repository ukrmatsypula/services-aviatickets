import "../css/style.css";
import "./plugins";
import locations from "./store/locations";
import formUI from "./views/form";

document.addEventListener("DOMContentLoaded", () => {
  initApp();

  // Events

  // Handlers
  async function initApp() {
    await locations.init();
    formUI.setAutocompleteData(locations.shortCitiesList);
  }
});
