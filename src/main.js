import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'; 
import { API_ENDPOINTS } from './config/api'; 
import './assets/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

async function initSiteInfo() {
  try {
    const resSite = await axios.get(API_ENDPOINTS.siteSettingsPublic());
    const siteData = resSite.data.settings;

    if (siteData.site_title) {
      document.title = siteData.site_title; // <-- gunakan site_title dari admin
    } else if (siteData.title) {
      document.title = siteData.title;
    }

    // favicon
    const resFav = await axios.get(API_ENDPOINTS.favicon());
    const favData = resFav.data;

    if (favData.value) {
      const existing = document.querySelector("link[rel='icon']");
      if (existing) existing.remove();

      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/x-icon";
      link.href = favData.value.startsWith('http')
        ? `${favData.value}?v=${Date.now()}`
        : `${favData.apiUrl}${favData.value}?v=${Date.now()}`;

      document.head.appendChild(link);
    }
  } catch (err) {
    console.error('Gagal ambil site info atau favicon:', err);
  }
}

async function bootstrapApp() {
  await initSiteInfo(); 

  const app = createApp(App);
  app.use(router);
  app.mount('#app');
}

bootstrapApp();
