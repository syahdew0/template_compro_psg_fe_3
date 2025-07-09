<template>
  <nav class="absolute top-0 left-0 right-0 w-full p-4 z-50 ">
    <div class="flex items-center justify-between px-4 md:px-10 py-3 md:py-10 lg:py-1 lg:px-16">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="@/assets/Logo-psg.png" alt="Logo" class="w-full h-full">
        <!-- <div class="text-gray-500">
          <a href="#" class="font-bold text-xl block">Senyaman Living</a>
          <p class="text-sm opacity-70 text-[#00B1D6]">by PSG Group</p>
        </div> -->
      </div>

      <!-- Navigasi Desktop -->
      <div class="hidden lg:flex space-x-6">
        <a href="#PageManagement" class="text-[#1E1E1E] hover:text-[#00B1D6] text-lg">Beranda</a>
        <a href="#AnakPerusahaan" class="text-[#1E1E1E] hover:text-[#00B1D6] text-lg">Jelajahi Group</a>
        <a href="#contact-page " class="text-[#1E1E1E] hover:text-[#00B1D6] text-lg">Hubungi Kami</a>
      </div>

      <!-- Tombol Menu Mobile (di kanan atas) -->
      <button class="lg:hidden text-3xl text-gray-200 focus:outline-none ml-auto" @click="menuOpen = true">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <div
      class="fixed top-0 right-0 h-screen w-64 bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-lg transform transition-transform duration-300"
      :class="menuOpen ? 'translate-x-0' : 'translate-x-full'">
      <!-- Tombol Close -->
      <button class="absolute top-4 right-4 text-3xl text-white" @click="menuOpen = false">
        <i class="fas fa-times"></i>
      </button>

      <!-- Menu Links -->
      <div class="flex flex-col items-end mt-16 space-y-6 pr-6">
        <a href="#HorizontalSlides" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Beranda</a>
        <a href="#Beranda" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Beranda</a>
        <a href="#carakerja" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Cara Kerja</a>
        <a href="#promo" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Hubungi Kami</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const menuOpen = ref(false);
</script>