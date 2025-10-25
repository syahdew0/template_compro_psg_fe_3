<template>
  <div class="w-full overflow-hidden">
    <template v-if="isReady">
      <section class="mb-16">
        <KeunggulanPage :pageData="PageManagementData" />
      </section>

      <section id="PilarPSG" class="mb-10">
        <PilarPSG :pageData="PageManagementData" />
      </section>

      <section id="strategyConsultant" class="mb-16">
        <StrategyConsultant :pageData="PageManagementData" />
      </section>
      
      <section id="realLife" class="mb-16">
        <RealLife :pageData="PageManagementData" />
      </section>

      <section id="AboutPSG" class="mb-16">
        <AboutPSG :pageData="PageManagementData" />
      </section>

      <section id="ourTeam" class="mb-16">
        <OurTeam :pageData="PageManagementData" />
      </section>

      <section id="ourConsultant" class="mb-16">
        <OurConsultant :pageData="PageManagementData" />
      </section>

      <section id="guaranteedAccount" class="mb-16">
        <GuaranteedAccount :pageData="PageManagementData" />
      </section>

      <section id="OurClients" class="mb-16">
        <OurClients :pageData="PageManagementData" />
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

      <!-- <section id="contactpage2" class="mb-16">
        <contact-page2 :pageData="PageManagementData" />
      </section> -->

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
import { onMounted, ref, nextTick } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

// Import komponen halaman
import KeunggulanPage from '@/components/SliderHome.vue'
import AboutPSG from '@/components/AboutPSG.vue'
import OurClients from '@/components/OurClients.vue'
import PilarPSG from '@/components/PilarPSG.vue'
import StrategyConsultant from '@/components/StrategyConsultant.vue'
import AnakPerusahaan from '@/components/AnakPerusahaan.vue'
import contactPage from '@/components/ContactInfo.vue'
// import contactPage2 from '@/components/ContactForm.vue'
import CtaPage from '@/components/CtaPage.vue'
import GalerryPage from '@/components/GalerryPage.vue'
import RealLife from '@/components/RealLife.vue'
import OurTeam from '@/components/OurTeam.vue'
import OurConsultant from '@/components/OurConsultant.vue'
import GuaranteedAccount from '@/components/GuaranteedAccount.vue'

// State utama
const PageManagementData = ref({})
const isReady = ref(false)

// Lifecycle: Load data custom page
// onMounted(async () => {
//   try {
//     const localData = localStorage.getItem('customPageData:Home')
//     if (localData) {
//       PageManagementData.value = JSON.parse(localData)
//     }

//     const res = await axios.get(`${API_ENDPOINTS.customPages}?isFrontend=true&page=Home`)
//     const dataByTag = res.data?.data || {}

//     PageManagementData.value = dataByTag
//     localStorage.setItem('customPageData:Home', JSON.stringify(dataByTag))
//   } catch (err) {
//     console.error('Gagal load custom page:', err.response?.data || err.message)
//   } finally {
//     isReady.value = true
//   }
//   console.log(' DATA PageManagementData:', PageManagementData.value)

// })

onMounted(async () => {
  // Ambil dari localStorage dulu
  const localData = localStorage.getItem('customPageData:Home')
  if (localData) {
    PageManagementData.value = JSON.parse(localData)
  }

  try {
    // Coba fetch terbaru dari API
    const res = await axios.get(`${API_ENDPOINTS.customPages}?isFrontend=true&page=Home`)
    const dataByTag = res.data?.data || {}
    PageManagementData.value = dataByTag
    localStorage.setItem('customPageData:Home', JSON.stringify(dataByTag))
  } catch (err) {
    console.error('Gagal fetch data halaman:', err.response?.data || err.message)
  } finally {
    isReady.value = true

    // Scroll ke target jika ada
    nextTick(() => {
      const target = localStorage.getItem('scrollTarget')
      if (target) {
        const el = document.getElementById(target)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          localStorage.removeItem('scrollTarget')
        } else {
          // Retry sekali lagi jika belum muncul
          setTimeout(() => {
            const retryEl = document.getElementById(target)
            if (retryEl) {
              retryEl.scrollIntoView({ behavior: 'smooth' })
              localStorage.removeItem('scrollTarget')
            }
          }, 300)
        }
      }
    })
  }

  console.log(' DATA PageManagementData:', PageManagementData.value)
})


</script>
