import axios from "axios";

const API_KEY = "8cc28e952emshc81f8cf9a48f788p1ffa67jsn9b46356be88f";
const BASE_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
    "x-rapidapi-key": API_KEY,
  },
});

export default {
  getCities: (offset = 0, limit = 10) => {
    return apiClient.get(`/cities?offset=${offset}&limit=${limit}`);
  },
};
