/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:42:47
 * @LastEditTime: 2019-10-18 16:12:29
 * @LastEditors: Please set LastEditors
 */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Alert from '../../../bs4/components/alert/src/main.vue'

describe('Alert', function () {
  it('default', function () {
    const wrapper = shallowMount(Alert, {
      slots: {
        default: 'default'
      }
    })
    expect(wrapper.classes()).to.have.members(['alert', 'alert-primary'])
    expect(wrapper.text()).to.equal('default')

    const btn = wrapper.find('.close')
    expect(btn.exists()).to.be.false
  })

  it('type', function () {
    const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

    types.forEach((v) => {
      let wrapper = shallowMount(Alert, {
        propsData: {
          type: v
        }
      })
      expect(wrapper.classes()).to.have.members(['alert', `alert-${v}`])
    })
  })

  it('关闭按钮和关闭事件', function () {
    const wrapper = shallowMount(Alert, {
      slots: {
        default: 'default'
      },
      propsData: {
        dismissable: true
      }
    })

    const btn = wrapper.find('.close')
    expect(btn.exists()).to.be.true

    btn.trigger('click')
    expect(wrapper.vm.visible).to.be.false
    expect(wrapper.emitted().close).to.be.ok
  })

  it('延时自动关闭', function (done) {
    this.timeout(1000 * 5)
    const wrapper = shallowMount(Alert, {
      slots: {
        default: 'default'
      },
      propsData: {
        duration: 1000
      }
    })

    setTimeout(() => {
      wrapper.vm.$nextTick(() => {
        expect(wrapper.text()).to.be.empty
        done()
      })
    }, 2000)
  })
})
