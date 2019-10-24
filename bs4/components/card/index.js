/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:34
 * @LastEditTime: 2019-10-23 11:56:17
 * @LastEditors: Please set LastEditors
 */
import Card from './src/main'

/* istanbul ignore next */
Card.install = function (Vue) {
  Vue.component(Card.name, Card)
}

export default Card
