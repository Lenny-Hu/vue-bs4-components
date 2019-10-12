<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 14:38:35
 * @LastEditTime: 2019-10-12 16:53:02
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <h4>EXAMPLE</h4>
    <hr>
    <b-alert>default</b-alert>
    <b-alert :type="item" v-for="(item, i) in list" :key="i">
      {{item}}
    </b-alert>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <b-alert>default</b-alert>
        <b-alert type="secondary">secondary</b-alert>
        </script>
      </pre>
    </figure>

    <h5>可关闭</h5>
    <hr>
    <b-alert :dismissable="true" @close="onClose">可关闭</b-alert>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <b-alert :dismissable="true" @close="onClose">可关闭</b-alert>
        </script>
      </pre>
    </figure>

    <h5>延时自动关闭</h5>
    <hr>
    <b-alert duration="5000">5秒后自动关闭</b-alert>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <b-alert duration="5000">5秒后自动关闭</b-alert>
        </script>
      </pre>
    </figure>

    <doc
      :options="options"
      :events="events"
      :slots="slots"
    ></doc>

  </div>
</template>

<script>
  import _ from 'lodash'
  import Alert from '../components/alert/index'

  export default {
    data () {
      return {
        options: {
          type: {
            desc: "可选值['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']",
          },
          dismissable: {
            desc: '是否显示关闭按钮'
          },
          duration: {
            desc: '延迟关闭时间，单位：毫秒'
          }
        },
        events: {
          close: {
            desc: '当alert关闭时触发'
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
    methods: {
      onClose () {
        window.alert('关闭事件[close]');
      }
    },
    created () {
      this.options = _.merge(Alert.props, this.options)
    }
  }
</script>

<style lang="scss" scoped>

</style>