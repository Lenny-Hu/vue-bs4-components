<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 14:38:35
 * @LastEditTime: 2019-10-12 16:57:10
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <h4>EXAMPLE</h4>
    <hr>
    <b-breadcrumb :list="list1"></b-breadcrumb>
    <b-breadcrumb :list="list2"></b-breadcrumb>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        // html
        <b-breadcrumb :list="list1"></b-breadcrumb>
        <b-breadcrumb :list="list2"></b-breadcrumb>

        // js
        // list1
        {{JSON.stringify(list1, null, 8)}}

        // list2
        {{JSON.stringify(list2, null, 8)}}
        </script>
      </pre>
    </figure>

    <doc
      :options="options"
    ></doc>

  </div>
</template>

<script>
  import _ from 'lodash'
  import Breadcrumb from '../components/breadcrumb/index'

  export default {
    data () {
      return {
        options: {
          list: {
            desc: "必填，导航列表[对象数组]，包含text、href、target三个可设置属性",
          }
        },
        list1: [
          {
            text: '首页',
            href: '/home'
          }
        ],
        list2: [
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
            text: '详情'
          }
        ]
      }
    },
    created () {
      this.options = _.merge(Breadcrumb.props, this.options)
    }
  }
</script>

<style lang="scss" scoped>

</style>
