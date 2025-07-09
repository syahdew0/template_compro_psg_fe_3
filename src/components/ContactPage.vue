<template>
  <section class="py-16 px-4 sm:px-6 lg:px-20 bg-white relative">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Image with background -->
      <div class="relative w-full h-[320px]">
        <div class="absolute bottom-5 left-5 w-4/5 h-4/5 bg-[#60C7ED] rounded-[10px] z-0"></div>
        <img
          :src="getImage(contactBlocks.main.image)"
          alt="Contact Office"
          class="absolute top-0 left-0 w-4/5 rounded-[10px] border-4 border-white shadow-xl z-10"
        />
      </div>

      <!-- Contact Info -->
      <div>
        <p class="text-sm font-semibold text-blue-700 mb-2">
          {{ contactBlocks.labels.title }}
        </p>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
          {{ contactBlocks.main.title }}
        </h2>
        <p class="text-gray-700 mb-6" v-html="contactBlocks.main.content"></p>

        <!-- Operational Hours -->
        <div class="mb-6 flex gap-4">
          <div class="w-5 h-5">
            <img :src="getImage(contactBlocks.hours.icon)" class="w-5 h-5" />
          </div>
          <div>
            <p class="font-semibold text-gray-800">
              {{ contactBlocks.hours.title }}
            </p>
            <p class="text-gray-600" v-html="contactBlocks.hours.content"></p>
          </div>
        </div>

        <!-- Support -->
        <div class="mb-6 flex gap-4">
          <div class="w-5 h-5">
            <img :src="getImage(contactBlocks.support.icon)" class="w-5 h-5" />
          </div>
          <div>
            <p class="font-semibold text-gray-800">
              {{ contactBlocks.support.title }}
            </p>
            <p class="text-gray-600" v-html="contactBlocks.support.content"></p>
          </div>
        </div>

        <!-- Address -->
        <div class="flex gap-4">
          <div class="w-5 h-5">
            <img :src="getImage(contactBlocks.address.icon)" class="w-5 h-5" />
          </div>
          <div>
            <p class="font-semibold text-gray-800">
              {{ contactBlocks.address.title }}
            </p>
            <p class="text-gray-600 whitespace-pre-line" v-html="contactBlocks.address.content"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

const contactBlocks = ref({
  main: {},
  labels: {},
  hours: {},
  support: {},
  address: {}
})

function getImage(src) {
  if (!src) return ''
  return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
}

onMounted(async () => {
  const keys = ['main', 'labels', 'hours', 'support', 'address']
  for (const key of keys) {
    const tag = `Home-contact_info_${key}`
    try {
      const res = await axios.get(`${API_ENDPOINTS.customPages}?tag=${tag}`)
      const item = res.data?.[0]
      if (item) {
        const parsed = typeof item.items === 'string' ? JSON.parse(item.items) : item.items
        contactBlocks.value[key] = parsed
      }
    } catch (err) {
      console.error(`Gagal load contact block ${key}:`, err)
    }
  }
})
</script>
