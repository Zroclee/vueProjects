import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/touxiang',
    name: 'Touxiang',
    component: () => import('../views/touxiang.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bilibili',
    name: 'Bilibili',
    meta: {
      title: '哔哩哔哩'
    },
    component: () => import('../views/bilibili/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
