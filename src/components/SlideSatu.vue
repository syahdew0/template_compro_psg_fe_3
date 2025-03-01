<template>
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
</template>

<script>
import page1Background from '@/assets/page1.png';

export default {
  name: "SlideBeranda1",
  data() {
    return {
      page1Background,
    };
  },
};
</script>
