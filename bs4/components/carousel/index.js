/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:34
 * @LastEditTime: 2019-10-24 15:17:57
 * @LastEditors: Please set LastEditors
 */
import Carousel from './src/main'
import CarouselSlide from './src/slide'

/* istanbul ignore next */
Carousel.install = function (Vue) {
  Vue.component(Carousel.name, Carousel)
  Vue.component(CarouselSlide.name, CarouselSlide)
}

export default Carousel
