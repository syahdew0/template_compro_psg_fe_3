<template>
  <section class="py-16 px-4 sm:px-6 lg:px-20 bg-[#e6f6fb]">
    <div class="text-center mb-12 max-w-2xl mx-auto">
      <p class="text-sm font-semibold text-blue-700 mb-2">{{ badge }}</p>
      <h2 class="text-2xl md:text-3xl font-reguler text-gray-800 mb-2">{{ title }}</h2>
      <p class="text-gray-600">{{ content }}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="relative bg-white border-t-4 border-blue-800 shadow p-6 rounded-sm"
      >
        <!-- Number Circle -->
        <div class="absolute -top-5 left-1/2 transform -translate-x-1/2">
          <div class="w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center text-sm font-semibold shadow-md">
            {{ (index + 1).toString().padStart(2, '0') }}
          </div>
        </div>

        <!-- Content -->
        <div class="mt-8">
          <h3 class="text-lg font-reguler text-gray-800">{{ item.title }}</h3>
          <p class="text-gray-500 text-sm mt-2">{{ item.content }}</p>
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
  if (!raw) return console.warn(' Data customPage Home tidak ditemukan.')

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
    console.error(' Error parsing localStorage customPageData:', err)
  }
})
</script>
