<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:50
 * @LastEditTime: 2019-10-09 17:45:46
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div 
    :class="['alert', `alert-${type}`]"
    role="alert"
    transition="fade"
    v-if="visible"
  >
    <slot></slot>
    <button 
      type="button"
      class="close"
      v-if="dismissable"
      @click="close"
    >
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
        validator (v) {
          let arr = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']
          return arr.includes(v)
        },
        default: 'primary'
      },
      dismissable: {
        type: Boolean,
        default: false
      },
      duration: {
        type: [String, Number],
        validator (v) {
          return !isNaN(parseInt(v))
        },
        default: 0
      }
    },
    data () {
      return {
        visible: true,
        timer: null
      }
    },
    methods: {
      close () {
        this.visible = false
        this.$emit('close')
      },
      autoClose () {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.close()
        }, +this.duration)
      }
    },
    created () {
      if (this.duration > 0) {
        this.autoClose()
      }
    }
  }
</script>
