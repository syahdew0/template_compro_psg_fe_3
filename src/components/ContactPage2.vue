<template>
    <section class="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <!-- Form Side -->
        <div>
          <p class="text-sm font-semibold text-blue-700 mb-2">{{ badge }}</p>
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-800 mb-1">{{ title }}</h2>
          <p class="text-gray-700 mb-6" v-html="content"></p>
  
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <input
              type="text"
              v-model="form.name"
              placeholder="Your Full Name"
              class="w-full border px-4 py-3 rounded-xl outline-none"
            />
            <div class="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                v-model="form.email"
                placeholder="Email Address"
                class="w-full border px-4 py-3 rounded-xl outline-none"
              />
              <input
                type="tel"
                v-model="form.phone"
                placeholder="Phone Number"
                class="w-full border px-4 py-3 rounded-xl outline-none"
              />
            </div>
            <input
              type="text"
              v-model="form.company"
              placeholder="Company Name"
              class="w-full border px-4 py-3 rounded-xl outline-none"
            />
            <textarea
              v-model="form.message"
              rows="4"
              placeholder="Message"
              class="w-full border px-4 py-3 rounded-xl outline-none"
            ></textarea>
  
            <button
              type="submit"
              class="bg-blue-800 text-white px-6 py-3 rounded hover:bg-blue-900 transition font-semibold"
            >
              {{ buttonText }}
            </button>
          </form>
        </div>
  
        <!-- Image Section -->
        <div class="relative w-full h-[300px]">
          <div class="absolute bottom-5 left-5 w-4/5 h-4/5 bg-[#60C7ED] rounded-[10px] z-0"></div>
          <img
            :src="getImage(image)"
            alt="Form Image"
            class="absolute top-0 left-0 w-4/5 rounded-[10px] border-4 border-white shadow-xl z-10"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import { API_ENDPOINTS } from '@/config/api'
  
  const badge = ref('')
  const title = ref('')
  const content = ref('')
  const image = ref('')
  const buttonText = ref('Send Message')
  
  const form = ref({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  
  function getImage(src) {
    if (!src) return '/no-image.jpg'
    return src.startsWith('http') ? src : `${API_ENDPOINTS.baseURL}${src}`
  }
  
  const loadTag = async (tag) => {
    try {
      const res = await axios.get(`${API_ENDPOINTS.customPages}?tag=${tag}`)
      const item = res.data?.[0]
      if (!item) return null
      const parsed = typeof item.items === 'string' ? JSON.parse(item.items) : item.items
      return parsed
    } catch (err) {
      console.error(`Gagal load tag ${tag}:`, err)
      return null
    }
  }
  
  onMounted(async () => {
    const badgeData = await loadTag('Home-contact_form_badge')
    if (badgeData) badge.value = badgeData.title || ''
  
    const titleData = await loadTag('Home-contact_form_title')
    if (titleData) {
      title.value = titleData.title || ''
      content.value = titleData.content || ''
      image.value = titleData.image || ''
    }
  
    const buttonData = await loadTag('Home-contact_form_button')
    if (buttonData) buttonText.value = buttonData.title || 'Send Message'
  
    // Optional: auto-generate form keys from backend schema `Home-contact_form_fields`
    const fieldsData = await loadTag('Home-contact_form_fields')
    if (fieldsData?.fields?.length) {
      for (const field of fieldsData.fields) {
        if (!(field.name in form.value)) {
          form.value[field.name] = ''
        }
      }
    }
  })
  
  const handleSubmit = async () => {
    try {
      await axios.post('/contact-submit', form.value)
      alert('Message sent!')
      Object.keys(form.value).forEach(key => (form.value[key] = ''))
    } catch (e) {
      console.error(e)
      alert('Failed to send.')
    }
  }
  </script>
  