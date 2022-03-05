import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import TodaysMenu from "@/views/TodaysMenu.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/today'
  },
  {
    path: '/today',
    name: `today's-menu`,
    component: TodaysMenu
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

})

export default router
