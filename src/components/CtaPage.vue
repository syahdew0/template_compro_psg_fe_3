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
<router-link :to="link" class="bg-white text-blue-800 font-medium px-6 py-3 rounded shadow-md hover:bg-blue-50 transition">
  {{ content }}
</router-link>

    <!-- Tombol Back to Top -->
<button
    v-show="showButton"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 p-3 bg-[#114791E0] text-white rounded-full shadow-lg hover:bg-blue-700 transition z-50"
    aria-label="Back to Top"
  >
    <!-- SVG Icon -->
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
  </button>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { API_ENDPOINTS } from '@/config/api'

const title = ref('')
const content = ref('')
const image = ref('')
const link = ref('')

// Back to Top
const showButton = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Tampilkan tombol setelah scroll tertentu
const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

onMounted(() => {
  // Ambil data Home dari localStorage
  const raw = localStorage.getItem('customPageData:Home')
  if (!raw) return console.warn('Data halaman Home tidak ditemukan')

  try {
    const data = JSON.parse(raw)
    const ctaData = typeof data.cta_section === 'string' ? JSON.parse(data.cta_section) : data.cta_section
    if (ctaData) {
      title.value = ctaData.title || ''
      content.value = ctaData.content || 'Learn More'
      image.value = ctaData.image || ''
      link.value = ctaData.link || '#'
    }
  } catch (err) {
    console.error('Gagal parsing CTA section:', err)
  }

  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

function getImage(src) {
  if (!src) return '/no-image.jpg'
  return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
}
</script>
