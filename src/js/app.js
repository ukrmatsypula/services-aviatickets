import locations from "./store/locations";

locations.init().then((response) => {
  console.log(response);
  console.log(locations);
});
