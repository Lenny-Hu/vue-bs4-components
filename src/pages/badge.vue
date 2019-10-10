<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 14:38:35
 * @LastEditTime: 2019-10-10 16:11:39
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <h4>EXAMPLE</h4>
    <hr>
    <badge>default</badge>&nbsp;
    <template v-for="(item, i) in list">
      <badge :type="item" :key="i">
        {{item}}
      </badge>
      &nbsp;
    </template>
    <div><br></div>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <badge>default</badge>
        <badge type="secondary">secondary</badge>
        </script>
      </pre>
    </figure>

    <h5>pill</h5>
    <hr>
    <badge :pill="true">两头半圆形外观</badge>
    <div><br></div>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <badge :pill="true">两头半圆形外观</badge>
        </script>
      </pre>
    </figure>

    <doc
      :options="options"
      :slots="slots"
    ></doc>

  </div>
</template>

<script>
  import _ from 'lodash'
  import Badge from '../components/badge/index'

  export default {
    data () {
      return {
        options: {
          type: {
            desc: "可选值['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']",
          },
          pill: {
            desc: '两头半圆形外观'
          }
        },
        slots: {
          'default': {
            desc: '默认插槽'
          }
        },
        list: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
      }
    },
    created () {
      this.options = _.merge(Badge.props, this.options)
    }
  }
</script>

<style lang="scss" scoped>

</style>
