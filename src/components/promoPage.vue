<template>
  <section id="promo" class="w-full h-auto mt-10 flex flex-col items-center justify-center text-center bg-[#E3F6FC]">
    <div class="grid grid-cols-1 md:grid-cols-2 w-full h-full">
      <div class="w-full">
        <img :src="promoImage" alt="Promo" class="w-full h-auto object-cover shadow-lg" />
      </div>
      <div class="flex flex-col items-center justify-center text-center px-6 py-8">
        <h2 class="text-2xl md:text-3xl font-normal text-black">Promo & Penawaran Spesial</h2>
        <p class="text-gray-600 text-sm md:text-base mt-4">
          Jangan lewatkan promo spesial untuk pengalaman sewa yang lebih hemat dan nyaman!
        </p>
        <div class="flex items-center space-x-2 md:space-x-3 text-[#007399] text-3xl md:text-4xl font-normal my-6">
    <template v-for="(unit, key, index) in countdown" :key="key">
      <div class="flex flex-col items-center">
      <span>{{ unit.value }}</span>
      <span class="text-xs md:text-sm font-normal text-[#007399] uppercase">{{ unit.label }}</span>
    </div>
    
    <!-- Separator Logic -->
    <span v-if="index < Object.keys(countdown).length - 1"
      class="text-2xl md:text-lg font-normal text-[#007399]">
      {{ index === 0 ? '/' : ':' }}
      </span>
      </template>
    </div>

        <div class="relative w-full mt-6 flex justify-center">
          <h3 class="absolute -top-3 left-1/2 transform -translate-x-1/2 text-sm md:text-2xl font-normal opacity-30 text-gray-400 whitespace-nowrap">
            DISKON 15% UNTUK PENGGUNA BARU
          </h3>
          <h3 class="relative text-lg md:text-xl font-normal text-black">
            DISKON 15% UNTUK PENGGUNA BARU
          </h3>
        </div>
        <div class="mt-5 flex items-center justify-between bg-white px-4 py-3 md:px-5 md:py-4 rounded-md shadow-md w-auto">
          <span class="font-semibold text-lg md:text-xl text-[#007399]">
            <span class="text-gray-600 font-normal text-xs md:text-sm">USE CODE : </span> {{ promoCode }}
          </span>
          <button @click="copyCode" class="text-[#007399] hover:text-gray-700 flex items-center">
            <i class="fas fa-copy text-lg"></i>
          </button>
        </div>
      </div>
    </div>
 </section>

 <!-- Review section tinggal menentukan posisinya dari kanan ke kiri dan atas baawah si gridnya itu -->
  <!-- Review Section -->
  <div class="py-20 px-6 md:px-10 bg-white">
    <!-- Header Section -->
    <div class="text-left mb-6">
      <h2 class="text-4xl font-normal">
        Apa <span class="text-[#00B1D6]">kata</span> mereka <span class="text-[#00B1D6]">tentang</span> kami?
      </h2>
      <p class="text-gray-800 font-normal text-sm mt-2">Yuk, dengar pengalaman seru dari pengguna setia kami!</p>
    </div>

    <!-- Navigasi -->
    <div class="flex justify-center gap-4 mt-4 ">
      <button 
        @click="prevPage" 
        :disabled="currentPage === 1"
        class="w-10 h-10 flex items-center justify-center text-gray-400 border border-gray-300 rounded-md hover:text-[#00B1D6] hover:border-[#00B1D6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-40">
        <i class="fas fa-arrow-left text-lg"></i>
      </button>
      <button 
        @click="nextPage" 
        :disabled="currentPage === totalPages" 
        class="w-10 h-10 flex items-center justify-center text-gray-400 border border-gray-300 rounded-md hover:text-[#00B1D6] hover:border-[#00B1D6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed z-40">
        <i class="fas fa-arrow-right text-lg"></i>
      </button>
    </div>

    <!-- Grid Testimonial -->
    <div class="relative mt-6">
      <div 
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-start transition-transform duration-300 ease-in-out"
        :style="gridStyle"
      >
        <div v-for="(testimonial, index) in paginatedTestimonials" :key="index"
          class="bg-white shadow-lg rounded-lg p-6 border-2 border-gray-100 flex shadow-lg shadow-[#00B1D6]/30 flex-col justify-between"
          :class="gridClasses(index)">
          <div class="flex items-center mb-4">
            <i class="fas fa-quote-left text-[#00B1D6]"></i>
            <span class="ml-auto text-sm text-gray-500 font-semibold">
              <i class="fas fa-star text-yellow-300"></i> {{ testimonial.rating }}/5
            </span>
          </div>
          <p class="text-gray-600 text-sm leading-relaxed">{{ testimonial.text }}</p>
          <div class="w-full h-1 bg-gray-100 my-6"></div>
          <div class="flex items-center">
            <img :src="testimonial.profileImage" alt="profile" class="w-8 h-8 rounded-full object-cover">
            <span class="ml-3 text-sm font-semibold text-gray-700">{{ testimonial.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>

<!-- KATALOG -->
<section class="relative mt-24">
  <!-- Elemen di atas kiri katalog -->
  <div class="absolute -top-40 md:-top-60 left-0 z-40 w-40 md:w-60 h-auto">
    <img src="@/assets/elemen.png" alt="Elemen Dekoratif">
  </div>

  <div class="w-full relative">
    <!-- Gambar katalog -->
    <img src="@/assets/katalogHunian.png" alt="Katalog" class="w-full h-full object-cover" />
  </div>

  <div class="relative w-full">
    <img src="@/assets/PAGEE.png" alt="Katalog" class="w-full h-full object-cover" />
    <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00B1D6] to-[#006176] opacity-80"></div>

    <!-- Container untuk teks dan tombol -->
    <div class="absolute bottom-0 left-0 w-full py-6 md:py-10 text-center text-white z-10">
      <h2 class="text-lg md:text-2xl lg:text-3xl font-normal">Sudah Siap Menemukan Hunian Nyaman?</h2>
      <div class="mt-4 md:mt-6 flex justify-center space-x-2 md:space-x-4">
        <button class="relative z-20 bg-[#00B1D6] border-2 border-[#00B1D6] text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full font-medium shadow-md hover:bg-white hover:text-[#00B1D6]">
          Cari Hunian Sekarang
        </button>
        <button class="relative z-20 bg-[#00B1D6] border-2 border-[#00B1D6] text-white text-sm md:text-base px-4 py-2 md:px-6 md:py-3 rounded-full font-medium shadow-md hover:bg-white hover:text-[#00B1D6]">
          Hubungi Kami
        </button>
      </div>
    </div>
  </div>
</section>

</template>

<script>
export default {
  name: 'PromoPage',
  data() {
    return {
      windowWidth: window.innerWidth, // Menyimpan ukuran layar
      promoImage: require('@/assets/promo.png'),
      promoCode: "LIVING15",
      countdown: {
        days: { value: "07", label: "days" },
        hours: { value: "12", label: "hours" },
        minutes: { value: "25", label: "min" },
        seconds: { value: "07", label: "sec" }
      },
      currentPage: 1,
      itemsPerPage: 2,
      testimonialsPerPage: 4,
      isMobile: window.innerWidth < 768, // Menyimpan status mobile
      testimonials: [
        {
          profileImage: require('@/assets/profile1.png'),
          name: "Melba Smith",
          text: "Pakai Senyaman Living beneran bikin hemat waktu! Proses booking cepat dan Smart Doorloknya keren banget, ga perlu repot cari kunci!😆",
          rating: 5
        },
        {
          profileImage: require('@/assets/profile2.png'),
          name: "Jonathan Berge",
          text: "Websitenya simpel dan lengkap! Bisa cari hunian sesuai kebutuhan, harga transparan, dan prosesnya super mudah 👍",
          rating: 5
        },
        {
          profileImage: require('@/assets/profile3.png'),
          name: "Maurice Windler",
          text: "Dulu cari kost yang nyaman susah banget, sekarang tinggal buka Cloudhomes, pilih, dan selesai! Beneran praktis banget.",
          rating: 5
        },
        {
          profileImage: require('@/assets/profile4.png'),
          name: "Mindy Larson",
          text: "Suka banget sama sistem check-in nya! Begitu sampai, langsung masuk pakai kode Smart Doorlock. Gak ribet sama sekali!🤩",
          rating: 5
        },
        {
          profileImage: require('@/assets/profile5.png'),
          name: "Russel Weiman",
          text: "Sistem nya canggih, ga perlu ketemu pemilik atau tuker kunci. Smart Doorlock nya beneran bikin check-in jadi mudah banget!!😍",
          rating: 5
        },
        {
          profileImage: require('@/assets/profile6.png'),
          name: "Eunice Schumm",
          text: "Dulu cari kost yang nyaman susah banget, sekarang tinggal buka Cloudhomes, pilih, dan selesai! Beneran praktis banget.",
          rating: 5
        },
        {
          profileImage: require('@/assets/profile7.png'),
          name: "Delia Ebert",
          text: "Suka sama pilihan huniannya! Banyak opsi dengan fasilitas lengkap, dan harganya juga masuk akal. Pasti pakai lagi! 🙌🏻",
          rating: 5
        },
      ]
    };
  },
  computed: {
   
    totalPages() {
      return Math.ceil(this.testimonials.length / this.itemsPerPage);
    },
    paginatedTestimonials() {
      return this.isMobile
        ? this.testimonials.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage)
        : this.testimonials;
    },
    gridStyle() {
      return {
        transform: `translateX(-${(this.currentPage - 6) * 100}%)`
      };
    }
  },
  watch: {
    windowWidth(newWidth) {
      this.currentPage = 1;
      this.isMobile = newWidth < 768;
    }
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
      
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    copyCode() {
      navigator.clipboard.writeText(this.promoCode);
      alert("Kode promo disalin: " + this.promoCode);
    },
    gridClasses(index) {
    if (this.windowWidth >= 1024) {
      if (index % 1 === 0) {
        return "col-span-1 row-span-2 mt-2"; // Elemen pertama 
      } else {
        return "col-span-1 row-span-2"; // Elemen berikutnya 
      }
    } else if (this.windowWidth >= 768) {
      return index % 2 === 0 ? "col-span-1" : "col-span-1 mt-4";
    }
    return "col-span-1";
  }
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
      this.testimonialsPerPage = this.windowWidth < 768 ? 2 : 4;
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }
};
</script>
