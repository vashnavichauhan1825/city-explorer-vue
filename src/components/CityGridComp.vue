<script setup>
import { computed } from "vue";
import { useCityStore } from "../stores/cityStore";
import CityCardComp from "./CityCardComp.vue";
import CityModalComp from "./CityModalComp.vue";
import notFoundImg from "../assets/not-found.svg";
const store = useCityStore();
const viewMode = computed(() => store.viewCard);
const cities = computed(() => store.cities);
const selectedCity = computed(() => store.selectedCity);
const prevHandler = () => {
  if (store.offset > 0) {
    store.offset -= 10;
    store.fetchCities(store.offset);
  }
};
const selectCity = (city) => {
  store.selectCity(city);
  store.fetchNearbyCities(city.id);
};
const nextHandler = () => {
  console.log(store.offset);
  if (store.offset + 10 < store.totalCities) {
    store.offset += 10;
    store.fetchCities(store.offset);
  }
};
const clearSelectedCity = () => {
  store.clearSelectedCity();
};
store.fetchCities();
</script>

<template>
  <div class="w-full py-3 px-10">
    <table class="w-full text-left" v-if="viewMode === 'grid'">
      <thead class="bg-[var(--cta-color)] text-[var(--primary-color)]">
        <tr>
          <th class="font-normal text-xl p-1">City</th>
          <th class="font-normal text-xl p-1">Country</th>
          <th class="font-normal text-xl p-1">Region</th>
          <th class="font-normal text-xl p-1">Latitude</th>
          <th class="font-normal text-xl p-1">Longitude</th>
          <th class="font-normal text-xl p-1">Population</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="city in cities"
          :key="city.id"
          class="even:bg-[var(--ter-color)] hover:bg-[var(--secondary-color)] hover:text-[var(--ter-color)] cursor-pointer"
          @click="selectCity(city)"
        >
          <td class="px-1 py-2">{{ city.name }}</td>
          <td class="px-1 py-2">{{ city.country }}</td>
          <td class="px-1 py-2">{{ city.region }}</td>
          <td class="px-1 py-2">{{ city.latitude }}</td>
          <td class="px-1 py-2">{{ city.longitude }}</td>
          <td class="px-1 py-2">{{ city.population }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else class="grid grid-cols-2 gap-6">
      <CityCardComp v-for="city in cities" :key="city.id" :city="city" />
    </div>
    <div
      v-show="!cities.length"
      class="flex w-full justify-center items-center object-contain p-4 gap-3"
    >
      <img
        class="max-w-[500px]"
        loading="lazy"
        :src="notFoundImg"
        alt="not-found-image"
      />
      <h2 class="text-3xl">Not Found !</h2>
    </div>

    <div class="w-full flex justify-center mt-10 gap-20">
      <button
        @click="prevHandler"
        class="bg-[var(--cta-color)] text-[var(--primary-color)] px-3 py-2 rounded-md text-center font-semibold"
      >
        Prev
      </button>
      <button
        @click="nextHandler"
        class="bg-[var(--cta-color)] text-[var(--primary-color)] px-3 py-2 rounded-md text-center font-semibold"
      >
        Next
      </button>
    </div>
    <CityModalComp
      v-if="selectedCity"
      :city="selectedCity"
      @close="clearSelectedCity"
    />
  </div>
</template>
