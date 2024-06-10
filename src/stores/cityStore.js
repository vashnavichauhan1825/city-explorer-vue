import { defineStore } from "pinia";
import api from "../api/api";

export const useCityStore = defineStore("cityStore", {
  state: () => ({
    cities: [],
    totalCities: 0,
    viewCard: "grid",
    offset: 0,
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
    toggleViewMode() {
      this.viewCard = this.viewCard === "grid" ? "card" : "grid";
    },
  },
});
