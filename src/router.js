import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'
import ClientView from './views/ClientView.vue'

const routes = [
  { path: '/', component: LoginView, meta: { showHeader: false, showFooter: false }},
  { path: '/cliente', component: ClientView, meta: { showHeader: true, showFooter: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;
