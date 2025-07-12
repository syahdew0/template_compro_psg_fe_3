<template>
  <section class="relative w-full py-20 px-6 text-white text-center overflow-hidden">
    <!-- Background Image + Overlay -->
    <div
      class="absolute inset-0 bg-cover bg-center"
      :style="{ backgroundImage: `url(${getImage(image)})` }"
    ></div>
    <div class="absolute inset-0 bg-[#114791E0] opacity-80"></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center">
      <h2 class="text-2xl md:text-3xl font-semibold mb-6 max-w-full">
        {{ title }}
      </h2>
      <a
        :href="link"
        class="bg-white text-blue-800 font-medium px-6 py-3 rounded shadow-md hover:bg-blue-50 transition"
      >
        {{ content }}
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { API_ENDPOINTS } from '@/config/api'

const title = ref('')
const content = ref('')
const image = ref('')
const link = ref('')

function getImage(src) {
  if (!src) return '/no-image.jpg'
  return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
}

function parse(data) {
  if (!data) return {}
  return typeof data === 'string' ? JSON.parse(data) : data
}

onMounted(() => {
  const raw = localStorage.getItem('customPageData:Home')
  if (!raw) return console.warn('Data halaman Home tidak ditemukan')

  try {
    const data = JSON.parse(raw)
    const ctaData = parse(data.cta_section)
    if (ctaData) {
      title.value = ctaData.title || ''
      content.value = ctaData.content || 'Learn More'
      image.value = ctaData.image || ''
      link.value = ctaData.link || '#'
    }
  } catch (err) {
    console.error('Gagal parsing CTA section:', err)
  }
})
</script>