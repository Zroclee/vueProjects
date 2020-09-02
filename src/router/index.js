import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/css',
    name: 'CSS',
    component: () => import('../views/HTMLCSS/index.vue')
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../views/HTMLCSS/collection.vue')
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
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/bilibili',
    name: 'Bilibili',
    meta: {
      title: '哔哩哔哩'
    },
    component: () => import('../views/bilibili/index.vue')
  },
  {
    path: '/baiduditu',
    name: 'BaiDuDiTu',
    meta: {
      title: '百度地图'
    },
    component: () => import('../views/baiduditu/index.vue')
  },
  {
    path: '/gaode',
    name: 'GAODE',
    meta: {
      title: '高德地图'
    },
    component: () => import('../views/gaode/index.vue')
  },
  {
    path: '/echarts',
    name: 'ECharts',
    meta: {
      title: 'ECharts'
    },
    component: () => import('../views/echarts/index.vue')
  },
  {
    path: '/province',
    name: 'Province',
    meta: {
      title: '省份地图'
    },
    component: () => import('../views/echarts/province.vue')
  },
  {
    path: '/chart',
    name: 'Chart',
    meta: {
      title: '图表'
    },
    component: () => import('../views/echarts/chart.vue')
  },
  {
    path: '/progress',
    name: 'Progress',
    meta: {
      title: '进度条'
    },
    component: () => import('../views/progress/index.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router