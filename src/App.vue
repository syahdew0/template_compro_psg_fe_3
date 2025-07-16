<template>
  <div class="w-screen min-h-screen flex flex-col overflow-auto">
    <Navbar :settings="settings" />

    <div class="flex-1 overflow-y-auto w-screen">
      <router-view :settings="settings" />
    </div>

    <Footer :settings="settings" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import Navbar from './components/NavbarApp.vue'
import Footer from './components/FooterPage.vue'
import { API_ENDPOINTS } from '@/config/api'

const settings = ref(null)
const websiteId = 1

// Fungsi untuk ambil settings
const fetchSettings = async () => {
  try {
    const cached = localStorage.getItem('site_settings')
    if (cached) {
      settings.value = JSON.parse(cached)
    } else {
      const res = await axios.get(API_ENDPOINTS.siteSettings(websiteId))
      if (res.data.success) {
        settings.value = res.data.settings
        localStorage.setItem('site_settings', JSON.stringify(res.data.settings))
      }
    }
  } catch (err) {
    console.error('Gagal mengambil site settings:', err)
  }
}

// Saat mounted, ambil data settings
onMounted(async () => {
  await fetchSettings()
})

// Ubah title saat settings sudah ada
watch(settings, (val) => {
  if (val?.site_title) {
    document.title = val.site_title
  }
})
</script>