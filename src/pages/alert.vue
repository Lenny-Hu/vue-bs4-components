<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 14:38:35
 * @LastEditTime: 2019-10-10 15:29:46
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <h4>EXAMPLE</h4>
    <hr>
    <alert>default</alert>
    <alert :type="item" v-for="(item, i) in list" :key="i">
      {{item}}
    </alert>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <alert>default</alert>
        <alert type="secondary">secondary</alert>
        </script>
      </pre>
    </figure>

    <h5>可关闭</h5>
    <hr>
    <alert :dismissable="true" @close="onClose">可关闭</alert>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <alert :dismissable="true" @close="onClose">可关闭</alert>
        </script>
      </pre>
    </figure>

    <h5>延时自动关闭</h5>
    <hr>
    <alert duration="5000">5秒后自动关闭</alert>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <alert duration="5000">5秒后自动关闭</alert>
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