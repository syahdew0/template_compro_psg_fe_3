<template>
  <div class="grid grid-cols-6 grid-rows-3 w-full gap-1">
    <div
      v-for="(image, index) in filledGrid"
      :key="index"
      class="aspect-[3/2] flex items-center justify-center overflow-hidden"
    >
      <img
        v-if="image"
        :src="getImage(image)"
        alt="Grid Image"
        class="object-cover w-full h-full"
      />
      <span v-else class="text-xs text-gray-400">No Image</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { API_ENDPOINTS } from '@/config/api'

const filledGrid = ref([])

function getImage(image) {
  if (!image) return '/no-image.jpg'
  return image.startsWith('http') ? image : `${API_ENDPOINTS.baseURL}${image}`
}

onMounted(() => {
  const rawStorage = localStorage.getItem('customPageData:Home')
  if (!rawStorage) return console.warn(' Data Home tidak ditemukan di localStorage')

  try {
    const data = JSON.parse(rawStorage)
    const raw = data.gallery_grid
    const parsedList = []

    if (Array.isArray(raw)) {
      for (const item of raw) {
        try {
          const parsed = typeof item === 'string' ? JSON.parse(item) : item
          if (parsed?.image) parsedList.push(parsed.image)
        } catch (e) {
          console.warn('Gagal parse item gallery_grid (array):', e.message)
        }
      }
    } else if (typeof raw === 'string') {
      try {
        const parsed = JSON.parse(raw)
        if (Array.isArray(parsed)) {
          for (const item of parsed) {
            if (typeof item === 'string') {
              try {
                const sub = JSON.parse(item)
                if (sub?.image) parsedList.push(sub.image)
              } catch {
                parsedList.push(item) // item adalah string image path langsung
              }
            } else if (item?.image) {
              parsedList.push(item.image)
            }
          }
        } else if (parsed?.image) {
          parsedList.push(parsed.image)
        }
      } catch (e) {
        console.warn('Gagal parse string gallery_grid:', e.message)
      }
    } else if (typeof raw === 'object' && raw !== null) {
      if (raw?.image) parsedList.push(raw.image)
    }

    const totalSlots = 12
    filledGrid.value = [...parsedList]
    while (filledGrid.value.length < totalSlots) {
      filledGrid.value.push(null)
    }

    console.log(' filledGrid:', filledGrid.value)
  } catch (err) {
    console.error(' Error parsing gallery_grid from localStorage:', err)
  }
})
</script>
