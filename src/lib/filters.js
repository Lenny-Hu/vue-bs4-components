/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 17:15:42
 * @LastEditTime: 2019-10-10 16:09:44
 * @LastEditors: Please set LastEditors
 */
import Vue from 'vue'

Vue.filter('type', (type) => {
  return type.length > 1 ? (type.map(j => j.name)) : type.name
})
