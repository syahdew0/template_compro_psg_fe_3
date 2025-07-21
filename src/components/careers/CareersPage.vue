<template>
  <div class="px-6 py-28 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-3xl font-reguler text-gray-800 mb-4">Lowongan Pekerjaan di Perusahaan Kami</h1>
      <p class="text-gray-600 text-sm max-w-2xl mx-auto">
        Temukan peluang terbaik untuk bergabung bersama kami.
      </p>
    </div>

    <!-- Grid Image + Title -->
    <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-3">
      <router-link
        v-for="job in jobs"
        :key="job.id"
        :to="`/careers/${job.slug}`"
        class="block group relative overflow-hidden rounded shadow hover:shadow-lg transition"
      >
        <img
          :src="job.thumbnail_url"
          :alt="job.title"
          class="w-full h-90 object-cover group-hover:scale-105 transition duration-300"
        />
        <div class="bg-white px-3 py-2 text-sm font-medium text-gray-800 group-hover:text-blue-600 transition">
          {{ job.title }}
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { API_ENDPOINTS } from '@/config/api.js'

const jobs = ref([])

onMounted(async () => {
  try {
    const res = await fetch(API_ENDPOINTS.allPosts())
    const json = await res.json()
    const posts = Array.isArray(json.data) ? json.data : []

    jobs.value = posts.filter(post =>
      Array.isArray(post.post_categories) &&
      post.post_categories.some(pc =>
        pc.category?.slug?.toLowerCase() === 'karir'
      ) &&
      post.thumbnail_url
    )
  } catch (err) {
    console.error('Gagal memuat postingan:', err)
  }
})
</script>
