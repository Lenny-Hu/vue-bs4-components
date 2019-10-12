/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 15:14:15
 * @LastEditTime: 2019-10-12 10:42:55
 * @LastEditors: Please set LastEditors
 */
import Home from '../pages/home.vue'
import Alert from '../pages/alert.vue'
import Badge from '../pages/badge.vue'
import Breadcrumb from '../pages/breadcrumb.vue'
import Button from '../pages/button.vue'

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
    name: 'button',
    path: '/button',
    component: Button,
    meta: {
      title: 'Button'
    }
  },
  {
    path: '*',
    redirect: '/home'
  }
]

export default base
