import api from "../services/apiService";

class Locations {
  constructor(api) {
    this.api = api;
    this.countries = null;
    this.cities = null;
  }
  async init() {
    const response = await Promise.all([api.countries(), api.cities()]);

    const [countries, cities] = response;

    this.countries = this.serializeCountries(countries);
    this.cities = cities;
    return response;
  }

  serializeCountries(countries) {
    // { 'Country code': {...} }
    return countries.reduce((acc, country) => {
      acc[country.code] = country;
      return acc;
    }, {});
  }

  getCitiesByCountryCode(code) {
    return this.cities.filter((city) => city.country_code === code);
  }
}

const locations = new Locations(api);

export default locations;
