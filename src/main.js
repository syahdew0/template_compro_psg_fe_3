import './public-path';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import { API_ENDPOINTS } from './config/api';
import './assets/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

async function initSiteInfo() {
  try {
    // Cek cache dulu
    const cached = localStorage.getItem('siteInfo');
    if (cached) return JSON.parse(cached);

    // Ambil site info → website_id
    const resInfo = await axios.get(API_ENDPOINTS.siteInfo());
    const WEBSITE_ID = resInfo.data.id || resInfo.data.website_id;

    // Ambil site settings public
    const resSite = await axios.get(API_ENDPOINTS.siteSettingsPublic(WEBSITE_ID));
    const siteData = resSite.data.settings || {};

    // Ambil logo & favicon dari field value (update terbaru)
    siteData.logo = siteData.logo?.value || siteData.logo || '';
    siteData.favicon = siteData.favicon?.value || siteData.favicon || '';

    // Normalisasi URL
    if (siteData.logo && !siteData.logo.startsWith('http')) {
      siteData.logo = `${window.APIS_URL}${siteData.logo}`;
    }
    if (siteData.favicon && !siteData.favicon.startsWith('http')) {
      siteData.favicon = `${window.APIS_URL}${siteData.favicon}`;
    }

    // Set document title
    document.title = siteData.site_title || siteData.title || 'Default Title';

    // Set favicon
    const existing = document.querySelector("link[rel='icon']");
    if (existing) existing.remove();
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = siteData.favicon || '/favicon.ico';
    document.head.appendChild(link);

    // Simpan ke localStorage
    localStorage.setItem('siteInfo', JSON.stringify(siteData));

    return siteData;
  } catch (err) {
    console.error('Gagal ambil site info/settings:', err);
    return {};
  }
}

async function bootstrapApp() {
  const siteData = await initSiteInfo();
  const app = createApp(App);
  app.provide('siteInfo', siteData); // opsional: inject ke komponen lain
  app.use(router);
  app.mount('#app');
}

bootstrapApp();