import ApiServices from "./ApiServices";

export default class CountryServices {

  header = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
  apiServices = new ApiServices('https://restcountries.eu/rest/v2/all', this.header);

  getCountries = () => {
    return this.apiServices.get('https://restcountries.eu/rest/v2/all');
  };

  getByCode = (code) => {
    return this.apiServices.get(`https://restcountries.eu/rest/v2/alpha/${code}`);
  }

}
