import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'
import ClientView from './views/ClientView.vue'
import IngredientesView from './views/IngredientesView.vue'
import LanchesView from './views/LanchesView.vue'
import PromocoesView from './views/PromocoesView.vue'

const routes = [
  { path: '/login', component: LoginView, meta: { showHeader: false, showFooter: false }},
  { path: '/cliente', component: ClientView, meta: { showHeader: true, showFooter: true }},
  { path: '/ingredientes', component: IngredientesView, meta: { showHeader: true, showFooter: true }},
  { path: '/lanches', component: LanchesView, meta: { showHeader: true, showFooter: true }},
  { path: '/promocoes', component: PromocoesView, meta: { showHeader: true, showFooter: true }}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
