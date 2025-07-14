<template>
  <div class="w-screen min-h-screen flex flex-col overflow-auto">
    <Navbar />
    <div class="flex-1 overflow-y-auto w-screen">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/NavbarApp.vue';
import Footer from './components/FooterPage.vue';


</script>
