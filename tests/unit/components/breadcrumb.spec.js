/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:42:47
 * @LastEditTime: 2019-10-18 16:12:42
 * @LastEditors: Please set LastEditors
 */
import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Breadcrumb from '../../../bs4/components/breadcrumb/src/main.vue'

describe('Breadcrumb', function () {
  it('default', function () {
    const list = [
      {
        text: '首页',
        href: '/home'
      },
      {
        text: '列表',
        href: '/list',
        target: '_blank'
      },
      {
        text: '详情',
        href: '/list',
        target: '_blank'
      }
    ]
    const wrapper = shallowMount(Breadcrumb, {
      propsData: {
        list
      }
    })

    const navList = wrapper.findAll('.breadcrumb-item')

    list.forEach((v, i) => {
      expect(navList.at(i).text()).to.equal(v.text)

      if (i === list.length - 1) {
        expect(navList.at(i).contains('a'), '最后一项没有A标签').to.be.false
      } else {
        let a = navList.at(i).find('a')
        expect(a.attributes('href')).to.equal(v.href)

        if (v.target) {
          expect(a.attributes('target')).to.equal(v.target)
        }
      }
    })
  })
})
