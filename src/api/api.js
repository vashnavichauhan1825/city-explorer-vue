import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    "x-rapidapi-key": process.env.VUE_APP_API_KEY,
  },
});

export default {
  getCities: (offset = 0, limit = 10) => {
    return apiClient.get(`/cities?offset=${offset}&limit=${limit}`);
  },
  getNearbyCities: (cityId, radius = 100) => {
    return apiClient.get(`/cities/${cityId}/nearbyCities?radius=${radius}`);
  },
  searchCitiesByRegion: (region) => {
    return apiClient.get(`/cities?namePrefix=${region}`);
  },
};
