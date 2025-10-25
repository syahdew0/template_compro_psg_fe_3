<template>
  <section class="relative overflow-hidden py-16 lg:py-24">
    <!-- Gradient Background (reversed) -->
    <div class="absolute inset-0 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-300"></div>
    
    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        
        <!-- Left Side - Image (1/3) -->
        <div class="order-2 lg:order-1 lg:col-span-1">
          <div 
            v-if="consultantData.images?.length" 
            class="aspect-[3/4]"
          >
            <img
              :src="getImage(consultantData.images[0])"
              :alt="consultantData.title"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <!-- Right Side - Content (2/3) -->
        <div class="order-1 lg:order-2 lg:col-span-2">
          <!-- Top Badges -->
          <div class="flex flex-wrap items-center gap-4 mb-6">
            <!-- Badge 1 - Atribut Title -->
            <div v-if="consultantData.sliderhome_atribut3?.title" class="inline-block">
              <span class="px-4 py-2 bg-white text-sm font-semibold text-gray-900">
                {{ consultantData.sliderhome_atribut3.title }}
              </span>
            </div>
            
            <!-- Badge 2 - Atribut Content -->
            <div 
              v-if="consultantData.sliderhome_atribut3?.content" 
              class="text-gray-700 font-medium"
              v-html="consultantData.sliderhome_atribut3.content"
            ></div>
          </div>

          <!-- Main Title -->
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {{ consultantData.title || 'Our consultancy stays in sync with your strategy' }}
          </h2>

          <!-- Description -->
          <div 
            v-if="consultantData.content" 
            class="text-lg text-gray-700 mb-8 leading-relaxed"
            v-html="consultantData.content"
          ></div>

          <!-- CTA Button -->
          <div v-if="consultantData.slider_primary_button3?.link">
            <component
              :is="isExternal(consultantData.slider_primary_button3.link) ? 'a' : 'router-link'"
              :href="isExternal(consultantData.slider_primary_button3.link) ? consultantData.slider_primary_button3.link : null"
              :to="!isExternal(consultantData.slider_primary_button3.link) ? consultantData.slider_primary_button3.link : null"
              class="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base sm:text-lg"
              :target="isExternal(consultantData.slider_primary_button3.link) ? '_blank' : null"
              rel="noopener noreferrer"
            >
              {{ consultantData.slider_primary_button3.text || 'Get started today' }}
            </component>
          </div>

          <!-- Decorative Line Under Title (Optional) -->
          <div class="absolute -left-4 top-1/2 w-1 h-32 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-50 hidden lg:block"></div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { API_ENDPOINTS } from '@/config/api'

/* global defineProps */
const props = defineProps({
  pageData: {
    type: Object,
    default: () => ({})
  }
})

const consultantData = ref({
  title: '',
  content: '',
  images: [],
  slider_primary_button3: { text: '', link: '' },
  sliderhome_atribut3: { title: '', content: '' }
})

function parse(data) {
  if (!data) return {}
  return typeof data === 'string' ? JSON.parse(data) : data
}

function getImage(src) {
  if (!src) return '/no-image.jpg'
  return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
}

function getItemByTag(tag, allData) {
  const section = allData[tag]
  if (!section) return null
  
  const parseItem = (item) => {
    const parsed = parse(item)
    if (parsed.items) {
      return parse(parsed.items)
    }
    return parsed
  }
  
  return Array.isArray(section) ? section.map(parseItem) : [parseItem(section)]
}

function isExternal(link) {
  return /^https?:\/\//.test(link)
}

watchEffect(() => {
  const allData = props.pageData || {}
  
  // Get main section data from slider_home3
  const sliderSection = parse(allData.slider_home3)
  
  // Get attributes from sliderhome_atribut3
  const atributItem = getItemByTag('sliderhome_atribut3', allData)?.[0] || {}
  
  // Get button from slider_primary_button3
  const primaryButtonItem = getItemByTag('slider_primary_button3', allData)?.[0] || {}

  consultantData.value = {
    title: sliderSection.title || '',
    content: sliderSection.content || '',
    images: sliderSection.images || (sliderSection.image ? [sliderSection.image] : []),
    slider_primary_button3: {
      text: primaryButtonItem.title || '',
      link: primaryButtonItem.link || ''
    },
    sliderhome_atribut3: {
      title: atributItem.title || '',
      content: atributItem.content || ''
    }
  }
})
</script>

<style scoped>
/* Import Google Fonts - Plus Jakarta Sans untuk body dan Inter untuk heading */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

/* Body/section copy → Plus Jakarta Sans */
section {
  font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji', sans-serif;
}

/* Heading utama → Inter (bold, modern, clean) */
h1, h2 {
  font-family: 'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  letter-spacing: -0.02em;
}

/* Paragraph dan list items */
p {
  font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif;
  font-weight: 400;
}
</style>