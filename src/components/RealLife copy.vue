<template>
  <section class="relative bg-white">
    <div class="text-center py-16 mt-20 px-4 sm:px-6 lg:px-8 max-w-full mx-auto">
      <h2 class="text-3xl md:text-3xl max-w-3xl mx-auto font-reguler text-gray-800 text-center leading-tight">
        {{ hero.title }}
      </h2>
      <p class="mt-4 text-sm text-gray-600" v-html="hero.content"></p>
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
      <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full h-4/5 bg-[#60C7ED] rounded-full blur-3xl opacity-60 z-0"></div>
    </div>

    <!-- Items -->
    <div v-if="heroItems.length" class="grid gap-6 md:grid-cols-3 px-4 sm:px-6 lg:px-8 py-10">
      <article
        v-for="(item, index) in heroItems"
        :key="item.id ?? index"
        class="p-4"
      >
        <h3 class="text-lg font-semibold mb-2">{{ item.title }}</h3>
        <div class="text-sm text-gray-600" v-html="item.contentHtml"></div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

/* global defineProps */
const props = defineProps({
  pageData: { type: Object, default: () => ({}) }
})

const hero = ref({
  title: '',
  content: '',
  icon: '',
  link: '',
  images: []
})

// <-- array, bukan computed
const heroItems = ref([])

function parse(data) {
  if (!data) return null
  try {
    return typeof data === 'string' ? JSON.parse(data) : data
  } catch {
    return null
  }
}

function getImage(src) {
  if (!src) return '/no-image.jpg'
  return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
}

// Helper aman untuk ambil konten berdasarkan tag (menghindari error pageByTag not a function)
async function getByTag(tag) {
  let url = null
  if (typeof API_ENDPOINTS.pageByTag === 'function') {
    url = API_ENDPOINTS.pageByTag(tag)
  } else if (typeof API_ENDPOINTS.getByTag === 'function') {
    url = API_ENDPOINTS.getByTag(tag)
  } else if (typeof API_ENDPOINTS.contentByTag === 'function') {
    url = API_ENDPOINTS.contentByTag(tag)
  }
  if (!url && typeof API_ENDPOINTS.pagesByTag === 'string') {
    url = `${API_ENDPOINTS.pagesByTag}?tag=${encodeURIComponent(tag)}`
  }
  if (!url) {
    url = `${API_ENDPOINTS.baseURL}/api/public/content?tag=${encodeURIComponent(tag)}`
  }
  const { data } = await axios.get(url)
  return data?.data ?? data ?? null
}

onMounted(async () => {
  const sliderSection  = await getByTag('real_life3')
  const sliderSection3 = await getByTag('real_life_items3')

  // real_life3 -> hero
  hero.value = {
    title:   sliderSection?.title   || '',
    content: sliderSection?.content || '',
    icon:    sliderSection?.icon    || '',
    link:    sliderSection?.link    || '',
    images:  sliderSection?.images
              || (sliderSection?.image ? [sliderSection.image] : [])
  }

  // real_life_items3 -> heroItems
  const rawItems = Array.isArray(sliderSection3)
    ? sliderSection3
    : (sliderSection3 ? [sliderSection3] : [])

  heroItems.value = rawItems.map((it, i) => ({
    id: it.id ?? i,
    title: it.title || '',
    contentHtml: it.content || '',
    icon: it.icon || null,
    link: it.link || null,
    image: it.image || null
  }))
})

// Pakai pageData bila tersedia, tanpa menimpa hasil fetch saat kosong/invalid
watchEffect(() => {
  const s = parse(props.pageData?.real_life3)
  if (s) {
    hero.value = {
      title: s.title || '',
      content: s.content || '',
      icon: s.icon || '',
      link: s.link || '',
      images: s.images || (s.image ? [s.image] : [])
    }
  }
})
</script>
