<script setup>
import { ref } from "vue";
import { useCityStore } from "../stores/cityStore";
const store = useCityStore();
const toggleHandler = () => {
  store.toggleViewMode();
};
const region = ref("");
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
const searchCities = () => {
  if (region.value) {
    store.searchCities(region.value);
  } else {
    store.fetchCities();
  }
};
const debouncedSearchCities = debounce(searchCities, 1000);
</script>

<template>
  <nav
    class="w-full px-10 py-5 max-sm:px-2 flex justify-between bg-[var(--secondary-color)]"
  >
    <input
      class="rounded-md p-2 max-sm:p-1"
      v-model="region"
      placeholder="Search Cities"
      @input="debouncedSearchCities"
    />
    <button
      @click="toggleHandler"
      class="bg-[var(--ter-color)] px-3 py-1 rounded-md hover:opacity-75"
    >
      Toggle View
    </button>
  </nav>
</template>
