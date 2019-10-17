<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-17 14:47:21
 * @LastEditTime: 2019-10-17 15:16:12
 * @LastEditors: Please set LastEditors
 -->
# Breadcrumb
---

## 基础

<vuep template="#example1"></vuep>

<script v-pre type="text/x-template" id="example1">

  <template>
    <div>
      <b-breadcrumb :list="list1"></b-breadcrumb>
      <b-breadcrumb :list="list2"></b-breadcrumb>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
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
        };
      }
    };
  </script>

</script>

## Props

* `list`: `Array: []` 导航列表[对象数组]，包含text、href、target三个可设置属性
