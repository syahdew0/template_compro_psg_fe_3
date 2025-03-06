<template>
  <div class="relative w-screen h-screen overflow-hidden">
    <!-- Wrapper untuk Slide -->
    <div 
      id="HorizontalSlides" 
      class="flex w-screen h-screen flex-nowrap transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${(currentSlide - 1) * 100}vw)` }"
      @wheel="handleScroll"
    >
      <SlideBeranda1 class="slide w-screen h-screen flex justify-center items-center" />
      <SlideBeranda2 class="slide w-screen h-screen flex justify-center items-center" />
      <SlideBeranda3 class="slide w-screen h-screen flex justify-center items-center" />
    </div>

    <!-- Navigasi Angka -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6 z-20">
      <button 
        v-for="num in [1, 2, 3]" 
        :key="num"
        @click="goToSlide(num)"
        class="relative flex flex-col items-center justify-center "
        :class="currentSlide === num ? 'h-14 transform -translate-y-2' : 'h-8'"
      >
        <!-- Angka -->
        <span 
          class="w-10 h-10 flex items-center justify-center text-white font-semibold "
          :class="currentSlide === num ? 'text-xl scale-125' : 'text-lg scale-100'"
        >
          {{ num }}
        </span>
        
        <!-- Dua Garis di Bawah Jika Aktif -->
        <div v-if="currentSlide === num" class="flex flex-col items-center mt-1 ">
          <div class="w-6 h-1 bg-white"></div>
          <div class="w-6 h-1 bg-white mt-1"></div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import SlideBeranda1 from "@/components/SlideSatu.vue";
import SlideBeranda2 from "@/components/SlideDua.vue";
import SlideBeranda3 from "@/components/SlideTiga.vue";

const currentSlide = ref(1);

const goToSlide = (num) => {
  currentSlide.value = num;
};

// Fungsi untuk mendeteksi scroll horizontal
const handleScroll = (event) => {
  if (event.deltaY > 0) {
    // Scroll ke kanan
    if (currentSlide.value < 3) {
      currentSlide.value += 1;
    }
  } else if (event.deltaY < 0) {
    // Scroll ke kiri
    if (currentSlide.value > 1) {
      currentSlide.value -= 1;
    }
  }
};

// Deteksi perubahan slide berdasarkan posisi scroll
const updateSlideOnScroll = () => {
  const slides = document.querySelectorAll(".slide");
  let visibleSlide = 1;

  slides.forEach((slide, index) => {
    const rect = slide.getBoundingClientRect();
    if (rect.left >= 0 && rect.left < window.innerWidth / 2) {
      visibleSlide = index + 1;
    }
  });

  currentSlide.value = visibleSlide;
};

onMounted(() => {
  window.addEventListener("scroll", updateSlideOnScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updateSlideOnScroll);
});
</script>
