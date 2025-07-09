<template>
    <div class="grid grid-cols-6 grid-rows-3 w-full h-full gap-1">
      <div
        v-for="(image, index) in filledGrid"
        :key="index"
        class="aspect-[3/2] flex items-center justify-center overflow-hidden">
        <img
          :src="getImage(image)"
          alt="Grid Image"
          class="object-cover w-full h-full"
        />
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

const filledGrid = ref([])

function getImage(image) {
  if (!image) return '/no-image.jpg'
  return image.startsWith('http') ? image : `${API_ENDPOINTS.baseURL}${image}`
}

onMounted(async () => {
  try {
    const res = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-gallery_grid`)
filledGrid.value = res.data.map(row => {
  const parsed = typeof row.items === 'string' ? JSON.parse(row.items) : row.items
  return parsed.image || row.image
}).filter(Boolean)

  } catch (err) {
    console.error('Gagal memuat data galeri grid:', err)
  }
})
</script>

  
  <style scoped>
  .grid {
    max-width: 100%;
  }
  </style>
  