import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'; 
import { API_ENDPOINTS } from './config/api'; 
import './assets/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

async function initSiteInfo() {
  try {
    const resSite = await axios.get(API_ENDPOINTS.siteInfo());
    const siteData = resSite.data;

    document.title = siteData.title || 'Website';

    if (siteData.icon) {
      const existing = document.querySelector("link[rel='icon']");
      if (existing) existing.remove();

      const link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/x-icon";
      link.href = siteData.icon.startsWith('http') 
        ? siteData.icon 
        : `${siteData.apiUrl}${siteData.icon}?v=${Date.now()}`;

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
