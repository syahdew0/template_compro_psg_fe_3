<template>
  <section class="relative bg-white overflow-hidden">
    <!-- Background Decorative Elements -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden">
      <!-- Left Blue Area with Curved White Section -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <svg class="absolute top-0 left-0 w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none">
          <!-- 1) Latar biru penuh di kiri -->
          <rect width="1440" height="900" fill="#0A18C6" />

          <!-- 2) Bidang putih utama yang 'memotong' biru (curved) -->
          <path
            d="M720,0 L1440,0 L1440,900 L520,900
               A900,900 0 0 1 720,0 Z"
            fill="#FFFFFF"
          />

          <!-- 3) Pita lengkung tipis (FILL, bukan stroke), warna ungu muda transparan -->
          <!-- Pita luar -->
          <path
            d="M760,0 L1440,0 L1440,900 L600,900
               A980,980 0 0 1 760,0 Z"
            fill="rgba(200,200,200,0.05)" 
          />
          <!-- Pita tengah -->
          <path
            d="M880,0 L1440,0 L1440,900 L700,900
               A1060,1060 0 0 1 880,0 Z"
            fill="rgba(139,92,246,0.06)"
          />
          <!-- Pita dalam -->
          <path
            d="M1020,0 L1440,0 L1440,900 L820,900
               A1160,1160 0 0 1 1020,0 Z"
            fill="rgba(255,255,255,1)"
          />
        </svg>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      
      <!-- Desktop Layout (lg and up) -->
      <div class="hidden lg:grid lg:grid-cols-2 gap-12">
        
        <!-- Left Side: Image - Fixed Height -->
        <div class="flex items-center">
          <div v-if="hero.images?.length" class="relative w-full max-w-md">
            <img
              :src="getImage(hero.images[0])"
              class="w-full h-auto object-cover rounded-lg"
              :alt="hero.title"
            />
            <!-- Decorative blur effect behind image -->
            <div class="absolute -bottom-8 -right-8 w-4/5 h-4/5 bg-blue-200 rounded-lg blur-3xl opacity-30 -z-10"></div>
          </div>
        </div>

        <!-- Right Side: Content - Align Center -->
        <div class="flex flex-col justify-center space-y-6">
          <!-- Badge -->
          <div v-if="badgeText" class="inline-block">
            <span class="px-4 py-2 bg-yellow-200 text-gray-900 text-sm font-medium rounded">
              {{ badgeText }}
            </span>
          </div>

          <!-- Title & Description -->
          <div class="space-y-5">
            <h2 class="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              {{ hero.title }}
            </h2>
            <p class="text-gray-700 text-base leading-relaxed" v-html="hero.content"></p>
          </div>

          <!-- Items List -->
          <div v-if="heroItems.length" class="space-y-5 pt-4">
            <div
              v-for="(item, index) in heroItems"
              :key="item.id ?? index"
              class="flex items-start gap-4"
            >
              <!-- Checkmark Icon -->
              <div class="flex-shrink-0 mt-1">
                <img 
                  v-if="item.icon"
                  :src="getImage(item.icon)" 
                  :alt="item.title"
                  class="w-6 h-6 object-contain"
                />
                <svg v-else class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Text Content -->
              <div class="flex-1">
                <p class="text-gray-900 text-base leading-relaxed font-normal">
                  {{ item.title }}
                </p>
                <div v-if="item.contentHtml" class="text-gray-600 text-sm mt-1" v-html="item.contentHtml"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Mobile & Tablet Layout (below lg) -->
      <div class="lg:hidden space-y-12">
        
        <!-- Image Section -->
        <div v-if="hero.images?.length" class="relative mx-auto max-w-md">
          <img
            :src="getImage(hero.images[0])"
            class="w-full h-auto rounded-lg shadow-xl object-cover"
            :alt="hero.title"
          />
          <!-- Decorative blur effect -->
          <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-3/5 bg-blue-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        </div>

        <!-- Content Section -->
        <div class="space-y-6 text-center sm:text-left">
          <!-- Badge -->
          <div v-if="badgeText" class="inline-block">
            <span class="px-4 py-2 bg-yellow-200 text-gray-900 text-sm font-medium rounded">
              {{ badgeText }}
            </span>
          </div>

          <!-- Title & Description -->
          <div class="space-y-4">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {{ hero.title }}
            </h2>
            <p class="text-gray-600 text-base sm:text-lg" v-html="hero.content"></p>
          </div>

          <!-- Items List -->
          <div v-if="heroItems.length" class="space-y-5 mt-8">
            <div
              v-for="(item, index) in heroItems"
              :key="item.id ?? index"
              class="flex items-start gap-3 text-left"
            >
              <!-- Checkmark Icon -->
              <div class="flex-shrink-0 mt-1">
                <img 
                  v-if="item.icon"
                  :src="getImage(item.icon)" 
                  :alt="item.title"
                  class="w-5 h-5 object-contain"
                />
                <svg v-else class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <!-- Text Content -->
              <div class="flex-1">
                <p class="text-gray-800 text-sm sm:text-base leading-relaxed">
                  {{ item.title }}
                </p>
                <div v-if="item.contentHtml" class="text-gray-600 text-sm mt-1" v-html="item.contentHtml"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

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

const heroItems = ref([])
const badgeText = ref()

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

async function getByTag(tag) {
  try {
    let url = null
    
    if (typeof API_ENDPOINTS.pageByTag === 'function') {
      url = API_ENDPOINTS.pageByTag(tag)
    } else if (typeof API_ENDPOINTS.getByTag === 'function') {
      url = API_ENDPOINTS.getByTag(tag)
    } else if (typeof API_ENDPOINTS.contentByTag === 'function') {
      url = API_ENDPOINTS.contentByTag(tag)
    } else if (typeof API_ENDPOINTS.pagesByTag === 'string') {
      url = `${API_ENDPOINTS.pagesByTag}?tag=${encodeURIComponent(tag)}`
    } else {
      url = `${API_ENDPOINTS.baseURL}/api/public/content?tag=${encodeURIComponent(tag)}`
    }
    
    const { data } = await axios.get(url)
    return data?.data ?? data ?? null
  } catch (error) {
    console.error(`Error fetching tag "${tag}":`, error)
    return null
  }
}

onMounted(async () => {
  try {
    const sliderSection = await getByTag('real_life3')
    let sliderSection3 = await getByTag('real_life_items3')
    const badgeSection = await getByTag('sliderhome_atribut3')
    
    if (!sliderSection3 || (Array.isArray(sliderSection3) && sliderSection3.length === 0)) {
      sliderSection3 = await getByTag('Real_life_items3')
      
      if (!sliderSection3 || (Array.isArray(sliderSection3) && sliderSection3.length === 0)) {
        sliderSection3 = await getByTag('real_life_items_3')
      }
      
      if (!sliderSection3 || (Array.isArray(sliderSection3) && sliderSection3.length === 0)) {
        sliderSection3 = await getByTag('reallifeitems3')
      }
    }

    // Set badge text
    if (badgeSection) {
      if (Array.isArray(badgeSection) && badgeSection.length > 0) {
        badgeText.value = badgeSection[0].title || ''
      } else if (badgeSection.title) {
        badgeText.value = badgeSection.title
      }
    }

    if (sliderSection) {
      hero.value = {
        title: sliderSection.title || '',
        content: sliderSection.content || '',
        icon: sliderSection.icon || '',
        link: sliderSection.link || '',
        images: sliderSection.images || (sliderSection.image ? [sliderSection.image] : [])
      }
    }

    if (sliderSection3) {
      let rawItems = []
      
      if (Array.isArray(sliderSection3)) {
        rawItems = sliderSection3
      } else if (sliderSection3.items && Array.isArray(sliderSection3.items)) {
        rawItems = sliderSection3.items
      } else if (sliderSection3.data && Array.isArray(sliderSection3.data)) {
        rawItems = sliderSection3.data
      } else if (typeof sliderSection3 === 'object') {
        rawItems = [sliderSection3]
      }

      heroItems.value = rawItems.map((it, i) => ({
        id: it.id ?? i,
        title: it.title || '',
        contentHtml: it.content || '',
        icon: it.icon || null,
        link: it.link || null,
        image: it.image || null
      }))
    }
  } catch (error) {
    console.error('Error in onMounted:', error)
  }
})

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
  
  const items = parse(props.pageData?.real_life_items3)
  if (items) {
    const rawItems = Array.isArray(items) ? items : [items]
    heroItems.value = rawItems.map((it, i) => ({
      id: it.id ?? i,
      title: it.title || '',
      contentHtml: it.content || '',
      icon: it.icon || null,
      link: it.link || null,
      image: it.image || null
    }))
  }

  // Watch badge
  const badge = parse(props.pageData?.sliderhome_atribut3)
  if (badge) {
    if (Array.isArray(badge) && badge.length > 0) {
      badgeText.value = badge[0].title || ''
    } else if (badge.title) {
      badgeText.value = badge.title
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