/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 15:14:15
 * @LastEditTime: 2019-10-10 17:18:51
 * @LastEditors: Please set LastEditors
 */
import Home from '../pages/home.vue'
import Alert from '../pages/alert.vue'
import Badge from '../pages/badge.vue'
import Breadcrumb from '../pages/breadcrumb.vue'

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
    name: 'badge',
    path: '/badge',
    component: Badge,
    meta: {
      title: 'Badge'
    }
  },
  {
    name: 'breadcrumb',
    path: '/breadcrumb',
    component: Breadcrumb,
    meta: {
      title: 'Breadcrumb'
    }
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default base
