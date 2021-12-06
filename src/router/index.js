import { createRouter, createWebHistory } from 'vue-router'
import Payment from '../components/Payment.vue'
import Index from '../components/index.vue'
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index 
  },
  {
    path: '/payment',
    name: 'Payment',
    component: Payment 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
