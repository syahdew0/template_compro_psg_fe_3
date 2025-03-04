<template>
  <section id="keunggulan" class=" w-full h-auto flex flex-col items-center justify-center text-center pt-20 md:pt-24">
    <div class="relative z-10 flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-2 p-6 bg-white backdrop-blur-lg mx-auto w-full max-w-full md:max-w-7xl">
      <!-- Mockup Images -->
      <div class="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto md:overflow-visible">
        <img
          v-for="(mockup, index) in mockups"
          :key="index"
          :src="mockup"
          alt="Thumbnail"
          class="w-16 h-16 md:w-20 md:h-20 object-cover cursor-pointer transition-all hover:opacity-40 duration-300"
          @mouseover="handleHover(index)"
          @mouseleave="handleHover(null)"
          @click="handleClick(index)"
        />
      </div>

      <!-- Image Hover -->
      <div class="flex-1">
        <img
          :src="hoveredImage"
          alt="Main Display"
          class="w-full h-auto object-cover shadow-lg transition-all duration-300"
        />
      </div>

    <!-- Section Penjelasan -->
    <div class="w-full md:w-1/2 text-center md:text-left space-y-6">
      <h2 class="text-2xl md:text-3xl font-normal text-gray-800">
        <span class="text-blue-600">Cloudhomes</span>: Platform Pemesanan Hunian yang Fleksibel
      </h2>
      <p class="text-gray-600">
        Cloudhomes adalah platform pemesanan properti dari Senyaman Living yang memungkinkan Anda untuk menemukan, membandingkan, dan melakukan pemesanan hunian dengan cara yang lebih praktis.
      </p>

      <!-- List Fitur -->
      <div class="space-y-3">
        <h2 class="text-xl md:text-2xl font-normal text-gray-700">Fitur Utama Cloudhomes</h2>
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-center p-3 bg-white border-2 border-gray-100 rounded-lg cursor-pointer transform hover:scale-105 hover:bg-gray-105 transition-all duration-300">
          <div class="w-8 h-8 md:w-10 md:h-10 bg-gray-200 flex items-center justify-center">
            <i class="fas fa-check text-[#00B1D6]"></i>
          </div>
          <p class="ml-3 text-gray-500 text-sm md:text-base font-normal">
            <span class="text-[#00B1D6] font-normal">{{ feature.title }}</span> - {{ feature.description }}
          </p>
        </div>
      </div>

      <!-- Tombol -->
      <button
        class="mt-4 px-4 py-3 bg-[#00B1D6] text-white border-2 border-[#00B1D6] font-normal rounded-full shadow-md hover:bg-white hover:text-[#00B1D6] transition-all duration-300 flex items-center mx-auto md:mx-0">
        Lihat Cloudhomes sekarang <span class="ml-2 fas fa-arrow-right"></span>
      </button>
    </div>
  </div>
</section>

<!-- KENAPA MEMILIH KAMI --> 
<section class="mt-5 flex items-center justify-center text-center">
<div class="relative w-full max-w-7xl bg-white p-1 flex flex-col md:flex-row items-center mt-10">
  <!-- Kotak biru panjang -->
  <div class=" bg-[#00B1D6] text-white max-w-7xl w-4xl px-4 py-8 md:py-12 w-full md:w-1/2 relative md:absolute md:right-0 flex flex-col items-end md:justify-end">
    <h2 class="relative text-2xl md:text-3xl text-center md:text-right font-normal z-20">Kenapa memilih kami?</h2>

    <!-- Wrapper Kotak Abu dan Hitam -->
    <div class="absolute -bottom-6 -left-2 flex flex-wrap gap-2 md:gap-3 z-10">
      <!-- Kotak abu-abu di sudut kiri mobile -->
      <div class="grid grid-cols-2 grid-rows-2 gap-2 md:gap-3">
        <div class="w-16 h-16 md:w-20 md:h-20 bg-gray-300"></div>
        <div class="w-16 h-16 md:w-20 md:h-20 bg-gray-300"></div>
        <div class="w-16 h-16 md:w-20 md:h-20 bg-gray-300"></div>
        <div class="w-16 h-16 md:w-20 md:h-20 bg-gray-300"></div>
      </div>

      <!-- Kotak hitam mengikuti kotak abu -->
      <div class="absolute top-10 left-1/2 transform -translate-x-1/2 border-2 border-gray-400 w-16 h-16 md:w-20 md:h-20 bg-[#3C2C28] z-40"></div>
    </div>
  </div>

  <!-- Fitur List -->
  <div class="relative space-y-6 w-full md:w-1/2 mt-20 md:mt-1">
    <div 
      v-for="feature in rentalFeatures" 
      :key="feature.title"
      class="flex items-center space-x-2 relative">
      <!-- Garis konektor (disembunyikan di mobile) -->
      <div class="absolute h-0.5 bg-[#00B1D6] top-1/2 -right-2 w-full translate-x-2 hidden md:block rounded-r-full"></div>
<!--  -->
      <div 
      class="px-4 py-3 rounded-lg shadow-md w-auto min-w-[100px] text-gray-600 inline-flex items-center relative z-10"
      :class="feature.isBlue ? 'bg-[#00B1D6] text-white' : 'bg-white border border-gray-300'">
      <h3 class="font-normal" :class="feature.isBlue ? 'text-white' : 'text-[#00B1D6]'">
        {{ feature.title }}
      </h3>
      <p class="text-sm ml-2">{{ feature.description }}</p>
    </div>
  </div>
</div>
</div>
</section>

</template>

<script>
import imageUtama from '@/assets/imageutama.png';
import mockup1 from '@/assets/mockup1.png';
import mockup2 from '@/assets/mockup2.png';
import mockup3 from '@/assets/mockup3.png';
import mockup4 from '@/assets/mockup4.png';
import mockup5 from '@/assets/mockup5.png';
import mockup6 from '@/assets/mockup6.png';

export default {
  name: 'KeunggulanPage',
  data() {
    return {
      imageUtama: imageUtama,
      mockups: [mockup1, mockup2, mockup3, mockup4, mockup5, mockup6],
      features: [
        { title: "Cari & Bandingkan Properti", description: "dengan filter lengkap" },
        { title: "Proses Pemesanan Cepat", description: "hanya dalam beberapa detik" },
        { title: "Check-in Tanpa Ribet", description: "dengan Smart Doorlock" },
        { title: "Keamanan Terjamin", description: "dengan verifikasi pengguna" },
      ],
      currentPage: 1,
      rentalFeatures: [
        { title: 'Booking Mudah & Cepat', description: 'Pemesanan 100% online via Cloudhomes', isBlue: false },
        { title: 'Lokasi Strategis', description: 'Banyak pilihan di pusat kota', isBlue: true },
        { title: 'Fitur Smart Doorlock', description: 'Check-in mudah tanpa kunci manual', isBlue: false },
        { title: 'Harga Transparan', description: 'Tanpa biaya tersembunyi', isBlue: true },
        { title: 'Banyak Pilihan Hunian', description: 'Dari kost hingga apartment mewah', isBlue: false }
      ],

      hoverIndex: null,
      isMobile: window.innerWidth <= 768, // Deteksi awal ukuran layar
    };
  },
  computed: {
    hoveredImage() {
      return this.hoverIndex !== null ? this.mockups[this.hoverIndex] : this.imageUtama;
    },
  },
  methods: {
    handleHover(index) {
      if (!this.isMobile) {
        this.hoverIndex = index;
      }
    },
    handleClick(index) {
      if (this.isMobile) {
        this.hoverIndex = index;
      }
    },
    updateIsMobile() {
      this.isMobile = window.innerWidth <= 768;
    }
  },
  mounted() {
    window.addEventListener('resize', this.updateIsMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIsMobile);
  }
};
</script>

<style scoped>
/* Scroll Smooth */
html {
  scroll-behavior: smooth;
}

@media (max-width: 1024px) {
  .connect-line {
    width: 30px; /* Lebih pendek pada tablet */
    right: -30px;
  }
}

@media (max-width: 768px) {
  .connect-line {
    width: 20px; /* Lebih pendek pada mobile */
    right: -20px;
  }
  
  .feature-box {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .keunggulan-container {
    flex-direction: column;
  }

  .blue-box {
    width: 90vw;
    text-align: center;
  }
}

</style>
