<script setup>
import { computed } from "vue";
import { useCityStore } from "../stores/cityStore";
import CityCardComp from "./CityCardComp.vue";
const store = useCityStore();
const viewMode = computed(() => store.viewCard);
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
          class="even:bg-[var(--ter-color)]"
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
  </div>
</template>
