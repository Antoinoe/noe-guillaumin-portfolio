import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Education from '../views/EducationView.vue';
import Experiences from '../views/ExperiencesView.vue';
import Projects from '../views/ProjectsView.vue';
import Contact from '../views/ContactsView.vue'
import Dev from '../views/Dev.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView, name: "home" },
    { path: '/Education', component: Education , name: "education"},
    { path: '/Experiences', component: Experiences , name: "experiences"},
    { path: '/Projects', component: Projects , name: "projects"},
    { path: '/Contact', component: Contact , name: "contact"},
    { path: '/Dev', component: Dev , name: "dev"},
  ]
})

export default router
