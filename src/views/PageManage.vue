<template>
  <div class="w-full overflow-hidden">
    <!-- Komponen halaman -->
    <KeunggulanPage />
    
    <section class="">
      <AboutPSG />
      <OurClients />
    </section>

    <PilarPSG/>
    <AnakPerusahaan/>
    <GalerryPage/>

    <!-- <PromoPage /> -->
     <contact-page />
     <contact-page2 />
     <CtaPage/>
  </div>
</template>

<script setup>
import KeunggulanPage from '@/components/SliderHome.vue';
import AboutPSG from '@/components/AboutPSG.vue';
import OurClients from '@/components/OurClients.vue';
import PilarPSG from '@/components/PilarPSG.vue';
import AnakPerusahaan from '@/components/AnakPerusahaan.vue';
// import PromoPage from '@/components/promoPage.vue';
import contactPage from '@/components/ContactPage.vue';
import contactPage2 from '@/components/ContactPage2.vue';
import CtaPage from '@/components/CtaPage.vue';
import GalerryPage from '@/components/GalerryPage.vue';

</script>
