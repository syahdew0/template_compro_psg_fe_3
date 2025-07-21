import { createRouter, createWebHistory } from 'vue-router'
import PageManagement from '@/views/PageManagement.vue'
// import CareersPage from '@/components/careers/CareersPage.vue'
// import NewsManager from '@/components/news/NewsManager.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: PageManagement,
  },
 {
  path: '/careers',
  name: 'careers',
  component: () => import('@/components/careers/CareersPage.vue'),
},
 {
  path: '/post',
  name: 'post',
  component: () => import('@/components/post/PostManager.vue'),
},
{
  path: '/post/:slug',
  name: 'post-detail',
  component: () => import('@/components/post/PostDetail.vue')
},
{
  path: '/careers/:slug',
  name: 'careers-detail',
  component: () => import('@/components/careers/CareersDetail.vue')
}

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
