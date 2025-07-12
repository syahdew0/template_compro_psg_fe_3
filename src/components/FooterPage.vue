<template>
  <footer class="bg-white text-gray-800 pt-10 pb-6 px-6">
    <div class="max-w-full mx-auto grid md:grid-cols-2 gap-6">
      <!-- Kiri: Logo, title, content, sosial media -->
      <div class="flex items-start gap-4">
  <!-- Logo -->
  <img
    :src="getImage(footerBlocks.main.image)"
    alt="logo"
    class="h-12 w-auto mt-1"
    v-if="footerBlocks.main.image"
  />

  <!-- Konten di kanan logo -->
  <div class="flex flex-col">
    <h2 class="font-bold text-lg">{{ footerBlocks.main.title }}</h2>
    <p class="text-blue-700 text-sm">{{ footerBlocks.main.content }}</p>

    <!-- Sosial Media -->
    <div class="flex gap-4 mt-4" v-if="footerBlocks.sosmed.length">
      <a
        v-for="(item, index) in footerBlocks.sosmed"
        :key="index"
        :href="item.link"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:opacity-80"
      >
        <img :src="getImage(item.icon)" alt="sosmed-icon" class="w-6 h-6 object-contain" />
      </a>
    </div>

    <!-- Jam Operasional -->
    <p class="text-sm mt-4 text-gray-600" v-if="footerBlocks.hours.title">
      {{ footerBlocks.hours.title }}: {{ footerBlocks.hours.content }}
    </p>
  </div>

      </div>

      <!-- Kanan: Info Kontak -->
      <div class="space-y-3" v-if="footerBlocks.info.length">
        <div
          v-for="(item, index) in footerBlocks.info"
          :key="index"
          class="flex items-start gap-3"
        >
          <img
            :src="getImage(item.icon)"
            alt="icon"
            class="w-5 h-5 mt-1"
            v-if="item.icon"
          />
          <div>
            <a
              v-if="item.link"
              :href="item.link"
              class="hover:underline text-sm text-gray-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ item.content || item.link }}
            </a>
            <p v-else class="text-sm text-gray-700">
              {{ item.title || item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr class="my-6 border-2 border-blue-800" />

    <!-- Footer Bottom -->
    <p class="text-center text-sm text-gray-600">
      {{ footerBlocks.bottom.title || footerBlocks.main.title }}
    </p>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { API_ENDPOINTS } from '@/config/api'

const footerBlocks = ref({
  main: {},
  info: [],
  sosmed: [],
  bottom: {},
  hours: {}
})

function getImage(src) {
  if (!src) return '/no-image.jpg'
  return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
}

function parse(data) {
  if (!data) return []
  const raw = typeof data === 'string' ? JSON.parse(data) : data
  return Array.isArray(raw)
    ? raw.map(item => (typeof item === 'string' ? JSON.parse(item) : item))
    : [raw]
}

onMounted(() => {
  try {
    const raw = localStorage.getItem('customPageData:Home')
    if (!raw) return console.warn('customPageData:Home tidak ditemukan')

    const data = JSON.parse(raw)

    // Menggunakan tag baru yang kamu mau
    footerBlocks.value.main = parse(data.footer)[0] || {}
    footerBlocks.value.info = parse(data.footer_info)
    footerBlocks.value.sosmed = parse(data.footer_social)
    footerBlocks.value.bottom = parse(data.footer_bottom)[0] || {}
    footerBlocks.value.hours = parse(data.footer_info_hours)[0] || {}


  } catch (err) {
    console.error('Gagal parse footer data:', err)
  }
})
</script>
