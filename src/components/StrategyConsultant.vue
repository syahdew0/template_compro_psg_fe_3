<template>
  <section class="container mx-auto px-2 md:px-2 lg:px-12 py-4 md:py-10 lg:py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 px-2 md:px-2 lg:px-12">
      <!-- Kolom per item (maks 2 item) -->
      <div
  v-for="(item, idx) in visibleItems"
  :key="idx"
  class="relative bg-gray-900 overflow-hidden h-[250px] md:h-[290px] lg:h-[320px] group cursor-pointer transform transition-transform duration-500 hover:scale-105"
        @mouseenter="handleHover(idx, true)"
        @mouseleave="handleHover(idx, false)"
      >
      <!-- Background Image -->
      <img
  v-if="item.image"
  :src="item.image"
  :alt="`About Image ${idx + 1}`"
  class="absolute inset-0 w-full h-full object-cover object-left transition-transform duration-500 ease-out"
/>
      
      <!-- Overlay Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>

      <!-- Content Container -->
<div class="relative z-10 h-full p-8 md:p-12 lg:p-16 xl:p-20">
  <!-- Text Content (diposisikan kiri-bawah) -->
  <div
  class="absolute left-6 md:left-14 bottom-12 md:bottom-16 max-w-md
         transform translate-y-2 md:translate-y-3">
    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug mb-3 md:mb-5 text-white">
      {{ item.title }}
    </h2>
    <div class="text-base md:text-lg text-gray-100 leading-relaxed" v-html="item.contentHtml">
    </div>
  </div>

  <!-- Arrow Button (pojok kanan bawah) -->
  <button
  class="absolute bottom-0 right-0 bg-white hover:bg-gray-100 text-black p-4 md:p-5
         transition-transform duration-300 hover:scale-105 rounded-none"
    aria-label="Learn more"
  >
    <svg class="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
    </svg>
  </button>
</div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

/* global defineProps*/
const props = defineProps({
  pageData: { type: Object, default: () => ({}) },
  // kalau nanti mau ubah jumlah kolom/item
  maxItems: { type: Number, default: 2 }
})

const items = ref([])
const hoveredIndex = ref(null)

function handleHover(index, isHovered) {
  hoveredIndex.value = isHovered ? index : null
}

function safeParse(maybeJson) {
  if (typeof maybeJson !== 'string') return maybeJson ?? {}
  try { return JSON.parse(maybeJson) } catch { return maybeJson }
}

function toHtml(content) {
  if (Array.isArray(content)) {
    // array string -> paragraf
    return content.map(p => `<p>${p}</p>`).join('')
  }
  return typeof content === 'string' ? content : ''
}

function normalizeUrl(img) {
  if (!img || typeof img !== 'string') return ''
  if (/^https?:\/\//i.test(img)) return img
  const base = (typeof window !== 'undefined' && window.APIS_URL) ? window.APIS_URL : ''
  return base ? `${base}${img.startsWith('/') ? '' : '/'}${img}` : img
}

function extractOne(raw) {
  const src = safeParse(raw?.value ?? raw ?? {})
  const title = src.title ?? src.heading ?? ''
  const content = src.content ?? src.description ?? ''
  const image = normalizeUrl(src.image ?? src.img ?? '')
  return { title, contentHtml: toHtml(content), image }
}

function pickSource(data) {
  // sesuaikan bila key backend berbeda
  return (
    data?.strategy_consultant3 ??
    data?.strategy_consultant ??
    data?.about_section ??
    data?.about ??
    data
  )
}

function rebuildItems(data) {
  const raw = pickSource(data)
  let candidate = raw?.value ?? raw

  // Jika string JSON, parse dulu
  if (typeof candidate === 'string') candidate = safeParse(candidate)

  if (Array.isArray(candidate)) {
    items.value = candidate.map(extractOne).filter(i => i && (i.title || i.contentHtml || i.image))
  } else {
    const one = extractOne(candidate)
    items.value = (one.title || one.contentHtml || one.image) ? [one] : []
  }
}

const visibleItems = computed(() => items.value.slice(0, props.maxItems))

watch(() => props.pageData, (val) => rebuildItems(val || {}), { immediate: true })
</script>

