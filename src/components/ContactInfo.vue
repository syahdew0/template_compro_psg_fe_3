<template>
  <section class="py-16 px-4 sm:px-6 lg:px-20 bg-white relative">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <!-- Image with background -->
      <div class="relative w-full h-full min-h-[320px] flex items-center justify-center">
  <div class="absolute w-4/5 h-4/5 bg-[#60C7ED] rounded-[10px] z-0"></div>
  <img
    :src="getImage(contactBlocks.main.image)"
    alt="Contact Office"
    class="relative z-10 w-4/5 h-auto max-h-[90%] object-contain rounded-[10px]"
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

function parse(data) {
  if (!data) return {}
  return typeof data === 'string' ? JSON.parse(data) : data
}

onMounted(() => {
  const raw = localStorage.getItem('customPageData:Home')
  if (!raw) return console.warn(' Data halaman Home tidak ditemukan di localStorage')

  try {
    const data = JSON.parse(raw)

    contactBlocks.value = {
      main: parse(data.contact_info_main),
      labels: parse(data.contact_info_badge),
      hours: parse(data.contact_info_hours),
      support: parse(data.contact_info_support),
      address: parse(data.contact_info_address)
    }
  } catch (err) {
    console.error(' Gagal parsing contact blocks:', err)
  }
})
</script>
