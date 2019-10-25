/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:42:47
 * @LastEditTime: 2019-10-25 15:59:14
 * @LastEditors: Please set LastEditors
 */
import _ from 'lodash'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Carousel from '../../../bs4/components/carousel/src/main.vue'
import CarouselSlide from '../../../bs4/components/carousel/src/slide.vue'
import Swiper from 'swiper'
window.Swiper = Swiper

describe('Carousel', function () {
  it('Carousel default', function (done) {
    const wrapper = shallowMount(Carousel, {
      propsData: {
        options: {
          pagination: true,
          navigation: true,
          scrollbar: true
        }
      },
      slots: {
        default: 'default'
      }
    })
    expect(wrapper.classes()).to.have.members(['swiper-container'])

    const body = wrapper.find('.swiper-wrapper')
    expect(body.exists()).to.be.true
    expect(body.text()).to.equal('default')

    expect(wrapper.find('.swiper-pagination').exists()).to.be.true
    expect(wrapper.find('.swiper-button-prev').exists()).to.be.true
    expect(wrapper.find('.swiper-button-next').exists()).to.be.true
    expect(wrapper.find('.swiper-scrollbar').exists()).to.be.true

    wrapper.vm.$nextTick(() => {
      const emitted = wrapper.emitted()
      const mySwiper = emitted.init[0][0]

      expect(emitted.init).to.be.ok
      expect(_.isObject(mySwiper.params)).to.be.true
      expect(_.isFunction(mySwiper.slideNext)).to.be.true
      done()
    })
  })

  it('Carousel Slide: lazy slideBackground', function () {
    const wrapper = shallowMount(CarouselSlide, {
      provide: {
        initParams: {
          lazy: true
        }
      },
      propsData: {
        lazy: {
          slideBackground: 'slideBackground'
        }
      },
      slots: {
        default: 'default'
      }
    })

    expect(wrapper.text()).to.equal('default')
    expect(wrapper.attributes('data-background')).to.equal('slideBackground')
    expect(wrapper.classes()).to.have.members(['swiper-slide', 'swiper-lazy'])
  })

  it('Carousel Slide: lazy src & srcset', function () {
    const wrapper = shallowMount(CarouselSlide, {
      provide: {
        initParams: {
          lazy: true
        }
      },
      propsData: {
        lazy: {
          src: 'src',
          srcset: 'srcset'
        }
      }
    })

    expect(wrapper.classes()).to.have.members(['swiper-slide'])
   
    const img = wrapper.find('.swiper-lazy')
    expect(img.exists()).to.be.true
    expect(wrapper.find('.swiper-lazy-preloader').exists()).to.be.true

    const attributes = img.attributes()
    expect(attributes['data-src']).to.equal('src')
    expect(attributes['data-srcset']).to.equal('srcset')

  })

  it('Carousel Slide: lazy background', function () {
    const wrapper = shallowMount(CarouselSlide, {
      provide: {
        initParams: {
          lazy: true
        }
      },
      propsData: {
        lazy: {
          background: 'background'
        }
      },
      slots: {
        default: 'default'
      }
    })

    expect(wrapper.classes()).to.have.members(['swiper-slide'])

    const div = wrapper.find('.swiper-lazy')
    expect(div.exists()).to.be.true
    expect(wrapper.find('.swiper-lazy-preloader').exists()).to.be.true

    const attributes = div.attributes()
    expect(attributes['data-background']).to.equal('background')
  })
})
