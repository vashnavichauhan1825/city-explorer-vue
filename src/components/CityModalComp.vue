<script setup>
import { computed, defineProps, defineEmits } from "vue";
import { useCityStore } from "../stores/cityStore";

const store = useCityStore();
defineProps({
  city: Object,
});
const emit = defineEmits(["close"]);
const nearCities = computed(() => store.nearbyCities);

const close = () => {
  emit("close");
};
</script>

<template>
  <div
    class="fixed flex items-center justify-center inset-0 bg-[var(--modal-bg)]"
    @click="close"
  >
    <div
      class="max-w-[600px] w-full p-10 max-sm:p-2 rounded-[5px] bg-[var(--primary-color)]"
      @click.stop
    >
      <div class="flex justify-between">
        <h2 class="text-2xl max-sm:text-xl text-[var(--cta-color)]">
          {{ city.name }} -- Nearby Cities
        </h2>
        <button
          @click="close"
          class="text-lg text-[var(--cta-color)] hover:text-[var(--ter-color)]"
        >
          close
        </button>
      </div>

      <ul class="border border-[var(--cta-color)] mt-5">
        <li
          v-for="nearbyCity in nearCities"
          :key="nearbyCity.id"
          class="odd:bg-[var(--ter-color)] px-3 py-2 flex justify-between max-sm:text-sm"
        >
          <h3>{{ nearbyCity.city }} - {{ nearbyCity.distance }} km</h3>
          <p>{{ nearbyCity.region }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
