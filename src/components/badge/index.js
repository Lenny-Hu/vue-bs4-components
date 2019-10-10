/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 15:14:41
 * @LastEditTime: 2019-10-10 15:39:37
 * @LastEditors: Please set LastEditors
 */
import Badge from './src/main'

/* istanbul ignore next */
Badge.install = function (Vue) {
  Vue.component(Badge.name, Badge)
}

export default Badge
