import { createRouter, createWebHistory } from 'vue-router'
import PageManagement from '@/views/PageManagement.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: PageManagement,
  },
]

const base = process.env.VUE_APP_BASE_PATH || '/'
const router = createRouter({
  history: createWebHistory(base),
  routes,
// })

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
