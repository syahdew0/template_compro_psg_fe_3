<template>
    <div class="flex flex-col lg:flex-row gap-6 py-10 px-6 bg-gray-50">
      <!-- Daftar Anak Perusahaan -->
      <div class="w-full lg:w-1/2 bg-white rounded shadow">
        <h3 class="text-blue-700 font-semibold mb-2 px-4 pt-4">{{ badge }}</h3>
        <h2 class="text-2xl font-semibold px-4">{{ title }}</h2>
        <p class="text-gray-500 px-4 mb-4" v-html="content"></p>
        <ul>
          <li
            v-for="(company, index) in companies"
            :key="index"
            @click="selectedCompany = index"
            :class="[
              'flex items-start gap-3 px-4 py-3 cursor-pointer border-l-4',
              selectedCompany === index ? 'bg-blue-50 border-blue-600' : 'border-transparent hover:bg-gray-100'
            ]"
          >
            <img :src="company.logo" alt="logo" class="w-8 h-8 mt-1 object-contain" />
            <div>
              <p class="font-semibold">{{ company.name }}</p>
              <p class="text-sm text-gray-500" v-html="company.desc"></p>
            </div>
          </li>
        </ul>
      </div>
  
      <!-- Produk dari Anak Perusahaan -->
      <div class="w-full lg:w-1/2 bg-white rounded shadow p-6">
        <h4 class="font-semibold mb-4">Produk {{ companies[selectedCompany]?.name }}</h4>
        <div class="space-y-4">
          <div
            v-for="(product, idx) in companies[selectedCompany]?.products || []"
            :key="idx"
            class="flex justify-between items-center border-b pb-3"
          >
            <div class="flex items-center gap-3">
              <img :src="product.image" alt="product" class="w-14 h-14 object-contain" />
              <p class="font-medium text-gray-800">{{ product.name }}</p>
            </div>
            <a :href="product.link" target="_blank" rel="noopener" class="text-blue-600 hover:text-blue-800">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { API_ENDPOINTS } from '@/config/api'
  
  const badge = ref('')
  const title = ref('')
  const content = ref('')
  const companies = ref([])
  const selectedCompany = ref(0)
  
  onMounted(async () => {
    try {
      // Ambil badge
      const badgeRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-anak_perusahaan_badge`)
      const badgeItem = badgeRes.data?.[0]
      if (badgeItem) {
        const parsed = typeof badgeItem.items === 'string' ? JSON.parse(badgeItem.items) : badgeItem.items
        badge.value = parsed.title || ''
      }
  
      // Ambil title dan deskripsi
      const titleRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-anak_perusahaan_title`)
      const titleItem = titleRes.data?.[0]
      if (titleItem) {
        const parsed = typeof titleItem.items === 'string' ? JSON.parse(titleItem.items) : titleItem.items
        title.value = titleItem.title || ''
        content.value = parsed.content || ''
      }
  
      // Ambil daftar perusahaan dan produk
      const dataRes = await axios.get(`${API_ENDPOINTS.customPages}?tag=Home-anak_perusahaan`)
      const dataItem = dataRes.data?.[0]
      if (dataItem) {
        const parsed = typeof dataItem.items === 'string' ? JSON.parse(dataItem.items) : dataItem.items
        companies.value = parsed.companies || []
      }

      for (const company of companies.value) {
        const tag = company.product_tag
        if (tag) {
            const res = await axios.get(`${API_ENDPOINTS.customPages}?tag=${tag}`)
            const item = res.data?.[0]
            if (item) {
            const parsed = typeof item.items === 'string' ? JSON.parse(item.items) : item.items
            company.products = parsed.products || []
            }
        }
        }

    } catch (err) {
      console.error('Gagal memuat data anak perusahaan:', err)
    }
  })
  </script>
  