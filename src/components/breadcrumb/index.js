/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 15:14:41
 * @LastEditTime: 2019-10-10 17:16:00
 * @LastEditors: Please set LastEditors
 */
import Breadcrumb from './src/main'

/* istanbul ignore next */
Breadcrumb.install = function (Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb)
}

export default Breadcrumb
