/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 15:14:15
 * @LastEditTime: 2019-09-25 15:15:01
 * @LastEditors: Please set LastEditors
 */
import Home from '../pages/home.vue'

const base = [
  {
    name: 'home',
    path: '/home',
    component: Home,
    meta: {
      title: 'home'
    }
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default base
