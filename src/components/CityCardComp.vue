<script setup>
import { defineProps } from "vue";
defineProps({
  city: Object,
});
</script>

<template>
  <div
    class="rounded-md border border-[var(--ter-color)] p-5 bg-[var(--cta-color)] text-[var(--primary-color)]"
  >
    <span
      class="w-full flex justify-between text-[var(--secondary-color)] text-xl"
      ><h1>City Name :</h1>
      <h3>{{ city.name }}</h3></span
    >
    <span
      class="w-full flex justify-between border-b border-b-[var(--ter-color)]"
      ><h1>City Country :</h1>
      <h3>{{ city.country }}</h3></span
    >
    <span
      class="w-full flex justify-between border-b border-b-[var(--ter-color)]"
      ><p>City Region :</p>
      <p>{{ city.region }}</p></span
    >
    <span
      class="w-full flex justify-between border-b border-b-[var(--ter-color)]"
      ><p>City Coordinates :</p>
      <p>{{ city.latitude }}, {{ city.longitude }}</p></span
    >
    <span class="w-full flex justify-between"
      ><p>City Population :</p>
      <p>{{ city.population }}</p></span
    >
  </div>
</template>
