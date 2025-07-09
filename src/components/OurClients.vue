<template>
    <div class="bg-white py-18 px-4 overflow-hidden font-poppins antialiased">
      <div class="max-w-full mx-auto lg:px-12">
        <h2 class="text-3xl md:text-4xl font-semibold text-gray-800 text-center mb-2">
          {{ title }}
        </h2>
        <p class="text-gray-600 text-center text-sm mb-12 max-w-2xl mx-auto">
          {{ content }}
        </p>
  
        <div class="relative overflow-hidden">
          <!-- Fade gradient -->
          <div class="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div class="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
  
          <div class="overflow-hidden w-full pb-2">
            <div class="flex items-center space-x-1 w-max animate-scroll">
              <!-- First batch -->
              <div
                v-for="(client, index) in clients"
                :key="`first-${index}`"
                class="flex-shrink-0 flex items-center justify-center p-4"
              >
              <img
                :src="client.image"
                :alt="client.name"
                class="h-auto w-auto max-h-20 max-w-40 object-contain"
                />
              </div>
  
              <!-- Second batch -->
              <div
                v-for="(client, index) in clients"
                :key="`second-${index}`"
                class="flex-shrink-0 flex items-center justify-center p-4"
              >
              <img
                :src="client.image"
                :alt="client.name"
                class="h-auto w-auto max-h-20 max-w-40 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { API_ENDPOINTS } from '@/config/api'
  
  const title = ref('')
  const content = ref('')
  const clients = ref([])
  
  onMounted(async () => {
    try {
      // Ambil title dan content (Home-client_title)
      const titleRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-client_title`)
      const titleItem = titleRes.data?.[0]
      if (titleItem) {
        const data = typeof titleItem.items === 'string' ? JSON.parse(titleItem.items) : titleItem.items
        title.value = data.title || ''
        content.value = data.content || ''
      }
  
      // Ambil daftar gambar klien (Home-client_image)
      const imageRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-client_image`)
    clients.value = imageRes.data.map((item) => {
      const data = typeof item.items === 'string' ? JSON.parse(item.items) : item.items
      return {
        image: data.image,
        name: data.title || 'Client Logo'
      }
    }).filter(client => !!client.image) // Filter hanya yang ada image
  } catch (err) {
    console.error('Gagal memuat data klien:', err)
  }
})
  </script>
  
  <style scoped>
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 40s linear infinite;
  }
  </style>
  