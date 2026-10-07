<template>
  <nav class="absolute top-0 left-0 right-0 w-full z-50 bg-transparent">
    <div class="flex items-center px-6 md:px-10 py-4 lg:px-16">
      <!-- Logo & Title -->
      <div class="flex items-center space-x-3 lg:flex-1">
        <img v-if="logoUrl" :src="logoUrl" alt="Logo" class="h-12 w-auto" />
        <div class="text-white">
          <p class="text-xl font-semibold text-wide">{{ title }}</p>
        </div>
      </div>

      <!-- Desktop Menu (Centered) -->
      <div class="hidden lg:flex space-x-1 items-center justify-center lg:flex-1">
        <button
          v-for="menu in menus"
          :key="menu.id"
          @click="navigateOrScroll(menu)"
          class="relative text-white text-sm font-medium tracking-wide px-4 py-2 hover:bg-white/10 transition-all duration-300 rounded"
        >
          {{ menu.title }}
          <span
            v-if="isActiveMenu(menu)"
            class="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
          ></span>
        </button>
      </div>
      
      <!-- Contact Button (Right) -->
      <div class="hidden lg:flex items-center justify-end lg:flex-1">
        <component
          :is="contactButton.link
                ? (isExternal(contactButton.link) ? 'a' : 'router-link')
                : 'button'"
          v-if="contactButton.text || contactButton.link"
          :href="contactButton.link && isExternal(contactButton.link) ? contactButton.link : null"
          :to="contactButton.link && !isExternal(contactButton.link) ? contactButton.link : null"
          class="flex items-center space-x-2 border-2 border-white text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-[#1e3a8a] transition-all duration-300"
          :target="contactButton.link && isExternal(contactButton.link) ? '_blank' : null"
          rel="noopener noreferrer"
        >
          <!-- Dynamic Icon -->
          <img 
            v-if="contactButton.icon" 
            :src="contactButton.icon" 
            alt="icon" 
            class="w-4 h-4 object-contain"
          />
          <!-- Fallback SVG Icon -->
          <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>{{ contactButton.text }}</span>
        </component>
      </div>

      <!-- Hamburger Button -->
      <button
        class="lg:hidden relative w-10 h-10 flex flex-col justify-center items-center focus:outline-none ml-auto"
        @click.stop="toggleMenu"
        aria-label="Toggle menu"
      >
        <span
          class="block h-0.5 w-6 bg-white rounded transition-all duration-300 absolute"
          :class="menuOpen ? 'rotate-45' : '-translate-y-2'"
        ></span>
        <span
          class="block h-0.5 w-6 bg-white rounded transition-all duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        ></span>
        <span
          class="block h-0.5 w-6 bg-white rounded transition-all duration-300 absolute"
          :class="menuOpen ? '-rotate-45' : 'translate-y-2'"
        ></span>
      </button>
    </div>

    <!-- Mobile Overlay -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black/50 z-40 lg:hidden"
        @click="closeMenu"
      ></div>
    </transition>

    <!-- Mobile Menu -->
    <transition name="slide">
      <div
        v-if="menuOpen"
        class="fixed top-0 right-0 h-screen w-80 bg-[#1e3a8a] shadow-2xl z-50 lg:hidden overflow-y-auto"
      >
        <!-- Close Button -->
        <div class="flex justify-end p-6">
          <button
            @click="closeMenu"
            class="text-white hover:text-gray-300 transition-colors"
            aria-label="Close menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div class="flex flex-col px-6 space-y-4 pb-6">
          <button
            v-for="menu in menus"
            :key="menu.id"
            @click="handleMobileClick(menu)"
            class="text-left text-white text-base font-medium py-3 px-4 hover:bg-white/10 rounded transition-all"
            :class="isActiveMenu(menu) ? 'bg-white/20' : ''"
          >
            {{ menu.title }}
          </button>

          <!-- Mobile Contact Button -->
          <component
            :is="contactButton.link
                  ? (isExternal(contactButton.link) ? 'a' : 'router-link')
                  : 'button'"
            v-if="contactButton.text || contactButton.link"
            :href="contactButton.link && isExternal(contactButton.link) ? contactButton.link : null"
            :to="contactButton.link && !isExternal(contactButton.link) ? contactButton.link : null"
            @click="closeMenu"
            class="flex items-center justify-center space-x-2 border-2 border-white text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-[#1e3a8a] transition-all duration-300 mt-4"
            :target="contactButton.link && isExternal(contactButton.link) ? '_blank' : null"
            rel="noopener noreferrer"
          >
            <!-- Dynamic Icon -->
            <img 
              v-if="contactButton.icon" 
              :src="contactButton.icon" 
              alt="icon" 
              class="w-4 h-4 object-contain"
            />
            <!-- Fallback SVG Icon -->
            <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{{ contactButton.text }}</span>
          </component>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick, watchEffect } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import axios from 'axios'
import { API_ENDPOINTS, API_URL } from '@/config/api'

/* global defineProps */
const props = defineProps({
  pageData: {
    type: Object,
    default: () => ({})
  }
})

const router = useRouter()
const route = useRoute()
const menuOpen = ref(false)
const menus = ref([])
const logoUrl = ref('')
const title = ref('Pasifik Sukses Gemilang')
const siteDescription = ref('Mitra Sukses Bersama')
const contactButton = ref({
  text: 'Contact Us',
  link: '#valuableBusiness',
  icon: ''
})
const websiteId = 1

// Fungsi parse yang lebih robust
function parse(data) {
  if (!data) return {}
  if (typeof data === 'object') return data
  
  try {
    return JSON.parse(data)
  } catch (e) {
    console.warn('Failed to parse data:', e)
    return {}
  }
}

// Fungsi untuk mendapatkan item berdasarkan tag
function getItemByTag(tag, allData) {
  if (!allData) return null
  
  // Cari key yang cocok (case-insensitive)
  const foundKey = Object.keys(allData).find(k => 
    k.toLowerCase() === String(tag).toLowerCase()
  )
  
  if (!foundKey) {
    console.log(`Tag "${tag}" not found in pageData`)
    return null
  }
  
  const section = allData[foundKey]
  
  if (!section) return null

  const parseItem = (item) => {
    const parsed = parse(item)
    // Jika ada nested items, parse juga
    if (parsed.items) {
      return parse(parsed.items)
    }
    return parsed
  }
  
  return Array.isArray(section) 
    ? section.map(parseItem) 
    : [parseItem(section)]
}

// Toggle menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

// Close menu
const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

// Check if menu is active
const isActiveMenu = (menu) => {
  if (!menu?.path) return false
  if (menu.path === '#' && route.path === '/') return true
  if (menu.path.startsWith('#')) return false
  return route.path === menu.path
}

// Scroll to element helper
const scrollToElement = (id) => {
  nextTick(() => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

// Navigate or scroll
const navigateOrScroll = (menu) => {
  if (!menu?.path) return

  if (menu.path.startsWith('#')) {
    const targetId = menu.path.slice(1)

    if (!targetId) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (route.path !== '/') {
      localStorage.setItem('scrollTarget', targetId)
      router.push('/')
    } else {
      scrollToElement(targetId)
    }
  } else {
    router.push(menu.path)
  }
}

// Mobile click handler
const handleMobileClick = (menu) => {
  closeMenu()
  navigateOrScroll(menu)
}

// Helper untuk join URL
const joinUrl = (base, path) => {
  if (!path) return base
  return base.replace(/\/+$/, '') + '/' + String(path).replace(/^\/+/, '')
}

// Fetch logo dengan logika dari NavbarApp copy.vue
const fetchLogo = async () => {
  try {
    const res = await axios.get(API_ENDPOINTS.settingLogo)
    const raw = res?.data || {}
    
    const candidate =
      raw.logo ||
      raw.icon ||
      raw.value ||
      raw?.data?.logo ||
      raw?.data?.icon ||
      raw?.data?.value ||
      ''

    if (candidate) {
      logoUrl.value = String(candidate).startsWith('http')
        ? candidate
        : joinUrl(API_URL, candidate)
    }
  } catch (err) {
    console.error('Error fetch logo:', err)
  }
}

// Fetch site settings dengan logika dari NavbarApp copy.vue
const fetchSiteSettings = async () => {
  try {
    const res = await axios.get(API_ENDPOINTS.siteSettingsPublic(websiteId))
    const settings = res.data?.settings || res.data?.data || res.data
    
    if (settings) {
      title.value = settings.title || settings.site_title || title.value
      siteDescription.value = settings.site_description || settings.description || siteDescription.value
    }
  } catch (err) {
    console.error('Error fetch site settings:', err)
  }
}

// Fetch menu dengan logika dari NavbarApp copy.vue
const fetchMenu = async () => {
  try {
    const groupSlug = window.MENU_GROUP_SLUG || 'main'
    const res = await axios.get(API_ENDPOINTS.menuListByGroup(groupSlug))

    menus.value = (res.data?.data || res.data || [])
      .sort((a, b) => {
        if (a.order !== b.order) return a.order - b.order
        return a.id - b.id
      })
      .map((m) => ({
        ...m,
        path: m.path || m.link || '/',
        title: m.title || 'Tanpa Judul',
        target: m.open_in_new_tab ? '_blank' : '_self',
      }))
    
    console.log('Menu berhasil dimuat:', menus.value)
  } catch (err) {
    console.error('Error fetch menu:', err)
  }
}

function isExternal(link) {
  return /^https?:\/\//.test(link)
}

// Watch untuk pageData changes - untuk contact_us2
watchEffect(() => {
  const allData = props.pageData || {}
  
  // Ambil data dari contact_us2
  const contactUs2Data = getItemByTag('contact_us2', allData)
  
  if (contactUs2Data && contactUs2Data.length > 0) {
    const data = contactUs2Data[0]
    
    // Extract data dengan berbagai kemungkinan field names
    const extracted = {
      text: data.title || data.text || data.name || 'Contact Us',
      link: data.link || data.content || data.url || '#valuableBusiness',
      icon: data.icon || data.image || ''
    }
    
    // Pastikan icon adalah full URL jika bukan http
    if (extracted.icon && !extracted.icon.startsWith('http')) {
      extracted.icon = joinUrl(API_URL, extracted.icon)
    }
    
    // Update contactButton
    contactButton.value = {
      text: extracted.text,
      link: extracted.link,
      icon: extracted.icon
    }
    
    console.log('Contact button updated:', contactButton.value)
  }
})

onMounted(async () => {
  // Fetch semua data secara berurutan
  await fetchLogo()
  await fetchSiteSettings()
  await fetchMenu()

  // Handle scroll target dari localStorage
  const scrollTarget = localStorage.getItem('scrollTarget')
  if (scrollTarget) {
    nextTick(() => {
      scrollToElement(scrollTarget)
      localStorage.removeItem('scrollTarget')
    })
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<style scoped>
nav {
  font-family: 'Inter', sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>