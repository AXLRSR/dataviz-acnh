import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Fish from '../views/Fish.vue'
import Bugs from '../views/Bugs.vue'
import Villagers from '../views/Villagers.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/fish',
    name: 'Fish',
    component: Fish
  },
  {
    path: '/bugs',
    name: 'Bugs',
    component: Bugs
  },
  {
    path: '/villagers',
    name: 'Villagers',
    component: Villagers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
