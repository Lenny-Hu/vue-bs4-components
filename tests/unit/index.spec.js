/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 14:50:33
 * @LastEditTime: 2019-10-18 15:29:46
 * @LastEditors: Please set LastEditors
 */
import { expect } from 'chai'
import bs4 from '@/index'
import _ from 'lodash'
import Vue from 'vue'

const components = Object.keys(bs4).filter( n => !(['install'].includes(n)))

describe('index', function () {
  it('检查组件整体安装', function () {
    expect(_.isFunction(bs4.install)).to.true

    Vue.use(bs4)
    components.forEach((k) => {
      console.log(bs4[k].name)
      expect(_.isFunction(Vue.component(bs4[k].name))).to.true
    })
  })

  it('检查单个组件安装', function () {
    components.forEach((k) => {
      expect(_.isFunction(bs4[k].install)).to.true
      Vue.use(bs4[k])
      expect(_.isFunction(Vue.component(bs4[k].name))).to.true
    })
  })
})
