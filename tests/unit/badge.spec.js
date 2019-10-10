/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:42:47
 * @LastEditTime: 2019-10-10 15:54:26
 * @LastEditors: Please set LastEditors
 */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Badge from '@/components/badge/src/main.vue'

describe('Badge', function () {
  it('default', function () {
    const wrapper = shallowMount(Badge, {
      slots: {
        default: 'default'
      }
    })
    expect(wrapper.classes()).to.have.members(['badge', 'badge-primary'])
    expect(wrapper.text()).to.equal('default')
  })

  it('type', function () {
    const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']

    types.forEach((v) => {
      let wrapper = shallowMount(Badge, {
        propsData: {
          type: v
        }
      })
      expect(wrapper.classes()).to.have.members(['badge', `badge-${v}`])
    })
  })

  it('pill', function () {
    const wrapper = shallowMount(Badge, {
      propsData: {
        pill: true
      }
    })

    expect(wrapper.classes()).to.include('badge-pill')
  })
})
