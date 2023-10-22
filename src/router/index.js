import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Education from '../views/EducationView.vue';
import Experiences from '../views/ExperiencesView.vue';
import Projects from '../views/ProjectsView.vue';
import Contact from '../views/ContactsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/Education', component: Education },
    { path: '/Experiences', component: Experiences },
    { path: '/Projects', component: Projects },
    { path: '/Contact', component: Contact },
  ]
})

export default router
