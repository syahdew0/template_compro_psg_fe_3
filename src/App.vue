<template>
  <div class="w-screen min-h-screen flex flex-col overflow-auto">
    <Navbar />
    <!-- <div class="overflow-x-auto snap-x snap-mandatory h-screen w-screen">
      <HorizontalSlides />
    </div> -->
    <div class="flex-1 overflow-y-auto w-screen">
      <VerticalSections />
    </div>
    <!-- <FooterPage />  -->
  </div>
</template>

<script setup>
import Navbar from './components/NavbarApp.vue';
// import HorizontalSlides from './components/HorizontalSlides.vue';
import VerticalSections from './views/PageManage.vue';
// import FooterPage from './components/FooterPage.vue'; 
</script>
