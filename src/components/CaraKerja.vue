<template>
    <section id="carakerja" class="py-20 flex flex-col items-center text-center bg-white">
      <h1 class="text-3xl font-normal text-gray-800">Cara Kerja</h1>
      <p class="text-gray-600 text-sm mt-5 max-w-lg">
        Cari, booking, dan check-in tanpa ribet! Semua hunian siap untuk kamu tempati dengan nyaman.
      </p>
  
      <!-- Container Grid -->
      <div class="mt-12 flex flex-col items-center w-full max-w-5xl px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 w-full relative">
          <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center relative">
            <!-- Icon Box -->
            <div class="w-14 h-14 bg-gray-300 flex items-center justify-center ">
              <i class="fas fa-check text-white"></i>
            </div>
  
            <!-- Garis Penghubung -->
            <div 
              v-if="index !== steps.length - 1"
              class="hidden md:block absolute top-7 -right-20 w-24 border-t-2 border-dashed border-[#00B1D6]">
            </div>
            <div 
              v-if="index !== steps.length - 1"
              class="md:hidden w-1 h-12 border-l-2 border-dashed border-[#00B1D6] mt-2">
            </div>
  
            <!-- Step Number -->
            <span class="text-gray-400 mt-4 text-sm">Step {{ index + 1 }}</span>
  
            <!-- Deskripsi -->
            <h3 class="font-medium text-gray-700 mt-2">{{ step.title }}</h3>
            <p class="text-sm mt-2 text-gray-600 max-w-xs">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  
    <!-- REKOMENDASI -->
    <section class="py-10 w-auto h-auto bg-white overflow-hidden">
      <div class="max-w-screen-3xl mx-auto px-6 relative">
        <!-- Judul -->
        <div class="flex items-center">
          <div class="relative -left-1 -bottom-40 h-30 w-1/2 bg-[#00B1D6] text-white text-3xl font-normal px-14 py-10 flex items-center">
            <span>Rekomendasi Properti</span>
            <button 
              @click="prevSlide"
              class="relative -right-10 top-1/3 transform -translate-y-1/5 bg-white text-[#00B1D6] text-sm rounded-lg p-2">
              <i class="fas fa-chevron-left"></i>
            </button>
          </div>
        </div>
  
        <!-- Carousel -->
        <div class="relative mt-3 w-full h-full flex justify-end items-center">
          <div ref="carousel" class="flex gap-2 rounded-lg border-gray-200 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide z-20 w-2/3 ml-auto">
            <div v-for="(property, index) in properties" :key="index" class="flex-none border-2 w-80 bg-white shadow-lg rounded-lg overflow-hidden snap-start">
              <img :src="property.image" class="w-full h-40 object-cover" alt="Properti">
              <div class="p-4">
                <p class="text-gray-400 text-sm">[{{ property.name }}]</p>
                <h3 class="font-normal text-sm">{{ property.type }}</h3>
                <p class="text-gray-400">{{ property.city }}</p>
                <div class="flex items-center text-[#DAB66D] mt-2">
                  <i class="fas fa-star"></i>
                  <span class="ml-1">{{ property.rating }} ({{ property.reviews }} reviews)</span>
                </div>
                <div class="flex justify-between items-center mt-4">
                  <span class="text-[#00B1D6] text-sm font-semibold">START FROM</span>
                  <span class="text-lg font-normal">{{ property.price }} /night</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "CaraKerja",
    data() {
      return {
        steps: [
          { title: "Cari Hunian", description: "Jelajahi berbagai pilihan hunian dengan lokasi strategis, fasilitas lengkap, dan harga sesuai budgetmu!" },
          { title: "Booking Online", description: "Pesan hunian dengan mudah, bayar langsung dengan berbagai metode yang pastinya aman!" },
          { title: "Check-in Cepat", description: "Akses hunian dengan mudah menggunakan Smart Doorlock, tanpa kunci fisik, cukup dengan kode akses. Praktis & aman!" },
          { title: "Nikmati Hunian", description: "Rasakan kenyamanan menginap dengan fasilitas terbaik, semua sudah tersedia untukmu!" }
        ],
        properties: [
          {
            image: require('@/assets/hotel.png'),
            name: "Nama Properti",
            type: "Nama Tipe/Nama Kamar",
            city: "Kota",
            rating: "4.9",
            reviews: "90",
            price: "499.999",
          },
          { 
            image: require('@/assets/hotel.png'),
            name: "Nama Properti",
            type: "Nama Tipe/Nama Kamar",
            city: "Kota",
            rating: "4.8",
            reviews: "75",
            price: "599.999",
          },
          { 
            image: require('@/assets/hotel.png'),
            name: "Nama Properti",
            type: "Nama Tipe/Nama Kamar",
            city: "Kota",
            rating: "4.7",
            reviews: "60",
            price: "699.999",
          },
          { 
            image: require('@/assets/hotel.png'),
            name: "Nama Properti",
            type: "Nama Tipe/Nama Kamar",
            city: "Kota",
            rating: "4.7",
            reviews: "60",
            price: "699.999",
          },
        ],
      };
    },
    methods: {
      prevSlide() {
        this.$refs.carousel.scrollBy({ left: -300, behavior: "smooth" });
      },
      nextSlide() {
        this.$refs.carousel.scrollBy({ left: 300, behavior: "smooth" });
      }
    }
  };
  </script>
  
  <style>
  /* Hides scrollbar for a cleaner UI */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  </style>
  