<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:50
 * @LastEditTime: 2019-10-25 15:19:54
 * @LastEditors: Please set LastEditors
 -->

 <template>
  <div class="swiper-container" ref="swiperBox">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>

    <div class="swiper-pagination" v-if="initParams.pagination"></div>

    <template v-if="initParams.navigation">
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </template>

    <div class="swiper-scrollbar" v-if="initParams.scrollbar"></div>
  </div>
 </template>

<script>
  export default {
    name: 'b-carousel',
    provide () {
      return {
        initParams: this.initParams
      }
    },
    data () {
      return {
        mySwiper: null,
        optional: { // 可选项，由使用者启用
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          scrollbar: {
            el: '.swiper-scrollbar'
          },
        },
        default: { // 默认
          init: false
        }
      }
    },
    props: {
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    computed: {
      initParams () {
        let opt = Object.assign({}, this.options)
        delete opt.init

        // 合并可选项
        Object.keys(this.optional).forEach((k) => {
          if (opt[k] && this.optional[k]) {
            opt[k] = Object.assign(this.optional[k], opt[k])
          }
        })

        // 合并默认参数
        opt = Object.assign(this.default, opt)
        return opt
      }
    },
    methods: {
      emitInit () {
        this.$emit('init', this.mySwiper)
      },
      init () {
        this.$nextTick(() => {
          this.mySwiper = new window.Swiper(this.$refs.swiperBox, this.initParams)
          this.mySwiper.on('init', this.emitInit);
          this.mySwiper.init()
        })
      }
    },
    mounted () {
      this.init()
    }
  }
</script>
