import { defineStore } from "pinia";
import api from "../api/api";

export const useCityStore = defineStore("cityStore", {
  state: () => ({
    cities: [],
    totalCities: 0,
    viewCard: "grid",
    offset: 0,
    selectedCity: null,
    nearbyCities: [],
  }),
  actions: {
    async fetchCities(offset = 0, limit = 10) {
      try {
        const response = await api.getCities(offset, limit);
        this.cities = response.data.data;
        this.totalCities = response.data.metadata.totalCount;
      } catch (error) {
        console.error("Error :", error);
      }
    },
    async fetchNearbyCities(cityId) {
      try {
        const response = await api.getNearbyCities(cityId);
        this.nearbyCities = response.data.data;
      } catch (error) {
        console.error("Error :", error);
      }
    },
    toggleViewMode() {
      this.viewCard = this.viewCard === "grid" ? "card" : "grid";
    },
    selectCity(city) {
      this.selectedCity = city;
    },
    clearSelectedCity() {
      this.selectedCity = null;
    },
  },
});
