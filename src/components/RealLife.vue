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
              class="w-full h-auto object-cover"
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
import { API_ENDPOINTS } from '@/config/api'

/* global defineProps*/
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
const badgeText = ref('')

// Helper function untuk parse data
function parse(data) {
  if (data == null) return null
  let out = data

  if (typeof out === 'string') {
    try {
      out = JSON.parse(out)
    } catch (e) {
      out = data
    }
  }

  if (Array.isArray(out)) {
    out = out
      .map(it => {
        if (typeof it === 'string') {
          try {
            return JSON.parse(it)
          } catch (e) {
            return null
          }
        }
        return it
      })
      .filter(Boolean)
  }
  return out
}

// Helper function untuk convert ke HTTPS
function toHttps(url) {
  if (!url || typeof url !== 'string') return ''
  return url.startsWith('http://apicompro.phisoft.co.id')
    ? url.replace('http://', 'https://')
    : url
}

// Helper function untuk get image URL
function getImage(src) {
  if (!src) return '/no-image.jpg'
  const httpsUrl = toHttps(src)
  return httpsUrl.startsWith('http') ? httpsUrl : `${API_ENDPOINTS.baseURL}${httpsUrl}`
}

// Watch for props changes
watchEffect(() => {
  const allData = props.pageData || {}

  // Parse badge
  const badgeRaw = allData.sliderhome_atribut3 ?? allData.Sliderhome_atribut3 ?? null
  const badgeParsed = parse(badgeRaw)
  
  if (Array.isArray(badgeParsed) && badgeParsed.length) {
    badgeText.value = badgeParsed[0]?.title || ''
  } else if (badgeParsed?.title) {
    badgeText.value = badgeParsed.title
  }

  // Parse hero section
  const heroRaw = allData.real_life3 ?? allData.Real_life3 ?? null
  const heroParsed = parse(heroRaw)
  
  if (heroParsed) {
    hero.value = {
      title: heroParsed.title || '',
      content: heroParsed.content || '',
      icon: toHttps(heroParsed.icon || ''),
      link: heroParsed.link || '',
      images: heroParsed.images || (heroParsed.image ? [toHttps(heroParsed.image)] : [])
    }
  }

  // Parse hero items
  const itemsRaw = allData.real_life_items3 ?? allData.Real_life_items3 ?? null
  const itemsParsed = parse(itemsRaw)
  
  if (itemsParsed) {
    const rawItems = Array.isArray(itemsParsed) ? itemsParsed : [itemsParsed]
    heroItems.value = rawItems.map((it, i) => ({
      id: it.id ?? i,
      title: it.title || '',
      contentHtml: it.content || '',
      icon: toHttps(it.icon || ''),
      link: it.link || null,
      image: toHttps(it.image || '')
    })).filter(item => item.title) // Filter out empty items
  }
})

// Load from localStorage on mount
onMounted(() => {
  const raw = localStorage.getItem('customPageData:Home')
  if (!raw) {
    console.warn('Data halaman Home tidak ditemukan di localStorage')
    return
  }

  try {
    const data = JSON.parse(raw)

    // Parse badge
    const badgeRaw = data.sliderhome_atribut3 ?? data.Sliderhome_atribut3 ?? null
    const badgeParsed = parse(badgeRaw)
    
    if (Array.isArray(badgeParsed) && badgeParsed.length) {
      badgeText.value = badgeParsed[0]?.title || ''
    } else if (badgeParsed?.title) {
      badgeText.value = badgeParsed.title
    }

    // Parse hero
    const heroRaw = data.real_life3 ?? data.Real_life3 ?? null
    const heroParsed = parse(heroRaw)
    
    if (heroParsed) {
      hero.value = {
        title: heroParsed.title || '',
        content: heroParsed.content || '',
        icon: toHttps(heroParsed.icon || ''),
        link: heroParsed.link || '',
        images: heroParsed.images || (heroParsed.image ? [toHttps(heroParsed.image)] : [])
      }
    }

    // Parse items
    const itemsRaw = data.real_life_items3 ?? data.Real_life_items3 ?? null
    const itemsParsed = parse(itemsRaw)
    
    if (itemsParsed) {
      const rawItems = Array.isArray(itemsParsed) ? itemsParsed : [itemsParsed]
      heroItems.value = rawItems.map((it, i) => ({
        id: it.id ?? i,
        title: it.title || '',
        contentHtml: it.content || '',
        icon: toHttps(it.icon || ''),
        link: it.link || null,
        image: toHttps(it.image || '')
      })).filter(item => item.title)
    }

    console.log('RealLife data loaded:', {
      badge: badgeText.value,
      hero: hero.value,
      items: heroItems.value.length
    })
  } catch (err) {
    console.error('Gagal parsing data RealLife:', err)
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