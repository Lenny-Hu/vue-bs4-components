<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 14:38:35
 * @LastEditTime: 2019-10-12 15:58:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <h4>EXAMPLE</h4>
    <hr>
    <b-button>default</b-button>&nbsp;
    <template v-for="(item, i) in typeList">
      <b-button :type="item" :key="i">
        {{item}}
      </b-button>
      &nbsp;
    </template>
    <div><br></div>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <b-button>default</b-button>
        <b-button type="secondary">secondary</b-button>
        </script>
      </pre>
    </figure>

    <h5>标签</h5>
    <hr>
    <b-button type="link" tag="a" href="/home" target="_blank">a</b-button>&nbsp;
    <b-button tag="button">button</b-button>&nbsp;
    <b-button tag="input" name="name">input</b-button>&nbsp;
    <div><br></div>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <b-button type="link" tag="a" href="/home" target="_blank">a</b-button>
        <b-button tag="button">button</b-button>
        <b-button tag="input" name="name">input</b-button>
        </script>
      </pre>
    </figure>

    <h5>Outline buttons</h5>
    <hr>
    <template v-for="(item, i) in typeList">
      <b-button :type="item" :key="i + 'outline'" :outline=true>
        {{item}}
      </b-button>
      &nbsp;
    </template>
    <div><br></div>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <b-button :outline=true>primary</b-button>
        <b-button type="secondary" :outline=true>secondary</b-button>
        </script>
      </pre>
    </figure>

    <h5>Sizes</h5>
    <hr>
    <b-button>正常</b-button>&nbsp;
    <template v-for="(item, i) in sizeList">
      <b-button :size="item" :key="i + 'size'">
        {{item}}
      </b-button>
      &nbsp;
    </template>
    <div><br></div>
    <b-button :block="true">block</b-button>
    <div><br></div>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <b-button>正常</b-button>
        <b-button size="lg">lg</b-button>
        <b-button size="sm">sm</b-button>
        <b-button :block="true">block</b-button>
        </script>
      </pre>
    </figure>

    <h5>Active state</h5>
    <hr>
    <b-button>正常</b-button>&nbsp;
    <template v-for="(item, i) in stateList">
      <b-button :state="item" :key="i + 'state'">
        {{item}}
      </b-button>
      &nbsp;
    </template>
    <b-button tag="a" state="disabled">a标签 disabled</b-button>
    <div><br></div>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        <b-button>正常</b-button>
        <b-button state="active">active</b-button>
        <b-button state="disabled">disabled</b-button>
        <b-button tag="a" state="disabled">a标签 disabled</b-button>
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
  import Button from '../components/button/index'

  const typeList = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
  const sizeList = ['sm', 'lg']
  const stateList = ['active', 'disabled']
  export default {
    data () {
      return {
        options: {
          type: {
            desc: `可选值${typeList}`,
          },
          tag: {
            desc: '标签，如渲染为A标签，添加href属性'
          },
          outline: {
            desc: 'Outline buttons'
          },
          size: {
            desc: `大小，可选值${sizeList}`
          },
          block: {
            desc: '显示为块级元素'
          },
          state: {
            desc: `按钮的状态，可选值${stateList}`
          },
          href: {
            desc: '当tag为A标签时使用的href属性'
          },
          target: {
            desc: '当tag为A标签时使用的target属性'
          },
          name: {
            desc: '原生name属性'
          }
        },
        slots: {
          'default': {
            desc: '默认插槽'
          }
        },
        typeList,
        sizeList,
        stateList
      }
    },
    created () {
      this.options = _.merge(Button.props, this.options)
    }
  }
</script>

<style lang="scss" scoped>

</style>
