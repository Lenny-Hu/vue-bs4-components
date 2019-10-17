<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 15:21:29
 * @LastEditTime: 2019-10-17 11:58:16
 * @LastEditors: Please set LastEditors
 -->

## Alert
---

### 基础

<vuep template="#example1"></vuep>

<script v-pre type="text/x-template" id="example1">

  <template>
    <div>
      <b-alert>default</b-alert>
      <b-alert :type="item" v-for="(item, i) in list" :key="i">
        {{item}}
      </b-alert>
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

### 可关闭

<vuep template="#example2"></vuep>

<script v-pre type="text/x-template" id="example2">

  <template>
    <div>
      <b-alert :dismissable="true" @close="onClose">可关闭</b-alert>
    </div>
  </template>

  <script>
    export default {
      methods: {
        onClose () {
          alert('关闭事件');
        }
      }
    };
  </script>

</script>

### 延时关闭

<vuep template="#example3"></vuep>

<script v-pre type="text/x-template" id="example3">

  <template>
    <div>
      <b-alert duration="5000">5秒后自动关闭</b-alert>
    </div>
  </template>

  <script>
    export default {
    };
  </script>
  
</script>

### Props

* `type`: `String?: primary` 可选值 ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
* `dismissable`: `Boolean?: false` 是否显示关闭按钮
* `duration`: `(String | Number)?: 0` 延迟关闭时间，单位：`毫秒`

### Events

* `close`: 关闭时触发

### Solts

* `default`: 默认插槽
