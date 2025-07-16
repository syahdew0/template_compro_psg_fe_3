<template>
  <section class="relative bg-white">
    <div class="text-center py-16 mt-20 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <h2 class="text-3xl md:text-3xl max-w-3xl mx-auto font-reguler text-gray-800 text-center leading-tight">
        {{ hero.title }}
      </h2>
      <p class="mt-4 text-sm text-gray-600" v-html="hero.content"></p>

      <div class="mt-6 flex justify-center gap-4 z-50">
        <a
          v-if="hero.slider_primary_button?.link"
          :href="hero.slider_primary_button.link"
          class="px-6 py-3 bg-blue-700 text-white font-semibold rounded border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition"
        >
          {{ hero.slider_primary_button.text || 'Hubungi Kami' }}
        </a>

        <a
          v-if="hero.slider_secondary_button?.link"
          :href="hero.slider_secondary_button.link"
          class="px-6 py-3 bg-blue-700 text-white font-semibold rounded border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition"
        >
          {{ hero.slider_secondary_button.text || 'Pelajari lebih lanjut' }}
        </a>
      </div>
    </div>

    <div v-if="hero.images?.length" class="flex justify-center items-center px-4 md:px-8">
      <img
        v-for="(img, index) in hero.images"
        :key="index"
        :src="getImage(img)"
        class="w-full md:1/2 2xl:w-1/2 h-full z-10"
        :alt="'Company preview ' + (index + 1)"
      />
    </div>

    <div v-if="hero.stats?.length" class="relative z-0">
      <!-- Background image -->
      <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${getImage(hero.stats_bg)})` }">
        <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${getImage(hero.stats_bg)})` }"></div>
      </div>

      <!-- Overlay -->
      <div class="absolute inset-0 bg-[#114791] opacity-80"></div>

      <!-- Stats content -->
      <div class="relative grid grid-cols-2 md:grid-cols-4 text-center text-white z-10">
        <div v-for="(stat, index) in hero.stats" :key="index" class="py-6 border-t border-white/20">
          <div class="text-xl font-reguler">{{ stat.title || '-' }}</div>
          <div class="mt-1 text-lg md:text-3xl">{{ stat.content || '-' }}</div>
        </div>
      </div>
    </div>

    <div
      class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full h-full bg-[#60C7ED] rounded-full blur-3xl opacity-60 z-0"
    ></div>
  </section>
</template>

<script setup>
import { ref,  watchEffect } from 'vue'
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
  slider_primary_button: { text: '', link: '' },
  slider_secondary_button: { text: '', link: '' }
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

watchEffect(() => {
  const allData = props.pageData || {}
  const sliderSection = parse(allData.slider_home)
  const statsItems = getItemByTag('stats', allData) || []
  const statsBgItem = getItemByTag('stats_bg', allData)?.[0] || {}
  const primaryButtonItem = getItemByTag('slider_primary_button', allData)?.[0] || {}
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

    slider_primary_button: {
      text: primaryButtonItem.title || '',
      link: primaryButtonItem.link || ''
    },
    slider_secondary_button: {
      text: secondaryButtonItem.title || '',
      link: secondaryButtonItem.link || ''
    }
  }
})
</script>
