const badgeRaw = allData.badge_about
  const aboutRaw = allData.about_PSG1
  const visiRaw = allData.about_visi
  const skillsRaw = allData.about_skills3
  const solutionRaw =<template>
  <section class="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
    <!-- Left Side - Image with Overlay Text -->
    <div class="relative bg-gray-100 overflow-hidden">
      <img
        v-if="image"
        :src="image"
        alt="About Image"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      
      <!-- Content Overlay -->
      <div class="relative z-10 h-full flex flex-col justify-between p-8 sm:p-12 lg:p-16 text-white">
        <div>
          <span
            v-if="sliderBadge"
            class="inline-block bg-white text-gray-900 px-4 py-2 rounded text-sm font-semibold mb-6"
          >
            {{ sliderBadge }}
          </span>
          
          <h2 class="text-sm font-medium text-white mb-4 tracking-wide">{{ sliderSubtitle }}</h2>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">{{ title }}</h1>
          <p class="text-lg text-gray-100 leading-relaxed max-w-md" v-html="content"></p>
        </div>

        <div class="mt-auto">
          <button class="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>

    <!-- Right Side - Vision with Progress Bars -->
    <div class="bg-[#1e3a8a] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-12">{{ solutionTitle }}</h2>

        <!-- Progress Bars -->
        <div class="space-y-8">
          <div
            v-for="(skill, index) in skills"
            :key="index"
            class="group"
          >
            <div class="flex justify-between items-center mb-3">
              <span class="text-lg font-medium">{{ skill.title }}</span>
              <span class="text-xl font-bold">{{ skill.content }}%</span>
            </div>
            <div class="w-full h-3 bg-blue-900 rounded-full overflow-hidden">
              <div 
                class="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                :style="{ width: skill.content + '%' }"
              ></div>
            </div>
          </div>
        </div>

        <!-- <p v-if="visionContent" class="text-gray-200 leading-relaxed mt-8" v-html="visionContent"></p> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

/* global defineProps */
const props = defineProps({
  pageData: {
    type: Object,
    default: () => ({})
  }
})

const badge = ref('')
const subtitle = ref('')
const sliderBadge = ref('')
const sliderSubtitle = ref('')
const buttonText = ref('')
const title = ref('')
const content = ref('')
const image = ref('')
const visionTitle = ref('')
const visionContent = ref('')
const solutionTitle = ref('')
const skills = ref([])

function parse(data) {
  if (!data) return {}
  return typeof data === 'string' ? JSON.parse(data) : data
}

watchEffect(() => {
  const allData = props.pageData || {}

  const badgeRaw = allData.badge_about
  const aboutRaw = allData.about_PSG1
  const visiRaw = allData.about_visi
  const skillsRaw = allData.about_skills3
  const solutionRaw = allData.solution_right3
  const sliderAtributRaw = allData.sliderhome_atribut3
  const buttonRaw = allData.slider_primary_button3

  const badgeItems = parse(badgeRaw)
  const aboutItems = parse(aboutRaw)
  const visiItems = parse(visiRaw)
  const skillsItems = parse(skillsRaw)
  const solutionItems = parse(solutionRaw)
  const sliderAtributItems = parse(sliderAtributRaw)
  const buttonItems = parse(buttonRaw)

  badge.value = badgeItems?.title || ''
  subtitle.value = aboutItems?.subtitle || "Let's work on your project together"
  sliderBadge.value = sliderAtributItems?.title || 'Best solutions'
  sliderSubtitle.value = sliderAtributItems?.content || "Let's work on your project together"
  buttonText.value = buttonItems?.title || 'Get started today'
  title.value = aboutItems?.title || ''
  content.value = aboutItems?.content || ''
  image.value = aboutItems?.image || ''
  visionTitle.value = visiItems?.title || ''
  visionContent.value = visiItems?.content || ''
  solutionTitle.value = solutionItems?.title || 'The right solution for your business'

  // Parse skills from about_skills3
  if (skillsItems && Array.isArray(skillsItems)) {
    skills.value = skillsItems.map(skill => ({
      title: skill.title || '',
      content: parseInt(skill.content) || 0
    }))
  } else {
    // Fallback default skills
    skills.value = []
  }
})
</script>