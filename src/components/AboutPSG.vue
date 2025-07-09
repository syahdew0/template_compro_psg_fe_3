<template>
  <section class="py-16 px-4 sm:px-6 lg:px-20 bg-white relative ">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <!-- Text Content -->
      <div>
        <p
          class="text-sm font-semibold text-blue-700 mb-2"
          v-if="badge"
        >
          {{ badge }}
        </p>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{{ title }}</h2>
        <p class="mt-4 text-gray-600 leading-relaxed" v-html="content"></p>

        <!-- Visi Kami -->
        <div v-if="visionTitle || visionContent" class="mt-8 ">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ visionTitle }}</h3>
          <p class="text-gray-700 italic leading-relaxed" v-html="visionContent"></p>
        </div>
      </div>

      <!-- Image -->
      <div class="relative w-full h-[320px]">
        <img
          v-if="image"
          :src="image"
          alt="About Image"
          class="absolute top-0 left-0 w-4/5 rounded-[10px] z-10"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

// Refs
const badge = ref('')
const title = ref('')
const content = ref('')
const image = ref('')
const visionTitle = ref('')
const visionContent = ref('')

onMounted(async () => {
  try {
    // Ambil Badge (Home-badge_about)
    const badgeRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-badge_about`)
    const badgeItem = badgeRes.data?.[0]
    if (badgeItem) {
      const badgeItems = typeof badgeItem.items === 'string' ? JSON.parse(badgeItem.items) : badgeItem.items
      badge.value = badgeItems.title || ''
    }

    // Ambil About PSG (Home-about_PSG)
    const aboutRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-about_PSG`)
    const aboutItem = aboutRes.data?.[0]
    if (aboutItem) {
      const aboutItems = typeof aboutItem.items === 'string' ? JSON.parse(aboutItem.items) : aboutItem.items
      title.value = aboutItem.title || ''
      content.value = aboutItems.content || ''
      image.value = aboutItems.image || ''
    }

    // Ambil Visi Kami (Home-about_visi)
    const visiRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-about_visi`)
    const visiItem = visiRes.data?.[0]
    if (visiItem) {
      const visiItems = typeof visiItem.items === 'string' ? JSON.parse(visiItem.items) : visiItem.items
      visionTitle.value = visiItems.title || ''
      visionContent.value = visiItems.content || ''
    }

  } catch (err) {
    console.error('Gagal memuat data:', err)
  }
})
</script>
