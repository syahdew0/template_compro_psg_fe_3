<template>
  <section
    class="w-full py-16 bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-white text-center px-6"
    :style="{ backgroundImage: `linear-gradient(rgba(17, 71, 145, 0.9), rgba(17, 71, 145, 0.9)), url(${getImage(image)})` }"
  >
    <h2 class="text-2xl md:text-3xl font-reguler mb-6 max-w-full">
      {{ title }}
    </h2>
    <a
      :href="link"
      class="bg-white text-blue-800 font-reguler px-6 py-3 rounded shadow-md hover:bg-blue-50 transition"
    >
      {{ content }}
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

const title = ref('')
const content = ref('')
const image = ref('')
const link = ref('')

function getImage(src) {
  if (!src) return '/no-image.jpg'
  return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
}

const loadTag = async (tag) => {
  try {
    const res = await axios.get(`${API_ENDPOINTS.customPages}?tag=${tag}`)
    const item = res.data?.[0]
    if (!item) return null
    const parsed = typeof item.items === 'string' ? JSON.parse(item.items) : item.items
    return parsed
  } catch (err) {
    console.error(`Gagal load tag ${tag}:`, err)
    return null
  }
}

onMounted(async () => {
  const ctaData = await loadTag('Home-cta_section')
  if (ctaData) {
    title.value = ctaData.title || ''
    content.value = ctaData.content || 'Learn More'
    image.value = ctaData.image || ''
    link.value = ctaData.link || '#'
  }
})
</script>
