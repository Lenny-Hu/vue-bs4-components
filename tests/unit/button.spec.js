/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:42:47
 * @LastEditTime: 2019-10-12 16:41:16
 * @LastEditors: Please set LastEditors
 */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/components/button/src/main.vue'

describe('Button', function () {
  it('default', function () {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'default'
      }
    })
    expect(wrapper.classes()).to.have.members(['btn', 'btn-primary'])
    expect(wrapper.text()).to.equal('default')
  })

  it('type && Outline buttons', function () {
    const types = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']

    types.forEach((v) => {
      let wrapper = shallowMount(Button, {
        propsData: {
          type: v
        }
      })
      expect(wrapper.classes()).to.have.members(['btn', `btn-${v}`])

      let wrapper2 = shallowMount(Button, {
        propsData: {
          type: v,
          outline: true
        }
      })
      expect(wrapper2.classes()).to.have.members(['btn', `btn-outline-${v}`])
    })
  })

  it('tag', function () {
    const tags = [
      {
        tag: 'a',
        href: '/home',
        target: '_blank',
        text: 'text'
      },
      {
        tag: 'button',
        text: 'text'
      },
      {
        tag: 'input',
        text: 'text',
        name: 'name'
      }
    ]

    tags.forEach((v) => {
      let wrapper = shallowMount(Button, {
        propsData: {
          tag: v.tag,
          href: v.href || '',
          target: v.target || '',
          name: v.name || ''
        },
        slots: {
          default: v.text
        }
      })

      expect(wrapper.element.tagName.toLowerCase()).to.equal(v.tag)

      if (v.href) {
        expect(wrapper.attributes('href')).to.equal(v.href)
      }

      if (v.target) {
        expect(wrapper.attributes('target')).to.equal(v.target)
      }

      if (v.name) {
        expect(wrapper.attributes('name')).to.equal(v.name)
      }

      if (v.name === 'input') {
        expect(wrapper.attributes('value')).to.equal(v.text)
      } else {
        expect(wrapper.text('value')).to.equal(v.text)
      }
    })
  })

  it('sizes && block', function () {
    const arr = ['lg', 'sm']

    arr.forEach((v) => {
      let wrapper = shallowMount(Button, {
        propsData: {
          size: v
        }
      })

      expect(wrapper.classes()).to.include(`btn-${v}`)
    })

    let wrapper2 = shallowMount(Button, {
      propsData: {
        block: true
      }
    })

    expect(wrapper2.classes()).to.include(`btn-block`)
  })

  it('Active state', function () {
    const arr = ['active', 'disabled']

    arr.forEach((v) => {
      let wrapper = shallowMount(Button, {
        propsData: {
          state: v
        }
      })

      expect(wrapper.classes()).to.include(v)

      if (v === 'disabled') {
        expect(wrapper.attributes('disabled')).to.equal('disabled')
      }
    })

    let wrapper = shallowMount(Button, {
      propsData: {
        state: 'disabled',
        tag: 'a'
      }
    })

    expect(wrapper.classes()).to.include('disabled')
    expect(wrapper.attributes('disabled')).to.be.undefined
  })
})
