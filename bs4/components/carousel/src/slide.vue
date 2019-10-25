<!--
 * @Author: your name
 * @Date: 2019-10-24 15:04:27
 * @LastEditTime: 2019-10-25 15:59:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 -->
<template>
  <div class="swiper-slide"
    :class="[{'swiper-lazy': lazy.slideBackground}]"
    :data-background="lazy.slideBackground ? lazy.slideBackground : false"
  >
    <template v-if="initParams.lazy">

      <div
        v-if="lazy.background"
        :data-background="lazy.background ? lazy.background : false"
        class="swiper-lazy"
      >
        <div class="swiper-lazy-preloader"></div>
      </div>

      <template v-if="!(lazy.slideBackground || lazy.background)">
        <img
          :data-src="lazy.src ? lazy.src : false"
          :data-srcset="lazy.srcset ? lazy.srcset : false"
          class="swiper-lazy"
        >
        <div class="swiper-lazy-preloader"></div>
      </template>
    </template>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'b-carousel-slide',
    inject: ['initParams'],
    props: {
      lazy: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>
