<template>
  <div>
    <!-- Navbar -->
    <nav class="absolute top-0 left-0 right-0 w-full p-4 z-50">
      <div class="container mx-auto flex items-center justify-between">
        <!-- Logo -->
        <div class="flex items-center space-x-2 pl-4">
          <img src="./assets/logo.png" alt="Logo" class="w-12 h-12">
          <div class="text-white">
            <a href="#" class="font-bold text-xl block">Senyaman Living</a>
            <p class="text-sm opacity-70 text-[#00B1D6]">by PSG Group</p>
          </div>
        </div>

        <!-- Navigasi Menu -->
        <div class="hidden md:flex space-x-6 pr-4">
          <a href="#home" class="text-white hover:text-[#00B1D6] text-lg">Beranda</a>
          <a href="#keunggulan" class="text-white hover:text-[#00B1D6] text-lg">Keunggulan</a>
          <a href="#carakerja" class="text-white hover:text-[#00B1D6] text-lg">Cara Kerja</a>
          <a href="#promo" class="text-white hover:text-[#00B1D6] text-lg">Promo</a>
        </div>

        <!-- Mobile Menu Button -->
        <button class="md:hidden text-white focus:outline-none pr-4" @click="menuOpen = !menuOpen">
          <i class="fas fa-bars"></i>
        </button>
      </div>

      <!-- Menu Mobile -->
      <div v-if="menuOpen" class="md:hidden flex flex-col bg-black bg-opacity-90 p-4 space-y-3 absolute top-full left-0 w-full">
        <a href="#home" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Beranda</a>
        <a href="#keunggulan" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Keunggulan</a>
        <a href="#carakerja" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Cara Kerja</a>
        <a href="#promo" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Promo</a>
      </div>
    </nav>

    <!-- Halaman Pertama: Scroll Horizontal -->
    <div id="home" class="h-screen overflow-y-auto">
      <!-- Section Scroll Horizontal -->
      <section class="relative w-full h-screen overflow-hidden">
        <div class="flex w-full h-full overflow-x-auto snap-x snap-mandatory whitespace-nowrap scroll-smooth">
          
          <!-- Home - Page 1 -->
          <div class="w-screen h-full flex items-center justify-center snap-start relative shrink-0">
            <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${page1Background})` }">
              <div class="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div class="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 text-left text-white w-[90%] max-w-2xl md:max-w-4xl lg:max-w-5xl px-4 md:px-0">
              <h2 class="italic text-base md:text-lg">Temukan Hunian dalam hitungan menit</h2>
              <h1 class="text-3xl md:text-5xl font-bold my-4 leading-tight">Sewa Hunian dengan Mudah di Cloudhomes</h1>
              <p class="text-sm md:text-lg">Booking cepat, proses mudah, hunian nyaman sesuai kebutuhanmu!</p>
           
              <div class="flex flex-col sm:flex-row gap-5 p-6">
                <button class="w-full sm:w-auto px-5 py-2 text-base font-reguler rounded-full bg-[#00B1D6] text-white border-2 border-[#00B1D6] transition-all duration-300 hover:bg-white hover:text-[#00B1D6]">
                  Cari Hunian Sekarang
                </button>
                <button class="w-full sm:w-auto px-5 py-2 text-base font-reguler rounded-full bg-[#00B1D6] text-white border-2 border-[#00B1D6] transition-all duration-300 hover:bg-white hover:text-[#00B1D6]">
                  Jelajahi Properti
                </button>
              </div>
            </div>
          </div>

          <!-- Home - Page 2 -->
          <div class="w-screen h-full flex items-center justify-center snap-start relative shrink-0">
            <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${page2Background})` }">
              <div class="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div class="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 text-left text-white w-[90%] max-w-2xl md:max-w-4xl lg:max-w-5xl px-4 md:px-0">
              <h2 class="italic text-base md:text-lg">Dari kost harian hingga apartemen Eksklusif</h2>
              <h1 class="text-3xl md:text-5xl font-bold my-4 leading-tight">Semua Jenis Hunian Ada di Cloudhomes</h1>
              <p class="text-sm md:text-lg">Sesuaikan pilihan hunian dengan kebutuhan, mulai darisewa harian, bulanan hingga tahunan</p>
          
              <div class="flex flex-col sm:flex-row gap-5 p-6">
                <button class="w-full sm:w-auto px-5 py-2 text-base font-reguler rounded-full bg-[#00B1D6] text-white border-2 border-[#00B1D6] transition-all duration-300 hover:bg-white hover:text-[#00B1D6]">
                  Cari Hunian Sekarang
                </button>
                <button class="w-full sm:w-auto px-5 py-2 text-base font-reguler rounded-full bg-[#00B1D6] text-white border-2 border-[#00B1D6] transition-all duration-300 hover:bg-white hover:text-[#00B1D6]">
                  Jelajahi Properti
                </button>
              </div>
            </div>
          </div>

          <!-- Home - Page 3  -->
          <div class="w-screen h-full flex items-center justify-center snap-start relative shrink-0">
            <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${page3Background})` }">
              <div class="absolute inset-0 bg-black opacity-60"></div>
            </div>
            <div class="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-10 text-left text-white w-[90%] max-w-2xl md:max-w-4xl lg:max-w-5xl px-4 md:px-0">
              <h2 class="italic text-base md:text-lg">Nyaman dan Aman dengan Teknologi Modern</h2>
              <h1 class="text-3xl md:text-5xl font-bold my-4 leading-tight">Booking Aman dengan Smart Doorlock</h1>
              <p class="text-sm md:text-lg">Check-in tanpa ribet dengan sistem pintu pintar, keamanan lebih terjamin dalam setiap pemesanan</p>
          
              <div class="flex flex-col sm:flex-row gap-5 p-6">
                <button class="w-full sm:w-auto px-5 py-2 text-base font-reguler rounded-full bg-[#00B1D6] text-white border-2 border-[#00B1D6] transition-all duration-300 hover:bg-white hover:text-[#00B1D6]">
                  Cari Hunian Sekarang
                </button>
                <button class="w-full sm:w-auto px-5 py-2 text-base font-reguler rounded-full bg-[#00B1D6] text-white border-2 border-[#00B1D6] transition-all duration-300 hover:bg-white hover:text-[#00B1D6]">
                  Jelajahi Properti
                </button>
              </div>
            </div>
          </div>


        </div>
      </section>
    </div>

    <!-- Halaman Lain Scroll ke Bawah -->
    <!-- KEUNGGULAN -->
    <section id="keunggulan" class="h-screen flex items-center bg-white">
      <div class="relative">
    <!-- Background Image (Menyesuaikan Halaman) -->
    <div class="absolute inset-0 bg-cover bg-center transition-all duration-500"
      :style="{ backgroundImage: `url(${currentPageBackground})` }"
    > </div>
  </div>
    <!-- Content -->
    <div class="relative z-10 flex space-x-6 p-10 bg-white backdrop-blur-lg rounded-lg shadow-lg">
      <!-- MOCKUP Images -->
      <div class="flex flex-col space-y-2">
        <img 
          v-for="(mockup, index) in mockups" 
          :key="index" 
          :src="mockup" 
          alt="Thumbnail"
          class="w-20 h-20 object-cover  cursor-pointer transition-all hover:opacity-40 duration-300"
          @mouseover="hoverIndex = index"
          @mouseleave="hoverIndex = null"
        />
      </div>

      <!-- IMAGE HOVERRRR-->
      <div class="flex-1 ">
        <img 
          :src="hoveredImage" 
          alt="Main Display" 
          class="w-auto h-auto object-cover shadow-lg transition-all duration-300"
        />
      </div>

      <!-- Penjelasan kanan Section -->
      <div class="w-1/2 ">
        <h2 class="text-3xl font-reguler text-gray-800">
          <span class="text-blue-600">Cloudhomes</span>: Platform Pemesanan Hunian yang Fleksibel
        </h2>
        <p class="text-gray-600 mt-2">
          Cloudhomes adalah platform pemesanan properti dari Senyaman Living yang memungkinkan Anda untuk menemukan, membandingkan, dan melakukan pemesanan hunian dengan cara yang lebih praktis.
        </p>

        <!--  List -->
        <div class="mt-2 space-y-3">
          <div v-for="(feature, index) in features" :key="index" class="flex items-center p-3 bg-gray-100 rounded-lg cursor-pointer hover:bg-gray-200 transition-all duration-300">
            <div class="w-10 h-10 bg-gray-300 rounded-md"></div>
            <p class="ml-3">
              <span class="text-[#00B1D6] font-semibold">{{ feature.title }}</span> {{ feature.description }}
            </p>
          </div>
        </div>

        <!-- Button -->
        <button class="mt-6 px-6 py-3 bg-[#00B1D6] text-white border-2 border-[#00B1D6] font-reguler rounded-full shadow-md hover:bg-white hover:text-[#00B1D6] transition-all duration-300 flex items-center">
          Lihat Cloudhomes sekarang <span class="ml-2 fas fa-arrow-right"></span>
        </button>
      </div>
    </div>

    </section>


    <!-- <section id="carakerja" class="h-screen flex items-center justify-center bg-red-300">
      <h1 class="text-3xl font-bold">Cara Kerja</h1>
    </section>

    <section id="promo" class="h-screen flex items-center justify-center bg-green-300">
      <h1 class="text-3xl font-bold">Promo</h1>
    </section> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      hoverIndex: null, // Menyimpan indeks gambar yang di-hover
      imageUtama: require('@/assets/imageutama.png'),
      mockups: [
        require('@/assets/mockup1.png'),
        require('@/assets/mockup2.png'),
        require('@/assets/mockup3.png'),
        require('@/assets/mockup4.png'),
        require('@/assets/mockup5.png'),
        require('@/assets/mockup6.png'),
      ],
      features: [
        { title: "Cari & Bandingkan Properti", description: "dengan filter lengkap" },
        { title: "Proses Pemesanan Cepat", description: "hanya dalam beberapa detik" },
        { title: "Check-in Tanpa Ribet", description: "dengan Smart Doorlock" },
        { title: "Keamanan Terjamin", description: "dengan verifikasi pengguna" },
      ],
      page1Background: require('@/assets/page1.png'),
      page2Background: require('@/assets/page2.png'),
      page3Background: require('@/assets/page3.png'),
      currentPage: 1, // Default halaman 1
    };
  },
  computed: {
    hoveredImage() {
      return this.hoverIndex !== null ? this.mockups[this.hoverIndex] : this.imageUtama;
    },
    currentPageBackground() {
      if (this.currentPage === 1) return this.page1Background;
      if (this.currentPage === 2) return this.page2Background;
      if (this.currentPage === 3) return this.page3Background;
      return this.page1Background;
    }
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
      this.menuOpen = false; // Tutup menu setelah memilih halaman
    }
  }
};
</script>

<style>
/* Efek scroll smooth */
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