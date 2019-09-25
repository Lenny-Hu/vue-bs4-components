/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 15:07:28
 * @LastEditTime: 2019-09-25 14:10:03
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'
import App from './App.vue'
import bs4 from './index'
import router from './routes/index'

Vue.config.productionTip = false

console.log(bs4)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
