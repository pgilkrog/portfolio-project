import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Projects from '@/views/Projects.vue'
import ProjectDetail from '@/views/ProjectDetail.vue'
import Skills from '@/views/Skills.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/skills',
    component: Skills
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/project/:id',
    component: ProjectDetail
  },
  {
    path: '/contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

export default router
