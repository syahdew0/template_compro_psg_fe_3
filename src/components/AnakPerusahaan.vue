<template>
  <section class="py-8 px-4 lg:px-6">
    <div class="text-start mb-10">
      <p class="text-blue-700 text-sm font-semibold mb-1">{{ badge }}</p>
      <h2 class="text-2xl md:text-3xl font-bold text-gray-800">{{ title }}</h2>
      <p class="text-gray-600 mt-2">{{ content }}</p>
    </div>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- List Perusahaan -->
      <div class="w-full lg:w-1/2 bg-white  divide-y">
        <div
          v-for="(perusahaan, index) in perusahaanList"
          :key="index"
          @click="selectedIndex = index"
          :class="['cursor-pointer p-4 flex justify-between items-center', selectedIndex === index ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50']"
        >
          <div class="flex gap-4 items-center">
            <img :src="getImage(perusahaan.image)" class="w-10 h-10" />
            <div>
              <h3 class="font-semibold text-gray-800">{{ perusahaan.title }}</h3>
              <p class="text-sm text-gray-600">{{ perusahaan.content }}</p>
            </div>
          </div>
          <span>›</span>
        </div>
      </div>

      <!-- Produk -->
      <div class="w-full lg:w-1/2 bg-white rounded-lg shadow p-6">
        <h3 class="text-lg font-semibold mb-4">
          Produk {{ perusahaanList[selectedIndex]?.title }}
        </h3>

        <div v-if="produkList.length" class="grid grid-cols-1 gap-4">
          <div
            v-for="(produk, index) in produkList"
            :key="index"
            class="flex items-center gap-4"
          >
            <img :src="getImage(produk.image)" class="w-12 h-12 object-contain" />
            <div class="flex justify-between items-center w-full">
              <p class="font-semibold">{{ produk.title }}</p>
              <a
                :href="produk.link"
                class="text-blue-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M14 3h7v7m0-7L10 14m-4 0h-.01M6 18h.01M6 6h.01" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <p v-else class="text-sm text-gray-500">Belum ada produk.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { API_ENDPOINTS } from '@/config/api'

const badge = ref('')
const title = ref('')
const content = ref('')
const perusahaanList = ref([])
const produkList = ref([])
const selectedIndex = ref(0)

function getImage(src) {
  if (!src) return '/no-image.jpg'
  return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
}

function parse(data) {
  if (!data) return []

  let raw = typeof data === 'string' ? JSON.parse(data) : data

  if (Array.isArray(raw)) {
    return raw.map(item => {
      if (typeof item === 'string') {
        try {
          return JSON.parse(item)
        } catch {
          return null
        }
      }
      return item
    }).filter(Boolean)
  }

  return Array.isArray(raw) ? raw : [raw]
}


async function fetchData() {
  try {
    const raw = localStorage.getItem('customPageData:Home')
    if (!raw) return console.warn('Data customPage:Home tidak ditemukan di localStorage')

    const data = JSON.parse(raw)

    badge.value = parse(data.anak_perusahaan_badge)?.badge || 'Anak Perusahaan Kami'

    const titleData = typeof data.anak_perusahaan_title === 'string'
      ? JSON.parse(data.anak_perusahaan_title)
      : data.anak_perusahaan_title || {}

    title.value = titleData.title || ''
    content.value = titleData.content || ''

    perusahaanList.value = parse(data.anak_perusahaan)

    updateProdukList(data)
  } catch (error) {
    console.error('Gagal memuat data anak perusahaan:', error)
  }
}

function updateProdukList(dataCache = null) {
  const raw = dataCache || JSON.parse(localStorage.getItem('customPageData:Home'))
  const tagName = `anak_perusahaan_product_${selectedIndex.value + 1}`
  produkList.value = parse(raw[tagName]) || []
}

watch(selectedIndex, () => {
  const raw = localStorage.getItem('customPageData:Home')
  if (raw) {
    const data = JSON.parse(raw)
    updateProdukList(data)
  }
})


onMounted(fetchData)
</script>
