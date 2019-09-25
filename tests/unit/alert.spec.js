/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:42:47
 * @LastEditTime: 2019-09-25 10:42:47
 * @LastEditors: your name
 */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Alert from '@/components/alert/src/main.vue'

describe('Alert', () => {
  it('alert', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Alert, {
      propsData: { msg }
    })
    expect(wrapper.text()).to.include(msg)
  })
})
