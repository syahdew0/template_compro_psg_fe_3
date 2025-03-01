<template>
    <div id="HorizontalSlides" class="flex w-screen h-screen snap-x snap-mandatory overflow-x-auto">
      <SlideBeranda1 />
      <SlideBeranda2 />
      <SlideBeranda3 />
    </div>
  </template>
  
  <script setup>
  import SlideBeranda1 from "@/components/SlideSatu.vue";
  import SlideBeranda2 from "@/components/SlideDua.vue";
  import SlideBeranda3 from "@/components/SlideTiga.vue";
  </script>
  