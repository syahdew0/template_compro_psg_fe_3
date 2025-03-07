<template>
  <nav class="fixed top-0 left-0 right-0 w-full p-4 z-50 backdrop-blur-sm">
    <div class="flex items-center justify-between px-8 md:px-16">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="@/assets/logo.png" alt="Logo" class="w-12 h-12">
        <div class="text-gray-200">
          <a href="#" class="font-bold text-xl block">Senyaman Living</a>
          <p class="text-sm opacity-70 text-[#00B1D6]">by PSG Group</p>
        </div>
      </div>

      <!-- Navigasi Desktop -->
      <div class="hidden md:flex space-x-6">
        <a href="#HorizontalSlides" class="text-gray-200 hover:text-[#00B1D6] text-lg">Beranda</a>
        <a href="#keunggulan" class="text-gray-200 hover:text-[#00B1D6] text-lg">Keunggulan</a>
        <a href="#carakerja" class="text-gray-200 hover:text-[#00B1D6] text-lg">Cara Kerja</a>
        <a href="#promo" class="text-gray-200 hover:text-[#00B1D6] text-lg">Promo</a>
      </div>

      <!-- Tombol Menu Mobile -->
      <button class="md:hidden text-gray-200 focus:outline-none" @click="menuOpen = !menuOpen">
        <i class="fas fa-bars" v-if="!menuOpen"></i>
        <i class="fas fa-times" v-else></i>
      </button>
    </div>

    <!-- Menu Mobile -->
    <div v-if="menuOpen" class="md:hidden flex flex-col bg-gray-800 bg-opacity-80 backdrop-blur-md p-6 space-y-3 absolute top-full left-0 right-0">
      <a href="#HorizontalSlides" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Beranda</a>
      <a href="#keunggulan" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Keunggulan</a>
      <a href="#carakerja" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Cara Kerja</a>
      <a href="#promo" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Promo</a>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
</script>

<style>
/* scroll smooth */
html {
  scroll-behavior: smooth;
}

/* Hilangkan scrollbar horizontal */
#home::-webkit-scrollbar {
  display: none;
}

/* Tambahkan dukungan untuk browser lain */
#home {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>
