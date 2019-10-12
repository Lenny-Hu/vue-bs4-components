<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 14:11:18
 * @LastEditTime: 2019-10-12 16:59:02
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <figure>
      <pre>
        <script type="text/html" class="code-box">
        // 安装
        npm install vue-bs4-components

        // 全部注册
        import bs4 from 'vue-bs4-components'
        Vue.use(bs4)

        // 单个注册（插件安装形式）
        import { Alert } from 'vue-bs4-components'
        Vue.use(bs4)

        // 单个注册（需要自定义名称的情况下）
        import { Alert } from 'vue-bs4-components'
        Vue.component(bs4.Alert.name, bs4.Alert)
        Vue.component('custom-name', bs4.Alert) // 自定义名称单个注册

        // 模块中使用 <b-组件名称></b-组件名称>
        <b-alert>alert</b-alert>

        </script>
      </pre>
    </figure>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>