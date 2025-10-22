<template>
  <section class="relative bg-white">
    <div class="text-center py-16 mt-20 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <h2 class="text-3xl md:text-3xl max-w-3xl mx-auto font-reguler text-gray-800 text-center leading-tight">
        {{ hero.title }}
      </h2>
      <p class="mt-4 text-sm text-gray-600" v-html="hero.content"></p>
<p class="text-xl md:text-xl max-w-3xl mx-auto font-reguler text-gray-800 text-center leading-tight">
  {{ hero.sliderhome_atribut3?.title || '' }}
</p>
 <p class="mt-4 text-sm text-gray-600" v-html="hero.sliderhome_atribut3.content"></p>
      <!-- Tombol -->
      <div class="mt-6 flex justify-center gap-4 z-50">
        <!-- Primary Button -->
        <component
          v-if="hero.slider_primary_button3?.link"
          :is="isExternal(hero.slider_primary_button3.link) ? 'a' : 'router-link'"
          :href="isExternal(hero.slider_primary_button3.link) ? hero.slider_primary_button3.link : null"
          :to="!isExternal(hero.slider_primary_button3.link) ? hero.slider_primary_button3.link : null"
          class="px-6 py-3 bg-blue-700 text-white font-semibold rounded border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition"
          :target="isExternal(hero.slider_primary_button3.link) ? '_blank' : null"
          rel="noopener noreferrer"
        >
          {{ hero.slider_primary_button3.text || 'Hubungi Kami' }}
        </component>

        <!-- Secondary Button -->
        <component
          v-if="hero.slider_secondary_button?.link"
          :is="isExternal(hero.slider_secondary_button.link) ? 'a' : 'router-link'"
          :href="isExternal(hero.slider_secondary_button.link) ? hero.slider_secondary_button.link : null"
          :to="!isExternal(hero.slider_secondary_button.link) ? hero.slider_secondary_button.link : null"
          class="px-6 py-3 bg-blue-700 text-white font-semibold rounded border-2 border-blue-700 hover:bg-white hover:text-blue-700 transition"
          :target="isExternal(hero.slider_secondary_button.link) ? '_blank' : null"
          rel="noopener noreferrer"
        >
          {{ hero.slider_secondary_button.text || 'Pelajari lebih lanjut' }}
        </component>
      </div>
    </div>

    <!-- Images -->
    <div v-if="hero.images?.length" class="relative flex justify-center items-end overflow-hidden">
      <img
        v-for="(img, index) in hero.images"
        :key="index"
        :src="getImage(img)"
        class="w-full md:w-1/2 2xl:w-1/2 h-full z-10 object-cover"
        :alt="'Company preview ' + (index + 1)"
      />
      <div
        class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full h-4/5 bg-[#60C7ED] rounded-full blur-3xl opacity-60 z-0"
      ></div>
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
