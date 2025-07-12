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

const title = ref('')
const content = ref('')
const clients = ref([])

onMounted(() => {
  const rawStorage = localStorage.getItem('customPageData:Home')
  if (!rawStorage) return console.warn(' Data Home tidak ditemukan di localStorage')

  try {
    const data = JSON.parse(rawStorage)

    // --- client_title: untuk title dan content
    const rawTitle = data['client_title'] || data['client_title']
    const parsedTitle = typeof rawTitle === 'string' ? JSON.parse(rawTitle) : rawTitle
    title.value = parsedTitle?.title || ''
    content.value = parsedTitle?.content || ''

    // --- client_image: list logo client
    const rawClients = data['client_image'] || data['client_image']
    let parsedList = []

    if (typeof rawClients === 'string') {
      try {
        const parsed = JSON.parse(rawClients)
        if (Array.isArray(parsed)) {
          parsedList = parsed.map((item) => {
            if (typeof item === 'string') {
              try {
                return JSON.parse(item)
              } catch {
                return null
              }
            }
            return item
          }).filter(Boolean)
        } else if (typeof parsed === 'object') {
          parsedList = [parsed]
        }
      } catch (e) {
        console.warn(' Gagal parsing client_image (string):', e.message)
      }
    } else if (Array.isArray(rawClients)) {
      parsedList = rawClients.map((item) => {
        if (typeof item === 'string') {
          try {
            return JSON.parse(item)
          } catch {
            return null
          }
        }
        return item
      }).filter(Boolean)
    } else if (typeof rawClients === 'object') {
      parsedList = [rawClients]
    }

    clients.value = parsedList.map(item => ({
      image: item?.image || '',
      name: item?.title || 'Client Logo'
    })).filter(c => !!c.image)

  } catch (err) {
    console.error(' Error parsing client section from localStorage:', err)
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
