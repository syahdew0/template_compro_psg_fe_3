<template>
  <section class="relative bg-blue-900 overflow-hidden min-h-[40vh] md:min-h-[60vh] lg:min-h-[60vh] flex items-center">
    <!-- Background Image - Right Side (All Devices) -->
    <div 
      v-if="hero.images?.length" 
      class="absolute top-0 right-0 w-full sm:w-3/5 md:w-1/2 h-full"
    >
      <div class="relative w-full h-full">
        <img
          v-for="(img, index) in hero.images"
          :key="index"
          :src="getImage(img)"
          class="absolute inset-0 w-full h-full object-cover"
          :alt="'Company preview ' + (index + 1)"
        />
        <!-- Dark overlay untuk kontras di mobile -->
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900 via-blue-900/50 to-transparent sm:via-blue-900/70"></div>
      </div>
    </div>

    <!-- Curved Separator Between Blue BG and Image -->
    <div class="absolute top-0 right-0 w-full sm:w-3/5 md:w-1/2 h-full pointer-events-none">
      <svg 
        class="absolute left-0 top-0 h-full w-24 sm:w-32 md:w-40 text-blue-700" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path d="M0 0 Q50 50 0 100 L0 0 Z" fill="currentColor"/>
      </svg>
    </div>

    <div class="absolute top-0 right-0 w-full sm:w-3/5 md:w-1/2 h-full pointer-events-none">
      <svg 
        class="absolute left-0 top-0 h-full w-24 sm:w-32 md:w-40 text-blue-700 opacity-50" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <path d="M100 0 Q50 50 100 100 L0 100 L0 0 Z" fill="currentColor" />
      </svg>
    </div>
    

    <!-- Decorative Pattern Overlay -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent"></div>
    </div>

    <!-- Content Container -->
    <div class="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 z-10">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="text-white max-w-2xl mx-auto lg:mx-0 flex flex-col justify-center">
          <!-- Badge -->
          <div class="inline-block mb-6">
            <span class="px-4 py-2 bg-white rounded text-sm font-medium">
              {{ hero.sliderhome_atribut3?.title || 'Best solutions' }}
            </span>
          </div>

          <!-- Subtitle -->
          <p class="text-base mb-4 text-blue-200 leading-relaxed text-left" v-if="hero.sliderhome_atribut3?.content" v-html="hero.sliderhome_atribut3.content"></p>

          <!-- Main Title -->
          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-left">
            {{ hero.title || 'Bersama Membangun Masa Depan Lewat Inovasi Teknologi & Solusi Nyata.' }}
          </h1>

          <!-- Description -->
          <div class="text-base sm:text-lg text-blue-100 mb-8 leading-loose text-left" v-if="hero.content" v-html="hero.content"></div>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4">
            <!-- Primary Button -->
            <component
              v-if="hero.slider_primary_button3?.link"
              :is="isExternal(hero.slider_primary_button3.link) ? 'a' : 'router-link'"
              :href="isExternal(hero.slider_primary_button3.link) ? hero.slider_primary_button3.link : null"
              :to="!isExternal(hero.slider_primary_button3.link) ? hero.slider_primary_button3.link : null"
              class="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center gap-2 text-sm sm:text-base"
              :target="isExternal(hero.slider_primary_button3.link) ? '_blank' : null"
              rel="noopener noreferrer"
            >
              {{ hero.slider_primary_button3.text || 'Contact Us' }}
            </component>

            <!-- Secondary Button -->
            <!-- <component
              v-if="hero.slider_secondary_button?.link"
              :is="isExternal(hero.slider_secondary_button.link) ? 'a' : 'router-link'"
              :href="isExternal(hero.slider_secondary_button.link) ? hero.slider_secondary_button.link : null"
              :to="!isExternal(hero.slider_secondary_button.link) ? hero.slider_secondary_button.link : null"
              class="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-full border-2 border-white/30 transition-all duration-300 inline-flex items-center gap-2 text-sm sm:text-base"
              :target="isExternal(hero.slider_secondary_button.link) ? '_blank' : null"
              rel="noopener noreferrer"
            >
              {{ hero.slider_secondary_button.text || 'Learn more' }}
            </component> -->
          </div>
        </div>

        <!-- Right Side - Empty (Image is background) -->
        <div class="hidden lg:block"></div>
      </div>
    </div>

    <!-- Bottom Wave Decoration -->
    <div class="absolute bottom-0 left-0 right-0 z-20">
      <svg class="w-full h-12 sm:h-16 md:h-20 text-white" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor"/>
      </svg>
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

const hero = ref({
  title: '',
  content: '',
  icon: '',
  link: '',
  images: [],
  stats_bg: '',
  stats: [],
  slider_primary_button3: { text: '', link: '' },
  slider_secondary_button: { text: '', link: '' },
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
  const sliderSection = parse(allData.slider_home3)
  const atributItem = getItemByTag('sliderhome_atribut3', allData)?.[0] || {}
  const statsItems = getItemByTag('stats', allData) || []
  const statsBgItem = getItemByTag('stats_bg', allData)?.[0] || {}
  const primaryButtonItem = getItemByTag('slider_primary_button3', allData)?.[0] || {}
  const secondaryButtonItem = getItemByTag('slider_secondary_button', allData)?.[0] || {}

  hero.value = {
    title: sliderSection.title || '',
    content: sliderSection.content || '',
    icon: sliderSection.icon || '',
    link: sliderSection.link || '',
    images: sliderSection.images || (sliderSection.image ? [sliderSection.image] : []),
    stats_bg: statsBgItem.image || '',
    stats: statsItems.map(item => ({
      title: item.title || '',
      content: item.content || ''
    })),
    slider_primary_button3: {
      text: primaryButtonItem.title || '',
      link: primaryButtonItem.link || ''
    },
    slider_secondary_button: {
      text: secondaryButtonItem.title || '',
      link: secondaryButtonItem.link || ''
    },
    sliderhome_atribut3: {
      title: atributItem.title || '',
      content: atributItem.content || ''
    }
  }
})
</script>