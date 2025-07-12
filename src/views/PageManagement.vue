<template>
  <div class="w-full overflow-hidden">
    <template v-if="isReady">
      <KeunggulanPage />

      <section id="AboutPSG">
        <AboutPSG /> 
      </section>

      <section id="OurClients">
        <OurClients />
      </section>

      <section id="PilarPSG">
        <PilarPSG />
      </section>

      <section id="AnakPerusahaan">
        <AnakPerusahaan />
      </section>

      <section id="GalerryPage">
        <GalerryPage/>
      </section>
      
      <section id="contactpage">
        <contact-page />
      
      </section>

      <section id="contactpage2">
        <contact-page2 />
      </section>

      <section id="CtaPage">
        <CtaPage/>
      </section>
     
    </template>

    <template v-else>
      <div class="py-20 text-center text-gray-500">Loading...</div>
    </template>
  </div>
</template>

<script setup>
import { onMounted, ref, provide } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

// Komponen
import KeunggulanPage from '@/components/SliderHome.vue';
import AboutPSG from '@/components/AboutPSG.vue';
import OurClients from '@/components/OurClients.vue';
import PilarPSG from '@/components/PilarPSG.vue';
import AnakPerusahaan from '@/components/AnakPerusahaan.vue';
import contactPage from '@/components/ContactPage.vue';
import contactPage2 from '@/components/ContactPage2.vue';
import CtaPage from '@/components/CtaPage.vue';
import GalerryPage from '@/components/GalerryPage.vue';

const PageManagementData = ref({})
const isReady = ref(false)

provide('PageManagementData', PageManagementData)

onMounted(async () => {
  try {
    const localData = localStorage.getItem('customPageData:Home')
    if (localData) {
      PageManagementData.value = JSON.parse(localData)
      isReady.value = true
    }

    const res = await axios.get(`${API_ENDPOINTS.customPages}?page=Home`)
    const dataByTag = res.data?.data || {}

    PageManagementData.value = dataByTag
    localStorage.setItem('customPageData:Home', JSON.stringify(dataByTag))
    isReady.value = true
  } catch (err) {
    console.error('Gagal load custom page:', err.response?.data || err.message)
    isReady.value = true // tetap render meskipun error
  }
})
</script>
