import ApiServices from "./ApiServices";

export default class CountryServices {

  header = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' };
  apiServices = new ApiServices(this.header);

  getCountries = () => {
    return this.apiServices.get(`${process.env.REACT_APP_BASE_URL}/all`);
  };

  getByCode = (code) => {
    return this.apiServices.get(`${process.env.REACT_APP_BASE_URL}/alpha/${code}`);
  }

}
