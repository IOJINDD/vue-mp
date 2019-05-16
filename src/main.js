import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import common from '@/utils/common-for-vue.js';
import 'styles/index.scss'
import * as filters from './filters' // 全局vue filter

Vue.prototype.common = common;
Vue.config.productionTip = false

// 配置全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')