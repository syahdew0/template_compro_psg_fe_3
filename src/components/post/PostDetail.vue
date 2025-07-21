<template>
  <section class="min-h-screen bg-white py-28 px-4 lg:px-24">
    <div v-if="post" class="max-w-4xl mx-auto">
      <!-- Gambar Utama -->
      <div v-if="post.thumbnail_url" class="overflow-hidden rounded-3xl shadow mb-8 aspect-video">
        <img
          :src="getImageUrl(post.thumbnail_url)"
          alt="Post Image"
          class="w-full h-full object-cover"
        />
      </div>
        <router-link
        to="/news"
        class="inline-block mb-6 text-sm text-blue-600 hover:underline hover:text-blue-800"
        >
        ← Kembali ke news
        </router-link>
      <!-- Judul & Info -->
      <h1 class="text-4xl font-bold text-gray-800 mb-4">{{ post.title }}</h1>
      <p class="text-sm text-gray-500 mb-10">
        Dipublikasikan pada {{ formatDate(post.published_at || post.created_at) }}
      </p>

      <!-- Konten -->
      <div
        class="prose prose-lg max-w-none text-gray-800"
        v-html="post.content"
      ></div>
    </div>

    <!-- Loading atau Not Found -->
    <div v-else class="text-center text-gray-400 text-lg">
      <p>Postingan tidak ditemukan.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

const route = useRoute()
const post = ref(null)

function getImageUrl(path) {
  if (!path) return 'https://via.placeholder.com/600x400?text=No+Image'
  return path.startsWith('http') ? path : `${API_ENDPOINTS.media}${path}`
}

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

onMounted(async () => {
  try {
    const slug = route.params.slug
    const res = await axios.get(API_ENDPOINTS.postBySlug(slug))
    console.log('RESPONS DARI API:', res.data)
    post.value = res.data
  } catch (err) {
    console.error('Gagal memuat detail postingan:', err)
  }
})

</script>

<style scoped>
.prose img {
  border-radius: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
