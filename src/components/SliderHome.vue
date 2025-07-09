<template>
  <section class="relative bg-white">
    <!-- Hero Text -->
    <div class="text-center py-16 mt-20 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <h2 class="text-3xl md:text-3xl max-w-3xl mx-auto font-reguler text-gray-800 text-center leading-tight">
      {{ title }}<br />
    </h2>
      <p class="mt-4 text-sm text-gray-600" v-html="content"></p>

      <!-- CTA Buttons -->
      <div class="mt-6 flex justify-center gap-4 z-50">
        <a
          v-if="hero.link"
          :href="hero.link"
          class="px-6 py-3 bg-blue-700 text-white font-semibold rounded hover:bg-blue-800 transition"
        >
          {{ hero.primary_button.text || 'Hubungi Kami' }}
        </a>
        <a
          v-if="hero.secondary_button.link"
          :href="hero.secondary_button.link"
          class="px-6 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded hover:bg-blue-50 transition"
        >
          {{ hero.secondary_button.text || 'Pelajari lebih lanjut' }}
        </a>
      </div>
    </div>

    <!-- Company Images -->
    <div v-if="hero.images.length" class="flex justify-center items-center gap-6 px-4 md:px-8 z-50">
      <img
        v-for="(img, index) in hero.images"
        :key="index"
        :src="img"
        class="max-w-full rounded shadow z-50"
        :alt="'Company preview ' + (index + 1)"
      />
    </div>

    <!-- Stats Section -->
    <div v-if="hero.stats.length" class="relative z-50 mt-10">
      <div
        class="absolute inset-0 bg-cover bg-center"
        :style="`background-image: url(${hero.stats_bg});`"
      ></div>
      <div class="absolute inset-0 bg-[#114791] opacity-80"></div>

      <div class="relative grid grid-cols-2 md:grid-cols-4 text-center text-white z-10">
        <div
          v-for="(stat, index) in hero.stats"
          :key="index"
          class="py-6 border-t border-white/20"
        >
          <div class="text-3xl font-bold">{{ stat.value }}</div>
          <div class="mt-1 text-sm md:text-base">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Background Blur -->
    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1/2 h-full bg-[#60C7ED] rounded-full blur-3xl opacity-60 z-0"
    ></div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

const hero = ref({
  title: '',
  content: '',
  icon: '',
  link: '',
  images: [],
  stats_bg: '',
  stats: [],
  primary_button: {
    text: '',
    link: ''
  },
  secondary_button: {
    text: '',
    link: ''
  }
})

onMounted(async () => {
  try {
    const tag = 'Home-slider_home'
    const res = await axios.get(`${API_ENDPOINTS.customPages}?tag=${tag}`)
    const item = res.data?.[0]

    if (!item) {
      console.warn('Tidak ada konten untuk Home-slider_home')
      return
    }

    const data = typeof item.items === 'string' ? JSON.parse(item.items) : item.items

    // Simpan data ke hero
    hero.value = {
      title: data.title || '',
      content: data.content || '',
      icon: data.icon || '',
      link: data.link || '',
      images: data.images || (data.image ? [data.image] : []),
      stats_bg: data.stats_bg || '',
      stats: data.stats || [],
      primary_button: data.primary_button || { text: '', link: '' },
      secondary_button: data.secondary_button || { text: '', link: '' }
    }
  } catch (err) {
    console.error('Gagal ambil konten:', err)
  }
})

const title = computed(() => hero.value.title)
const content = computed(() => hero.value.content)
</script>
