/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:42:47
 * @LastEditTime: 2019-10-23 15:09:39
 * @LastEditors: Please set LastEditors
 */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Card from '../../../bs4/components/card/src/main.vue'

describe('Card', function () {
  it('default', function () {
    const wrapper = shallowMount(Card, {
      slots: {
        default: 'default'
      }
    })
    expect(wrapper.classes()).to.have.members(['card'])

    const body = wrapper.find('.card-body')
    expect(body.exists()).to.be.true
    expect(body.text()).to.equal('default')
  })

  it('top-img', function () {
    const wrapper = shallowMount(Card, {
      propsData: {
        topImg: {
          src: 'src',
          alt: 'alt'
        }
      }
    })

    const topImg = wrapper.find('.card-img-top')
    const attributes = topImg.attributes()
    expect(attributes.src).to.equal('src')
    expect(attributes.alt).to.equal('alt')
  })

  it('slots', function () {
    const list = [
      {
        name: 'header',
        selector: '.card-header',
        html: 'header'
      },
      {
        name: 'footer',
        selector: '.card-footer',
        html: 'footer'
      },
      {
        name: 'other',
        selector: '',
        html: 'other'
      }
    ]

    list.forEach((v) => {
      let options = { slots: {} }
      options.slots[v.name] = v.html
      const wrapper = shallowMount(Card, options)
      expect((v.selector ? wrapper.find(v.selector) : wrapper).text()).to.equal(v.html)
    })
  })
})
