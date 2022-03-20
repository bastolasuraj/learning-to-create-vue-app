import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoryPage from '../pages/MemoryPage.vue';
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path:'/memories',
    component: MemoryPage
  },
  {
    path:'/memories/:id',
    component: ()=>import("../pages/MemoryDetails.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
