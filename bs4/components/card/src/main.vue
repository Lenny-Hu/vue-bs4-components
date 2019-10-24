<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:50
 * @LastEditTime: 2019-10-23 15:09:22
 * @LastEditors: Please set LastEditors
 -->

 <template>
  <div class="card">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <img :src="topImg.src" class="card-img-top" :alt="topImg.alt" v-if="topImg.src">
    <div class="card-body" v-if="$slots.default">
      <slot></slot>
    </div>
    <slot name="other"></slot>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
 </template>

<script>
  export default {
    name: 'b-card',
    data () {
      return {
      }
    },
    props: {
      topImg: {
        type: Object,
        default () {
          return {
            src: '',
            alt: ''
          }
        }
      }
    }
  }
</script>
