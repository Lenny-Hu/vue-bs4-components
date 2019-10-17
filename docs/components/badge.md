<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 14:46:53
 * @LastEditTime: 2019-10-17 15:05:14
 * @LastEditors: Please set LastEditors
 -->
# Badge
---

## 基础

<vuep template="#example1"></vuep>

<script v-pre type="text/x-template" id="example1">

  <template>
    <div>
      <b-badge>default</b-badge>
      <template v-for="(item, i) in list">
        <b-badge :type="item" :key="i">
          {{item}}
        </b-badge>
        &nbsp;
      </template>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
        };
      }
    };
  </script>

</script>

## pill

<vuep template="#example2"></vuep>

<script v-pre type="text/x-template" id="example2">

  <template>
    <div>
      <b-badge :pill="true">两头半圆形外观</b-badge>
    </div>
  </template>

  <script>
    export default {
    };
  </script>

</script>

## Props

* `type`: `String?: primary` 可选值 ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
* `pill`: `Boolean?: false` 两头半圆形外观

## Solts

* `default`: 默认插槽
