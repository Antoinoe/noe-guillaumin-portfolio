import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dev from '../views/Dev.vue'
import Template from '../views/PageTemplate.vue'
import OlfactoryMap from '../views/OlfacrotyMap.vue'
import DynamicWeatherSystem from '../views/DynamicWeatherSystem.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, name: "home" },
    { path: '/Dev', component: Dev , name: "dev"},
    { path: '/Template', component: Template , name: "template"},
    { path: '/OlfactoryMap', component: OlfactoryMap , name: "olfactorymap"},
    { path: '/DynamicWeatherSystem', component: DynamicWeatherSystem , name: "dynamic_weather_system"}
  ]
})

export default router
