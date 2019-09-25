<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:50
 * @LastEditTime: 2019-09-25 11:48:26
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div 
    :class="['alert', `alert-${type}`]"
    role="alert"
    transition="fade"
  >
    <slot></slot>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
</template>

<script>
  export default {
    name: 'alert',
    props: {
      type: {
        type: String,
        enum: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
        default: 'primary'
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>
