import "../css/style.css";
import "./plugins";
import locations from "./store/locations";

locations.init().then((response) => {
  console.log(response);
  console.log(locations);
  console.log(locations.getCitiesByCountryCode("UA"));
});
