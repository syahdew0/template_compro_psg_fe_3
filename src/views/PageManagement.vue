<template>
  <div class="w-full overflow-hidden">
    <template v-if="isReady">
      <section class="mb-16">
        <KeunggulanPage :pageData="PageManagementData" />
      </section>

      <section id="AboutPSG" class="mb-16">
        <AboutPSG :pageData="PageManagementData" />
      </section>

      <section id="OurClients" class="mb-16">
        <OurClients :pageData="PageManagementData" />
      </section>

      <section id="PilarPSG" class="mb-16">
        <PilarPSG :pageData="PageManagementData" />
      </section>

      <section id="AnakPerusahaan" class="mb-16">
        <AnakPerusahaan :pageData="PageManagementData" />
      </section>

      <section id="GalerryPage" class="mb-16">
        <GalerryPage :pageData="PageManagementData" />
      </section>

      <section id="contactpage" class="mb-16">
        <contact-page :pageData="PageManagementData" />
      </section>

      <section id="contactpage2" class="mb-16">
        <contact-page2 :pageData="PageManagementData" />
      </section>

      <section id="CtaPage" class="mb-16">
        <CtaPage :pageData="PageManagementData" />
      </section>
    </template>

    <template v-else>
      <div class="py-20 text-center text-gray-500">Loading...</div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

// Import komponen halaman
import KeunggulanPage from '@/components/SliderHome.vue'
import AboutPSG from '@/components/AboutPSG.vue'
import OurClients from '@/components/OurClients.vue'
import PilarPSG from '@/components/PilarPSG.vue'
import AnakPerusahaan from '@/components/AnakPerusahaan.vue'
import contactPage from '@/components/ContactInfo.vue'
import contactPage2 from '@/components/ContactForm.vue'
import CtaPage from '@/components/CtaPage.vue'
import GalerryPage from '@/components/GalerryPage.vue'

// State utama
const PageManagementData = ref({})
const isReady = ref(false)

// Lifecycle: Load data custom page
onMounted(async () => {
  try {
    const localData = localStorage.getItem('customPageData:Home')
    if (localData) {
      PageManagementData.value = JSON.parse(localData)
    }

    const res = await axios.get(`${API_ENDPOINTS.customPages}?isFrontend=true&page=Home`)
    const dataByTag = res.data?.data || {}

    PageManagementData.value = dataByTag
    localStorage.setItem('customPageData:Home', JSON.stringify(dataByTag))
  } catch (err) {
    console.error('Gagal load custom page:', err.response?.data || err.message)
  } finally {
    isReady.value = true
  }
  console.log('✅ DATA PageManagementData:', PageManagementData.value)

})
</script>
