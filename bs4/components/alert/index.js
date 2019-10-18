/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:34
 * @LastEditTime: 2019-09-24 18:00:24
 * @LastEditors: Please set LastEditors
 */
import Alert from './src/main'

/* istanbul ignore next */
Alert.install = function (Vue) {
  Vue.component(Alert.name, Alert)
}

export default Alert
