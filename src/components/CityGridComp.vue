<script setup>
import { computed } from "vue";
import { useCityStore } from "../stores/cityStore";

const store = useCityStore();

const cities = computed(() => store.cities);
const prevHandler = () => {
  if (store.offset > 0) {
    store.offset -= 10;
    store.fetchCities(store.offset);
  }
};

const nextHandler = () => {
  console.log(store.offset);
  if (store.offset + 10 < store.totalCities) {
    store.offset += 10;
    store.fetchCities(store.offset);
  }
};
store.fetchCities();
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>City</th>
          <th>Country</th>
          <th>Region</th>
          <th>Latitude</th>
          <th>Longitude</th>
          <th>Population</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="city in cities" :key="city.id">
          <td>{{ city.name }}</td>
          <td>{{ city.country }}</td>
          <td>{{ city.region }}</td>
          <td>{{ city.latitude }}</td>
          <td>{{ city.longitude }}</td>
          <td>{{ city.population }}</td>
        </tr>
      </tbody>
    </table>
    <button @click="prevHandler">Previous</button>
    <button @click="nextHandler">Next</button>
  </div>
</template>
