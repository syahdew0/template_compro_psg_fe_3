<template>
  <section class="py-16 px-4 sm:px-6 lg:px-20 bg-white relative ">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      <!-- Text Content -->
      <div>
        <p
          class="text-sm font-semibold text-blue-700 mb-2"
          v-if="badge"
        >
          {{ badge }}
        </p>
        <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">{{ title }}</h2>
        <p class="mt-4 text-gray-600 leading-relaxed" v-html="content"></p>

        <!-- Visi Kami -->
        <div v-if="visionTitle || visionContent" class="mt-8 ">
          <h3 class="text-2xl font-semibold text-gray-800 mb-2">{{ visionTitle }}</h3>
          <p class="text-gray-700 italic leading-relaxed" v-html="visionContent"></p>
        </div>
      </div>

<!-- Image -->
<div class="relative w-full min-h-[320px] h-full flex items-center justify-center">
  <div class="absolute w-[90%] h-[90%] bg-[#60C7ED] rounded-[10px] z-0"></div>
  <img
    v-if="image"
    :src="image"
    alt="About Image"
    class="relative z-10 w-[90%] h-auto max-h-full object-contain rounded-[10px]"
  />
</div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const badge = ref('')
const title = ref('')
const content = ref('')
const image = ref('')
const visionTitle = ref('')
const visionContent = ref('')

onMounted(() => {
  const raw = localStorage.getItem('customPageData:Home')
  if (!raw) return console.warn(' Data Home belum ada di localStorage')

  try {
    const data = JSON.parse(raw)

    const badgeRaw = data.badge_about
    const aboutRaw = data.About_PSG
    const visiRaw = data.about_visi

    const badgeItems = typeof badgeRaw === 'string' ? JSON.parse(badgeRaw) : badgeRaw
    const aboutItems = typeof aboutRaw === 'string' ? JSON.parse(aboutRaw) : aboutRaw
    const visiItems = typeof visiRaw === 'string' ? JSON.parse(visiRaw) : visiRaw

    badge.value = badgeItems?.title || ''
    title.value = aboutItems?.title || ''
    content.value = aboutItems?.content || ''
    image.value = aboutItems?.image || ''
    visionTitle.value = visiItems?.title || ''
    visionContent.value = visiItems?.content || ''
  } catch (err) {
    console.error(' Error parsing localStorage data:', err)
  }
})
</script>
