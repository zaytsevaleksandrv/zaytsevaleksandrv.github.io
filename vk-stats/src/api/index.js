import axios from "axios";

import {
  API_AUTOCOMPLETE,
  API_CURRENT,
  API_INFO_IN_WIKI,
  API_MUSEUMS,
  API_PARKS,
  API_CAFE,
  API_CAR_RENTAL,
  API_LODGING
} from "../api/urls";

export default {
  place: {
    autocomplete: name => axios.get(`${API_AUTOCOMPLETE}/${name}`),
    current: id => axios.get(`${API_CURRENT}/${id}`),
    info_in_wiki: name => axios.get(`${API_INFO_IN_WIKI}/${name}`),
    museums: name => axios.get(`${API_MUSEUMS}/${name}`),
    parks: name => axios.get(`${API_PARKS}/${name}`),
    cafe: name => axios.get(`${API_CAFE}/${name}`),
    car_rental: name => axios.get(`${API_CAR_RENTAL}/${name}`),
    lodging: name => axios.get(`${API_LODGING}/${name}`),
  }
};
