<template>
  <section class="py-16 px-4 sm:px-6 lg:px-20 bg-white">
    <div class="text-center mb-16 max-w-3xl mx-auto">
      <p class="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">{{ badge }}</p>
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{{ title }}</h2>
      <p class="text-gray-600 text-lg">{{ content }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="text-center group cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2"
      >
        <!-- Icon Container -->
        <div class="mb-6 flex justify-center">
          <div class="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-100">
            <svg class="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <!-- Icon akan berbeda untuk setiap item, ini contoh default -->
              <template v-if="index === 0">
                <!-- Pie chart icon -->
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
              </template>
              <template v-else-if="index === 1">
                <!-- Growth chart icon -->
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
              </template>
              <template v-else>
                <!-- Globe icon -->
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </template>
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div>
          <h3 class="text-xl font-bold text-gray-900 mb-3">{{ item.title }}</h3>
          <p class="text-gray-600 text-base mb-6 leading-relaxed">{{ item.content }}</p>
          
          <!-- CTA Link -->
          <a href="#" class="inline-flex items-center text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-300 group/link">
            Get started today
            <svg class="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
          <div class="h-0.5 w-16 bg-yellow-400 mt-2 mx-auto transition-all duration-300 group-hover:w-24"></div>
        </div>
      </div>

      <p v-if="items.length === 0" class="text-center text-gray-400 col-span-full">
        Belum ada data pilar ditambahkan.
      </p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const badge = ref('')
const title = ref('')
const content = ref('')
const items = ref([])

onMounted(() => {
  const raw = localStorage.getItem('customPageData:Home')
  if (!raw) return console.warn('Data customPage Home tidak ditemukan.')

  try {
    const data = JSON.parse(raw)

    // --- Ambil badge
    try {
      const parsedBadge = typeof data.pilar_badge === 'string'
        ? JSON.parse(data.pilar_badge)
        : data.pilar_badge
      badge.value = parsedBadge?.title || ''
    } catch (e) {
      console.warn('Gagal parse pilar_badge:', e.message)
    }

    // --- Ambil pilar utama
    try {
      const parsedPilar = typeof data.pilar === 'string'
        ? JSON.parse(data.pilar)
        : data.pilar
      title.value = parsedPilar?.title || ''
      content.value = parsedPilar?.content || ''
    } catch (e) {
      console.warn('Gagal parse pilar:', e.message)
    }

    // --- Ambil dan parsing pilar_items
    const parsedItems = []
    const pilarRaw = data.pilar_items

    if (Array.isArray(pilarRaw)) {
      for (const entry of pilarRaw) {
        try {
          const item = typeof entry === 'string' ? JSON.parse(entry) : entry
          if (item && typeof item === 'object') parsedItems.push(item)
        } catch (e) {
          console.warn('Gagal parse item pilar_items:', e.message)
        }
      }
    } else if (typeof pilarRaw === 'string') {
      try {
        const parsed = JSON.parse(pilarRaw)
        if (Array.isArray(parsed)) {
          parsedItems.push(...parsed)
        } else if (typeof parsed === 'object') {
          parsedItems.push(parsed)
        }
      } catch (e) {
        console.warn('Gagal parse string pilar_items:', e.message)
      }
    } else if (typeof pilarRaw === 'object' && pilarRaw !== null) {
      parsedItems.push(pilarRaw)
    }

    // --- Assign final
    items.value = parsedItems.map((item, i) => ({
      title: item?.title || `Item ${i + 1}`,
      content: item?.content || ''
    }))

  } catch (err) {
    console.error('Error parsing localStorage customPageData:', err)
  }
})
</script>