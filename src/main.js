import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'

// 全局注册百度地图
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'vU4uB163eQqDDkPAFNbEElcXLkfjzGo7'
})

// 高德地图
// import AMap from 'vue-amap';
// Vue.use(AMap);
// AMap.initAMapApiLoader({
//   // 高德key
//   key: '856434d91a5682e6eaeb5c399f3c5f01',
//   // 插件集合 （插件按需引入）
//   plugin: ['AMap.Geolocation']
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')