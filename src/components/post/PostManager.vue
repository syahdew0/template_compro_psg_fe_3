<template>
  <section class="min-h-screen bg-gradient-to-b from-white to-gray-50 py-28 px-4 lg:px-24">
    <div class="text-center mb-16">
      <h1 class="text-2xl font-reguler text-gray-800 tracking-tight mb-4">
        Pasifik Sukses Gemilang News
      </h1>
    </div>

    <!-- Jika tidak ada postingan -->
    <div v-if="posts.length === 0" class="text-center text-gray-500 text-sm mt-20">
      <p>Belum ada postingan yang tersedia saat ini.</p>
    </div>

    <!-- Grid Postingan -->
    <div v-else class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="post in posts"
        :key="post.id"
        class="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
      >
        <router-link :to="`/post/${post.slug}`">
          <div class="overflow-hidden aspect-video">
            <img
              :src="getImageUrl(post.thumbnail_url)"
              alt="Thumbnail"
              class="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
          </div>
          <div class="p-6">
            <p class="text-xs text-gray-400 mb-1">
              Dipublikasikan pada {{ formatDate(post.published_at || post.created_at) }}
            </p>
            <h2 class="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {{ post.title }}
            </h2>
            <p class="text-sm text-gray-600 line-clamp-3">
              {{ post.excerpt || post.content?.slice(0, 150) }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { API_ENDPOINTS } from '@/config/api'

const posts = ref([])

function getImageUrl(path) {
  if (!path) return 'https://via.placeholder.com/600x400?text=No+Image'
  return path.startsWith('http') ? path : `${API_ENDPOINTS.media}${path}`
}

onMounted(async () => {
  try {
    const res = await axios.get(`${API_ENDPOINTS.posts}?type=post`)
   posts.value = res.data.data.filter(post =>
  post.status === 'published' &&
  Array.isArray(post.post_categories) &&
  post.post_categories.some(pc => pc.category?.slug === 'post')
)
  } catch (err) {
    console.error('Gagal memuat postingan:', err)
  }
})

function formatDate(dateStr) {
  const date = new Date(dateStr)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.aspect-video {
  aspect-ratio: 16 / 9;
}
</style>
