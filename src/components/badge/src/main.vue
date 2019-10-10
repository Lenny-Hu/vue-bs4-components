<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:50
 * @LastEditTime: 2019-10-10 15:48:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div
    :class="['badge', `badge-${type}`, { 'badge-pill': pill }]"
  >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'badge',
    props: {
      type: {
        type: String,
        validator (v) {
          let arr = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
          return arr.includes(v)
        },
        default: 'primary'
      },
      pill: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
