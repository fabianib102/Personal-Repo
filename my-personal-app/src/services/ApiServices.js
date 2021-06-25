const axios = require('axios').default;

export default class ApiServices {

  client;

  constructor(baseUrl, headers) {
    this.client = axios.create({baseUrl, headers});
  }

  get = (endpoint)=>{
    return this.client.get(endpoint);
  }
}
