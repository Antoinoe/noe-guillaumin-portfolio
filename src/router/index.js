import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/HomeView.vue'
import dev from '../views/Dev.vue'
import template from '../views/PageTemplate.vue'
import olfactorymap from '../views/OlfactoryMap.vue'
import dynamicweathersystem from '../views/DynamicWeatherSystem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: home, name: "home" },
    { path: '/dev', component: dev , name: "dev"},
    { path: '/template', component: template , name: "template"},
    { path: '/olfactorymap', component: olfactorymap , name: "olfactorymap"},
    { path: '/dynamicweathersystem', component: dynamicweathersystem , name: "dynamicweathersystem"}
  ]
})

export default router
