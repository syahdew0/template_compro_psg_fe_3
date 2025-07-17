import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios'; // ⬅️ import axios
import { API_ENDPOINTS } from './config/api'; // ⬅️ pastikan path ini sesuai
import './assets/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

async function setFaviconFromAPI() {
  try {
    const res = await axios.get(API_ENDPOINTS.favicon);
    const faviconUrl = res.data.value;

    if (faviconUrl) {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = faviconUrl;
      link.type = 'image/x-icon';

      // Hapus favicon lama jika ada
      const existingFavicon = document.querySelector('link[rel="icon"]');
      if (existingFavicon) {
        document.head.removeChild(existingFavicon);
      }

      document.head.appendChild(link);
      console.log(' Favicon berhasil disetel dari API:', faviconUrl);
    } else {
      console.warn(' Favicon URL kosong');
    }
  } catch (error) {
    console.error(' Gagal mengambil favicon dari API:', error);
  }
}

async function bootstrapApp() {
  await setFaviconFromAPI(); // ⬅️ Tunggu favicon selesai
  createApp(App).use(router).mount('#app');
}

bootstrapApp();
