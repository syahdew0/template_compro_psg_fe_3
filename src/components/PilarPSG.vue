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
  const items = ref([])
  
  onMounted(async () => {
    try {
      // Ambil badge (Home-pilar_badge)
      const badgeRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-pilar_badge`)
      const badgeItem = badgeRes.data?.[0]
      if (badgeItem) {
        const badgeItems = typeof badgeItem.items === 'string' ? JSON.parse(badgeItem.items) : badgeItem.items
        badge.value = badgeItems.title || ''
      }
  
      // Ambil title dan content utama (Home-pilar)
      const mainRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-pilar`)
      const mainItem = mainRes.data?.[0]
      if (mainItem) {
        const mainItems = typeof mainItem.items === 'string' ? JSON.parse(mainItem.items) : mainItem.items
        title.value = mainItem.title || ''
        content.value = mainItems.content || ''
      }
  
      // Ambil item-item pilar (Home-pilar_items)
      const itemRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-pilar_items`)
      const rawItems = itemRes.data || []
  
      items.value = rawItems.map((item) => {
        const parsed = typeof item.items === 'string' ? JSON.parse(item.items) : item.items
        return {
          title: parsed.title || '',
          content: parsed.content || ''
        }
      }).filter(item => item.title || item.content)
    } catch (err) {
      console.error('Gagal memuat data pilar:', err)
    }
  })
  </script>
  