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
<!--  -->
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

    <!--  Scroll ke Bawah -->
    <!-- KEUNGGULAN -->
    <section id="keunggulan" class="h-screen flex items-center bg-white">
      <div class="relative">
    <!-- Background Image (Menyesuaikan Halaman) -->
    <div class="absolute inset-0 bg-cover bg-center transition-all duration-500"
      :style="{ backgroundImage: `url(${currentPageBackground})` }"
    > </div>
  </div>
    <!-- Content -->
    <div class="relative z-10 flex space-x-6 p-10 bg-white backdrop-blur-lg ">
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
      <div class="flex-1 w-auto h-auto ">
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
        <p class="text-gray-600 mt-5">
          Cloudhomes adalah platform pemesanan properti dari Senyaman Living yang memungkinkan Anda untuk menemukan, membandingkan, dan melakukan pemesanan hunian dengan cara yang lebih praktis.
        </p>

        <!--  List -->
        <div class="mt-5 space-y-2">
          <h2 class="text-2xl font-normal ">Fitur Utama Cloudhomes</h2>
          <div v-for="(feature, index) in features" :key="index" class="flex items-center p-3 bg-white border-2 border-gray-100 rounded-lg cursor-pointer transform hover:scale-105 transition-all duration-300">
            <div class="w-10 h-10 bg-gray-200 "></div>
            <p class="ml-4 text-gray-500 font-normal">
              <span class="text-[#00B1D6] font-normal">{{ feature.title }}</span> {{ feature.description }}
            </p>
          </div>
        </div>

        <!-- Button -->
        <button class="mt-6 px-6 py-3 bg-[#00B1D6] text-white border-2 border-[#00B1D6] font-normal rounded-full shadow-md hover:bg-white hover:text-[#00B1D6] transition-all duration-300 flex items-center">
          Lihat Cloudhomes sekarang <span class="ml-2 fas fa-arrow-right"></span>
        </button>
      </div>
    </div>
  </section>


<!-- KENAPA MEMILIH KAMI --> 
    <div class="relative w-full max-w-7xl bg-white p-10 flex items-center">
      <!-- Fitur List -->
      <div class="relative space-y-5 w-1/2 ">
        <div 
          v-for="(feature, index) in rentalFeatures" 
          :key="feature.title"
          class="flex items-center space-x-4 relative">
          <!-- Garis konektor -->
          <div v-if="index !== 0" class="absolute w-20 h-0.5 bg-[#00B1D6] right-[-80px] top-1/2"></div>
          
          <div 
            class="px-4 py-3 rounded-lg shadow-md w-full text-gray-600 flex items-center"
            :class="feature.isBlue ? 'bg-[#00B1D6] text-white' : 'bg-white border border-gray-300'">
            <h3 class="font-normal text-lg" :class="feature.isBlue ? 'text-white' : 'text-[#00B1D6]'">
              {{ feature.title }}
            </h3>
            <p class="text-sm ml-2">{{ feature.description }}</p>
          </div>
        </div>
      </div>
      
    <!-- Kotak biru panjang -->
  <div class="bg-[#00B1D6] text-white px-5 py-10 w-full max-w-[550px] absolute right-0 flex justify-end items-center ml-auto">
    <h2 class="text-3xl font-normal">Kenapa memilih kami?</h2>

    <!-- Kotak hitam di atas kotak biru -->
   <div class="absolute left-0 transform translate-x-9 border-2 border-gray-400 -translate-x-1/5 w-20 h-20 bg-[#3C2C28] z-40"></div>

    <!-- Kotak abu-abu di sekeliling kotak hitam -->
   <div class="absolute left-10 transform -translate-x-12 grid grid-cols-2 grid-rows-2 gap-3 z-10">
    <div class="w-20 h-20 bg-gray-300"></div>
    <div class="w-20 h-20 bg-gray-300"></div>
    <div class="w-20 h-20 bg-gray-300"></div>
    <div class="w-20 h-20 bg-gray-300"></div>
  </div>
  </div>
  </div>


   
<!-- CARA KERJA-->
<section id="carakerja" class="py-20 flex flex-col items-center text-center bg-white">
    <h1 class="text-3xl font-semibold text-gray-800">Cara Kerja</h1>
    <p class="text-gray-600 text-sm mt-5 max-w-lg ">
      Cari, booking dan check-in tanpa ribet! Semua hunian siap untuk kamu tempati dengan nyaman.
    </p>

    <!-- Container Grid -->
    <div class="mt-12 flex flex-col items-center w-full max-w-5xl">
      <div class="grid grid-cols-4 items-center gap-6 w-full">
        <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center">
          
          <!-- Icon Box -->
          <div class="w-16 h-16 bg-gray-300 "></div> 

          <!-- Garis Penghubung -->
         
          <!-- Step Number -->
          <span class="text-gray-400 mt-6">Step {{ index + 1 }}</span>
        </div>
      </div>

      <!-- Deskripsi -->
      <div class="grid grid-cols-4 gap-6 mt-6 text-gray-700">
        <div v-for="step in steps" :key="step.title" class="text-center  ">
          <h3 class=" font-normal text-gray-800">{{ step.title }}</h3>
          <p class="text-sm mt-2">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>

<!-- REKOMENDASI -->
<section class="py-10 w-auto h-full bg-white overflow-hidden">
  <div class="max-w-screen-xl mx-auto px-6 relative">
    <!-- Judul -->
    <div class="flex items-center relative">
      <div class="relative -left-10 top-30 h-30 w-1/2 bg-[#00B1D6] text-white text-3xl font-normal px-14 py-10 flex items-center z-10">
        <span>Rekomendasi Properti</span>
        <button 
          @click="prevSlide"
          class="relative -right-10 top-1/3 transform -translate-y-1/5 bg-white text-[#00B1D6] text-sm rounded-lg p-2 "
        >
          <i class="fas fa-chevron-left"></i>
        </button>
      </div>

      <!-- Carousel -->
     <div class="relative mt-3 w-full h-full flex justify-end items-center ">
     <div ref="carousel" class="flex gap-2 rounded-lg border-gray-200 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide z-20 w-2/3 ml-auto">
     <div v-for="(property, index) in properties" :key="index" class="flex-none border-2 w-80 bg-white shadow-lg rounded-lg overflow-hidden snap-start">
       <img :src="property.image" class="w-full h-30 object-cover" alt="Properti">
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
  </div>
</section>




<!-- PROMOOO -->
<section id="promo" class="w-full h-auto mt-20 flex flex-col items-center justify-center text-center bg-[#E3F6FC]">
  <div class="grid grid-cols-2 w-full h-full">
    <!-- Bagian Kiri: Grid Gambar -->
    <div class="w-auto h-auto">
      <img :src="promoImage" alt="Promo" class="w-auto h-auto object-cover shadow-lg" />
    </div>

    <!-- Bagian Kanan: Promo & Countdown -->
    <div class="flex flex-col items-center justify-center text-center px-6">
      <h2 class="text-3xl font-normal">Promo & Penawaran Spesial</h2>
      <p class="text-gray-600 text-sm mt-3">Jangan lewatkan promo spesial untuk pengalaman sewa yang lebih hemat dan nyaman!</p>

      <!-- Countdown Timer -->
      <div class="flex space-x-3 text-[#007399] text-4xl font-normal my-6">
        <div v-for="(unit, key) in countdown" :key="key" class="flex flex-col items-center">
          <span>{{ unit.value }}</span>
          <span class="text-sm font-normal text-[#007399] uppercase">{{ unit.label }}</span>
        </div>
      </div>
      <div class="relative w-full ">
          <h3 class="absolute -top-4 left-5 right-1 text-xl font-normal opacity-30 text-gray-400">
            DISKON 15% UNTUK PENGGUNA BARU
          </h3>
          <h3 class="relative text-lg font-normal text-black">DISKON 15% UNTUK PENGGUNA BARU</h3>
        </div>

      <!-- Diskon --> 
        
        <div class="mt-5 flex items-center justify-between bg-white px-5 py-4 rounded-md">
          <span class="font-normal text-xl text-[#007399]">
            <span class="text-gray-600 font-normal text-sm">USE CODE : </span> LIVING15 
          </span>
          <button @click="copyCode" class="text-gray-500 hover:text-gray-700">
            <i class="fas fa-copy"></i>
          </button>
        </div>
    </div>
  </div>
</section>

<!-- REVIEWW -->
<div class="py-20 px-6 md:px-16 bg-white">
    <!-- Judul Section -->
    <div class="text-left mb-10">
      <h2 class="text-4xl font-normal">
        Apa <span class="text-[#00B1D6]">kata</span> mereka <span class="text-[#00B1D6]">tentang</span> kami?
      </h2>
      <p class="text-gray-800 font-normal text-sm mt-2">Yuk, dengar pengalaman seru dari pengguna setia kami!</p>
    </div>

    <div class="flex mb-6 mt-4">
        <button @click="prevSlide" class="w-10 h-10 mr-2 flex items-center justify-center text-gray-400 border border-gray-300 rounded-md hover-text-[#00B1D6] hover:border-[#00B1D6]">
          <i class="fas fa-arrow-left "></i>
        </button>
        <button @click="nextSlide" class="w-10 h-10 flex items-center justify-center text-gray-400 border border-gray-300 rounded-md hover-text-[#00B1D6] hover:border-[#00B1D6]">
          <i class="fas fa-arrow-right"></i>
        </button>
      </div>
<!-- carousel -->
<div class="relative">
      <div ref="carousel" class="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
        <div v-for="(review, index) in reviews" :key="index" 
             class="flex-none w-72 bg-white shadow-lg rounded-lg p-6 snap-start border border-gray-100">
          <div class="flex items-center mb-2">
            <i class="fas fa-comment-alt text-2xl text-gray-500"></i>
            <span class="ml-auto text-sm text-gray-500 font-semibold">
              <i class="fas fa-star text-yellow-300"></i> 5/5
            </span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">{{ review.text }}</p>
          <div class="flex items-center mt-4">
            <img :src="review.image" class="w-8 h-8 rounded-full object-cover" alt="User">
            <span class="ml-3 text-sm font-semibold text-gray-700">{{ review.name }}</span>
          </div>
        </div>
      </div>
   

    </div>
  </div>

<!-- REVIEW 2 -->
 

<!-- KATALOG -->
 <section class="relative">
  <div class="w-full mt-10">
    <img src="@/assets/katalogHunian.png" alt="Katalog" class="w-full h-full object-cover" />
  </div>

  <div class="relative w-full">
  <!-- Gambar Latar -->
  <img src="@/assets/PAGE.png" alt="Katalog" class="w-full h-full object-cover" />

  <!-- Gradient Background -->
  <div class="absolute inset-0 bottom-0 left-0 w-full h-full bg-gradient-to-r from-[#00B1D6] to-[#006176] opacity-80"></div>

  <!-- Konten di Atas Gradient -->
  <div class="absolute bottom-0 left-0 w-full py-10 text-center text-white z-10">
    <h2 class="text-3xl font-normal">Sudah Siap Menemukan Hunian Nyaman?</h2>
    <div class="mt-6 flex justify-center space-x-4">
      <button class="relative z-20 bg-[#00B1D6] border-2 border-[#00B1D6] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-white hover:text-[#00B1D6]">
        Cari Hunian Sekarang
      </button>
      <button class="relative z-20 bg-[#00B1D6] border-2 border-[#00B1D6] text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-white hover:text-[#00B1D6]">
        Hubungi Kami
      </button>
    </div>
  </div>

  <!-- REVIEW 2 -->
   

  </div>
 </section>

 <footer class="bg-gray-100 py-10 px-5">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 ">
        <!-- Brand Section -->
        <div>
          <img src="@/assets/logo.png" alt="Senyaman Logo" class="h-12 mb-3" />
          <h3 class="text-xl font-regular text-black">Senyaman Group</h3>
          <p class="text-sm">PT. Sinar Matahari Semesta, A member of PSG Group</p>
          <div class="flex space-x-3 mt-4">
            <i class="fas fa-globe text-2xl"></i>
            <i class="fa-brands fa-instagram text-2xl"></i>
            <i class="fa-brands fa-facebook text-2xl"></i>
            <i class="fa-brands fa-tiktok text-2xl"></i>
            <i class="fa-brands fa-x-twitter text-2xl"></i>
            <i class="fa-brands fa-threads text-2xl"></i>
            <i class="fa-brands fa-youtube text-2xl"></i>
          </div>
        </div>
  
        <!-- Quick Links -->
        <div>
          <h4 class="text-xl font-reguler mb-3 text-[#7E7E7E] ml-5">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="hover:text-blue-500 ml-6 ">Home</router-link></li>
            <li><router-link to="/layananPage" class="hover:text-blue-500 ml-6">Layanan</router-link></li>
            <li><router-link to="/tentangKami" class="hover:text-blue-500 ml-6">Tentang Kami</router-link></li>
            <li><router-link to="/hubungiKami" class="hover:text-blue-500 ml-6">Hubungi Kami</router-link></li>
          </ul>
        </div>
  
        <!-- Layanan Kami -->
        <div>
          <h4 class="text-xl font-regular mb-3 text-[#7E7E7E]">Layanan Kami</h4>
          <ul class="space-y-2">
            <li>Senyaman Living</li>
            <li>Senyaman House</li>
            <li>Senyaman Ride</li>
            <li>Senyaman Reward</li>
          </ul>
        </div>
  
        <div>
          <h4 class="text-xl font-regular mb-3 text-[#7E7E7E]">Contact Us</h4>
          <p>📞 (+62) 838 3688 2255</p>
          <p>✉️ halo@ptsms.co</p></div>

        <!-- Contact & Download -->

          <div >
            <h4 class="text-xl font-regular text-[#7E7E7E] mb-4 ">Download</h4>
            <img src="@/assets/appstore.png" alt="App Store" class="h-10 mb-2" />
            <img src="@/assets/playstore.png" alt="Google Play" class="h-10" />
          </div>

        </div>
    
  
      <div class="border-t mt-8 pt-4 text-center text-sm text-gray-600">
        © Copyright 2025 Senyaman. All Rights Reserved
      </div>
    </footer>


  </div>
</template>


<script>
export default {
  data() {
    return {
      promoImage: require('@/assets/promo.png'),
      menuOpen: false,
      hoverIndex: null,
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
      currentPage: 1,
      rentalFeatures: [
        { title: 'Booking Mudah & Cepat', description: 'Pemesanan 100% online via Cloudhomes', isBlue: false },
        { title: 'Lokasi Strategis', description: 'Banyak pilihan di pusat kota', isBlue: true },
        { title: 'Fitur Smart Doorlock', description: 'Check-in mudah tanpa kunci manual', isBlue: false },
        { title: 'Harga Transparan', description: 'Tanpa biaya tersembunyi', isBlue: true },
        { title: 'Banyak Pilihan Hunian', description: 'Dari kost hingga apartment mewah', isBlue: false }
      ],
      steps: [
        { title: "Cari Hunian", description: "Jelajahi berbagai pilihan hunian dengan lokasi strategis, fasilitas lengkap dan harga sesuai budgetmu!" },
        { title: "Booking Online", description: "Pesan hunian dengan mudah, bayar langsung dengan berbagai metode yang pastinya aman!" },
        { title: "Check-in Cepat", description: "Akses hunian dengan mudah menggunakan Smart Doorlock, tanpa kunci fisik, cukup dengan kode akses. Praktis & aman!" },
        { title: "Nikmati Hunian", description: "Rasakan kenyamanan menginap dengan fasilitas terbaik, semua sudah tersedia untukmu!" }
      ],
      promoCode: "LIVING15",
      countdown: {
        days: { value: "07", label: "days" },
        hours: { value: "12", label: "hours" },
        minutes: { value: "25", label: "min" },
        seconds: { value: "07", label: "sec" }
      },
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
      reviews: [
        { name: "Melba Smith", image: require('@/assets/profile.png'), text: "Pakai Senyaman Living beneran bikin hemat waktu! Proses booking cepat dan Smart Doorlocknya keren banget, ga perlu repot cari kunci!" },
        { name: "Jonathan Berge", image: require('@/assets/profile.png'), text: "Websitenya simpel dan lengkap! Bisa cari hunian sesuai kebutuhan, harga transparan, dan prosesnya super mudah." },
        { name: "Maurice Windler", image: require('@/assets/profile.png'), text: "Pernah coba booking buat sebulan, semuanya smooth dari awal sampai akhir. Supportnya juga fast response banget!" },
        { name: "Delia Ebert", image: require('@/assets/profile.png'), text: "Suka sama pilihan huniannya! Banyak opsi dengan fasilitas lengkap, dan harganya juga masuk akal. Pasti pakai lagi!" },
        { name: "Russel Weinman", image: require('@/assets/profile.png'), text: "Sistemnya canggih, ga perlu ketemu pemilik atau tukar kunci. Smart Doorlock-nya beneran bikin check-in jadi mudah banget!" }
      ],
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
      this.menuOpen = false;
    },
    copyCode() {
      navigator.clipboard.writeText(this.promoCode);
      alert("Kode promo disalin!");
    },
    nextSlide() {
      if (this.$refs.carousel) {
        this.$refs.carousel.scrollBy({ left: 300, behavior: "smooth" });
      }
    },
    prevSlide() {
      if (this.$refs.carousel) {
        this.$refs.carousel.scrollBy({ left: -300, behavior: "smooth" });
      }
    }
  }
};
</script>

<style>
/* scroll smooth  */
html {
  scroll-behavior: smooth;
}

/* Hilangkan scrollbar horizontal */
#home::-webkit-scrollbar {
  display: none;
}
/*  */

/* Tambahkan dukungan untuk browser lain */
#home {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}
</style>