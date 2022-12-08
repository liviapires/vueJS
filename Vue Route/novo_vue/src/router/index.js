import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/servicos',
    name: 'servicos',
    component: () => import('../views/ServicesView.vue'),
  },
  {
    path: '/user/:id',
    name: 'edit-users',
    component: () => import('../views/UserEditView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
