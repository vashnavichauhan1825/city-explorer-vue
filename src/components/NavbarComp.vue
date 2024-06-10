<script setup>
import { useCityStore } from "../stores/cityStore";
const store = useCityStore();
const toggleHandler = () => {
  store.toggleViewMode();
};
</script>

<template>
  <nav
    class="w-full px-10 py-5 flex justify-between bg-[var(--secondary-color)]"
  >
    <button
      @click="toggleHandler"
      class="bg-[var(--ter-color)] px-3 py-1 rounded-md hover:opacity-75"
    >
      Toggle View
    </button>
  </nav>
</template>
