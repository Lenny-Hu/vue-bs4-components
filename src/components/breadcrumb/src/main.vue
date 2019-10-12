<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:50
 * @LastEditTime: 2019-10-10 17:51:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"
        v-for="(item, i) in list" :key="i"
        :class="{'active': i === (list.length - 1)}"
      >
        <template v-if="i !== (list.length - 1)">
          <a :href="item.href" :target="item.target || '_self'">{{item.text}}</a>
        </template>
        <template v-else>{{item.text}}</template>
      </li>
    </ol>
  </nav>
</template>

<script>
  export default {
    name: 'b-breadcrumb',
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>
