/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:34
 * @LastEditTime: 2019-10-23 11:09:55
 * @LastEditors: Please set LastEditors
 */
import ButtonGroup from './src/main'

/* istanbul ignore next */
ButtonGroup.install = function (Vue) {
  Vue.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
