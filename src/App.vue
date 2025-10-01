<template>
  <div class="w-screen min-h-screen flex flex-col overflow-auto">
    <!-- Navbar -->
    <Navbar :settings="settings" :menuItems="menuItems" />

    <!-- Main content -->
    <div class="flex-1 overflow-y-auto w-screen">
      <router-view :settings="settings" :menuItems="menuItems" />
    </div>

    <!-- Footer -->
    <Footer :settings="settings" />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';
import Navbar from './components/NavbarApp.vue';
import Footer from './components/FooterPage.vue';
import { API_ENDPOINTS } from '@/config/api';

const settings = ref(null);
const menuItems = ref([]);

// Tentukan menu group
const isLoggedIn = !!localStorage.getItem('customer_token');
const menuGroupSlug = isLoggedIn ? 'after-login' : 'main';

// Load settings dari localStorage (diambil dari main.js)
const loadSettings = () => {
  const cached = localStorage.getItem('siteInfo');
  if (cached) {
    settings.value = JSON.parse(cached);
  }
};

// Ambil menu berdasarkan group
const fetchMenu = async () => {
  try {
    const res = await axios.get(API_ENDPOINTS.menuListByGroup(menuGroupSlug));
    menuItems.value = res.data || [];
  } catch (err) {
    console.error('Gagal mengambil menu:', err);
  }
};

// Update document title jika settings berubah
watch(settings, (val) => {
  if (val?.site_title) {
    document.title = val.site_title;
  }
});

onMounted(async () => {
  loadSettings();
  await fetchMenu();
});
</script>

<style>
/* optional global styling */
</style>