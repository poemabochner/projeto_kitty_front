import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'

const routes = [
  { path: '/', component: LoginView, meta: { showHeader: false, showFooter: false }},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
