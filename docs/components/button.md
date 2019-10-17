<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 15:21:29
 * @LastEditTime: 2019-10-17 15:42:04
 * @LastEditors: Please set LastEditors
 -->


# Button
---

## 基础

<vuep template="#example1"></vuep>

<script v-pre type="text/x-template" id="example1">

  <template>
    <div>
      <b-button>default</b-button>
      <template v-for="(item, i) in list">
        <b-button :type="item" :key="i">
          {{item}}
        </b-button>
        &nbsp;
      </template>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
        };
      }
    };
  </script>

</script>

## 标签

<vuep template="#example2"></vuep>

<script v-pre type="text/x-template" id="example2">

  <template>
    <div>
      <b-button type="link" tag="a" href="/home" target="_blank">a</b-button>&nbsp;
      <b-button tag="button">button</b-button>&nbsp;
      <b-button tag="input" name="name">input</b-button>&nbsp;
    </div>
  </template>

  <script>
    export default {
    };
  </script>

</script>

## Outline buttons

<vuep template="#example3"></vuep>

<script v-pre type="text/x-template" id="example3">

  <template>
    <div>
      <template v-for="(item, i) in list">
        <b-button :type="item" :key="i" :outline=true>
          {{item}}
        </b-button>
        &nbsp;
      </template>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
        };
      }
    };
  </script>
  
</script>

## Sizes

<vuep template="#example4"></vuep>

<script v-pre type="text/x-template" id="example4">

  <template>
    <div>
      <b-button>正常</b-button>&nbsp;
      <template v-for="(item, i) in list">
        <b-button :size="item" :key="i">
          {{item}}
        </b-button>
        &nbsp;
      </template>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: ['sm', 'lg']
        };
      }
    };
  </script>
  
</script>

## Active state

<vuep template="#example5"></vuep>

<script v-pre type="text/x-template" id="example5">

  <template>
    <div>
      <b-button>正常</b-button>&nbsp;
      <b-button state="active">active</b-button>&nbsp;
      <b-button state="disabled">disabled</b-button>&nbsp;
      <b-button tag="a" state="disabled">a标签 disabled</b-button>
    </div>
  </template>

  <script>
    export default {
    };
  </script>
  
</script>

## Props

* `type`: `String?: primary` 可选值 ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
* `tag`: `String?: button` 渲染的标签名称，如渲染为A标签，可添加href属性
* `outline`: `Boolean?: false` outline buttons
* `size`: `String?: ''` 按钮大小，可选值['lg', 'sm']
* `block`: `Boolean?: false` 显示为块级元素
* `state`: `String?: ''` 按钮状态，可选值['active', 'disabled']
* `href`: `String?: ''` 当tag为A标签时使用的原生href属性
* `target`: `String?: ''` 当tag为A标签时使用的原生target属性
* `name`: `String?: ''` 原生name属性

## Solts

* `default`: 默认插槽
