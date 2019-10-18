/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 15:07:28
 * @LastEditTime: 2019-10-18 16:09:11
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'

import bs4 from '../bs4/index' // 引入包
import doc from './components/doc'

import './lib/filters'

Vue.config.productionTip = false

console.log(bs4)
Vue.use(bs4) // 全局整体注册
// Vue.use(bs4.Alert) // 全局单个注册
// Vue.component(bs4.Alert.name, bs4.Alert) // 自定义名称单个注册

Vue.component('doc', doc)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
