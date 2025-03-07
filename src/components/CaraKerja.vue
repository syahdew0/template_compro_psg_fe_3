<template>
  <section id="carakerja" class=" w-full mx-auto flex flex-col items-center justify-center text-center pt-20 md:pt-24">
    <h1 class="text-3xl font-normal text-gray-800">Cara Kerja</h1>
    <p class="text-gray-600 text-sm mt-5 max-w-lg">
      Cari, booking, dan check-in tanpa ribet! Semua hunian siap untuk kamu tempati dengan nyaman.
    </p>

    <!-- Container Grid -->
    <div class="mt-12 flex flex-col md:ml-20 md:mr-20 items-center w-auto">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-24 w-full relative">
    <div v-for="(step, index) in steps" :key="index" class="flex flex-col items-center relative">
      
      <!-- Icon Box -->
      <div class="w-14 h-14 bg-gray-300 flex items-center justify-center text-white ">
        <i class="fas fa-check"></i>
      </div>

      <!-- Garis Penghubung untuk Desktop -->
      <div 
        v-if="index !== steps.length - 1"
        class="hidden md:block absolute top-7 -right-20 w-24 
        border-t-2 border-dashed border-[#00B1D6] before:absolute before:-left-4 before:-top-2 before:w-3 before:h-3 before:bg-white before:border-2 before:border-[#00B1D6] before:rounded-full 
        after:absolute after:-right-4 after:-top-2 after:w-3 after:h-3 after:bg-white after:border-2 after:border-[#00B1D6] after:rounded-full">
      </div>

      <!-- Garis Penghubung untuk Mobile -->
      <div 
        v-if="index !== steps.length - 1"
        class="md:hidden w-1 h-12 border-l-2 border-dashed border-[#00B1D6] absolute -bottom-20 left-1/2 transform -translate-x-1/2 
        before:absolute before:-top-5 before:-left-2 before:w-4 before:h-4 before:bg-white before:border-2 before:border-[#00B1D6] before:rounded-full 
        after:absolute after:-bottom-3 after:-left-2 after:w-4 after:h-4 after:bg-white after:border-2 after:border-[#00B1D6] after:rounded-full">
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
  <section class="py-10 w-full max-w-30xl mx-auto items-center bg-white">
    <div class="relative bg-white">
  <!-- Judul -->
  <div class="flex flex-col items-center md:items-start justify-center relative">
    <div 
      class="relative md:relative w-full md:w-1/3 md:-bottom-48 bg-[#00B1D6] text-white text-2xl md:text-3xl font-normal px-8 py-10 flex justify-between items-center mt-6 md:mt-0"
    >
      <span>Rekomendasi Properti</span>
      <div class="flex space-x-2">
        <button @click="prevSlide" class="bg-white text-[#00B1D6] text-sm rounded-lg p-2 z-20">
          <i class="fas fa-chevron-left"></i>
        </button>
      </div>
    </div>

    <!-- Elemen Dekoratif -->
    <div class="absolute -bottom-48 w-40 h-40 left-0 md:-bottom-28 md:left-0  md:w-40 md:h-40">
      <img src="@/assets/elemen.png" alt="">
    </div>
    <div class="absolute -bottom-40 left-0 md:-bottom-80 md:left-0 w-full md:w-40 md:h-40">
      <img src="@/assets/elemen1.png" alt="">
    </div>
  </div>

    <!-- Carousel -->
    <div class="relative mt-12 md:-mt-6 w-full flex justify-center md:justify-end items-center">
      <div ref="carousel" class="flex gap-3 rounded-lg overflow-x-auto scroll-smooth snap-x-none snap-mandatory scrollbar-hide w-full md:w-2/3 ml-auto pr-4">
        <div v-for="(property, index) in properties" :key="index" 
          class="flex-none border-2 w-90 bg-white shadow-lg rounded-lg relative snap-start">
          <img :src="property.image" class="w-auto h-auto object-cover" alt="Properti">
          <div class="p-4">
            <p class="text-gray-400 text-sm">[{{ property.name }}]</p>
            <h3 class="font-normal text-sm">{{ property.type }}</h3>
            <p class="text-gray-400">{{ property.city }}</p>
            <div class="flex items-center text-[#DAB66D] mt-2">
              <i class="fas fa-star"></i>
              <span class="ml-1">{{ property.rating }} ({{ property.reviews }} reviews)</span>
            </div>
            <div class="w-full h-1 bg-gray-100 my-6"></div>
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
      if (this.$refs.carousel) {
        this.$refs.carousel.scrollBy({ left: -300, behavior: "smooth" });
      }
    },
    nextSlide() {
      if (this.$refs.carousel) {
        this.$refs.carousel.scrollBy({ left: 300, behavior: "smooth" });
      }
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
