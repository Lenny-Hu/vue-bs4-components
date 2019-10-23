/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:42:47
 * @LastEditTime: 2019-10-23 11:30:49
 * @LastEditors: Please set LastEditors
 */
import _ from 'lodash'
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ButtonGroup from '../../../bs4/components/button-group/src/main.vue'

describe('ButtonGroup', function () {
  it('default', function () {
    const wrapper = shallowMount(ButtonGroup, {
      slots: {
        default: 'default'
      }
    })
    expect(wrapper.classes()).to.have.members(['btn-group'])
    expect(wrapper.text()).to.equal('default')
  })

  it('type = checkbox | radio', function () {
    const typeList = [
      {
        type: 'checkbox',
        selected: ['3'],
        change: ['2']
      },
      {
        type: 'radio',
        selected: '1',
        change: '2'
      }
    ]

    const list = [
      {
        value: '1',
        name: 'name',
        type: 'success'
      },
      {
        text: '2',
        value: 'value',
        name: 'name',
        type: 'info'
      },
      {
        value: '3'
      }
    ]

    // let selected = ['3']

    typeList.forEach((typeItem) => {

      let wrapper = shallowMount(ButtonGroup, {
        propsData: {
          type: typeItem.type,
          list,
          checked: typeItem.selected
        }
      })

      expect(wrapper.classes()).to.have.members(['btn-group', 'btn-group-toggle'])

      const items = wrapper.findAll('label')

      list.forEach((v, i) => {
        let cur = items.at(i)
        let ipt = cur.find('input')
        let attrs = ipt.attributes()

        expect(attrs.type).to.equal(typeItem.type)
        expect(attrs.name).to.equal(v.name)
        expect(attrs.value).to.equal(v.value)
        expect(cur.text()).to.equal(v.text || v.value)

        let members = ['btn', `btn-${v.type ? v.type : 'primary'}`]
        typeItem.selected.includes(v.value) && members.push('active')
        expect(cur.classes()).to.have.members(members)
      })

      items.at(0).find('input').setChecked()
      let emitted = wrapper.emitted()

      let _data = emitted.change[0][0]
      if (_.isArray(_data)) {
        expect(_data).to.have.members(['3', list[0].value])
      } else {
        expect(_data).to.equal(list[0].value)
      }

      // 模拟初始化后更改值
      wrapper.setProps({ checked: typeItem.change })
      emitted = wrapper.emitted()

      _data = emitted.change[1][0]
      if (_.isArray(_data)) {
        expect(_data).to.have.members(typeItem.change)
      } else {
        expect(_data).to.equal(typeItem.change)
      }
    })
  })

  it('sizes', function (done) {
    const arr = ['lg', 'sm']
    let wrapper = null

    arr.forEach((v) => {
      wrapper = shallowMount(ButtonGroup, {
        propsData: {
          size: v
        }
      })

      expect(wrapper.classes()).to.include(`btn-group-${v}`)
    })

    wrapper.setProps({ size: '' })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).to.not.includes(['btn-group-lg', 'btn-group-sm'])
      done()
    })
  })

  it('vertical', function (done) {
    let wrapper = shallowMount(ButtonGroup, {
      propsData: {
        vertical: true
      }
    })

    expect(wrapper.classes()).to.have.members([`btn-group-vertical`])

    wrapper.setProps({ vertical: false })

    wrapper.vm.$nextTick(() => {
      expect(wrapper.classes()).to.not.include(`btn-group-vertical`)
      done()
    })
  })
})
