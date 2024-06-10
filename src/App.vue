<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <div>
      <button @click="fetchCities">Fetch Cities</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import HelloWorld from "./components/HelloWorld.vue";

const cities = ref([]);

const fetchCities = async () => {
  try {
    const response = await axios.get(
      "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      {
        headers: {
          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          "x-rapidapi-key":
            "8cc28e952emshc81f8cf9a48f788p1ffa67jsn9b46356be88f",
        },
        params: {
          limit: 10,
          offset: 0,
        },
      }
    );
    cities.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
