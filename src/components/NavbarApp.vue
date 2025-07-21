<template>
  <nav class="absolute top-0 left-0 right-0 w-full p-4 z-50">
    <div class="flex items-center justify-between px-4 md:px-10 py-3 md:py-10 lg:py-1 lg:px-16">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img :src="logoUrl" alt="Logo" class="w-14 h-14" v-if="logoUrl">
        <div class="text-black">
          <p class="font-semibold text-lg block">{{ title }}</p>
          <p class="font-regular text-sm text-[#00B1D6] ">{{ siteDescription }}</p>
        </div>
      </div>

      <!-- Navigasi Desktop -->
      <div class="hidden lg:flex space-x-6">
        <button @click="navigateOrScroll('PageManagement')" class="text-[#1E1E1E] hover:text-[#00B1D6] text-lg">Beranda</button>
        <button @click="navigateOrScroll('AnakPerusahaan')" class="text-[#1E1E1E] hover:text-[#00B1D6] text-lg">Group</button>
        <router-link to="/careers" class="text-[#1E1E1E] hover:text-[#00B1D6] text-lg">Careers</router-link>
        <router-link to="/post" class="text-[#1E1E1E] hover:text-[#00B1D6] text-lg">News</router-link>
        <button @click="navigateOrScroll('contactpage')" class="text-[#1E1E1E] hover:text-[#00B1D6] text-lg">Hubungi Kami</button>
      </div>

      <!-- Tombol Menu Mobile -->
      <button class="lg:hidden text-3xl text-gray-200 focus:outline-none ml-auto" @click="menuOpen = true">
        <i class="fas fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      class="fixed top-0 right-0 h-screen w-64 bg-gray-900 bg-opacity-95 backdrop-blur-lg shadow-lg transform transition-transform duration-300"
      :class="menuOpen ? 'translate-x-0' : 'translate-x-full'">
      <button class="absolute top-4 right-4 text-3xl text-white" @click="menuOpen = false">
        <i class="fas fa-times"></i>
      </button>

      <div class="flex flex-col items-end mt-16 space-y-6 pr-6 z-50">
        <button @click="handleMobileClick('PageManagement')" class="text-white text-lg hover:text-[#00B1D6]">Beranda</button>
        <button @click="handleMobileClick('AnakPerusahaan')" class="text-white text-lg hover:text-[#00B1D6]">Group</button>
        <router-link to="/careers" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">Careers</router-link>
        <router-link to="/post" class="text-white text-lg hover:text-[#00B1D6]" @click="menuOpen = false">News</router-link>
        <button @click="handleMobileClick('contactpage')" class="text-white text-lg hover:text-[#00B1D6]">Hubungi Kami</button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

const menuOpen = ref(false)
const logoUrl = ref('')
const title = ref('')
const siteDescription = ref('')
const websiteId = 1

const router = useRouter()
const route = useRoute()

// Scroll ke elemen dengan ID
const scrollToElement = (id) => {
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  })
}

const navigateOrScroll = (id) => {
  if (route.path !== '/') {
    // Simpan ke localStorage agar halaman Home bisa ambil dan scroll setelah render
    localStorage.setItem('scrollTarget', id)
    router.push('/')
  } else {
    scrollToElement(id)
  }
}


// Klik di menu mobile
const handleMobileClick = (id) => {
  menuOpen.value = false
  navigateOrScroll(id)
}

// Ambil data logo & deskripsi
onMounted(async () => {
  try {
    const res = await axios.get(API_ENDPOINTS.settingLogo)
    if (res.data?.value) logoUrl.value = res.data.value
  } catch (err) {
    console.error('Gagal mengambil logo:', err)
  }

  try {
    const res = await axios.get(API_ENDPOINTS.siteSettings(websiteId))
    if (res.data.success) {
      const settings = res.data.settings
      title.value = settings?.title || 'Pasifik Sukses Gemilang'
      siteDescription.value = settings?.site_description || ''
    }
  } catch (err) {
    console.error('Gagal mengambil site setting:', err)
  }

  if (route.path === '/' && route.query.scrollTo) {
    scrollToElement(route.query.scrollTo)
  }
})
</script>
