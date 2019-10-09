/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 15:14:15
 * @LastEditTime: 2019-10-09 16:02:45
 * @LastEditors: Please set LastEditors
 */
import Home from '../pages/home.vue'
import Alert from '../pages/alert.vue'

const base = [
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'Install'
    }
  },
  {
    name: 'alert',
    path: '/alert',
    component: Alert,
    meta: {
      title: 'Alert'
    }
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default base
