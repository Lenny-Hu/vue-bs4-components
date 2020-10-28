<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 15:21:29
 * @LastEditTime: 2020-10-28 11:35:22
 * @LastEditors: Please set LastEditors
 -->


# Carousel
---

## 基础

> 此组件仅依赖 [swiper](https://github.com/nolimits4web/swiper)，需要先引用以下代码

```
<link rel="stylesheet" href="//unpkg.com/swiper@6.3.4/swiper-bundle.min.css">
<script src="//unpkg.com/swiper@6.3.4/swiper-bundle.min.js"></script>
```


<vuep template="#example1"></vuep>

<script v-pre type="text/x-template" id="example1">

  <template>
    <div>
      <b-carousel :options=options style="height: 300px;">
        <b-carousel-slide v-for="(item, i) in list" :key="i">
          <img :src="item">
        </b-carousel-slide>
      </b-carousel>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: [
            'https://swiperjs.com/demos/images/nature-1.jpg',
            'https://swiperjs.com/demos/images/nature-2.jpg',
            'https://swiperjs.com/demos/images/nature-3.jpg',
            'https://swiperjs.com/demos/images/nature-4.jpg'
          ],
          options: {
            pagination: true,
            navigation: true,
            scrollbar: true
          }
        };
      }
    };
  </script>
</script>

## 自动播放和循环

<vuep template="#example2"></vuep>

<script v-pre type="text/x-template" id="example2">

  <template>
    <div>
      <b-carousel :options=options style="height: 300px;">
        <b-carousel-slide v-for="(item, i) in list" :key="i">
          <img :src="item">
        </b-carousel-slide>
      </b-carousel>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: [
            'https://swiperjs.com/demos/images/nature-1.jpg',
            'https://swiperjs.com/demos/images/nature-2.jpg',
            'https://swiperjs.com/demos/images/nature-3.jpg',
            'https://swiperjs.com/demos/images/nature-4.jpg'
          ],
          options: {
            autoplay: true,
            pagination: true,
            loop: true
          }
        };
      }
    };
  </script>
</script>

## 使用实例对象

获得实例的方式

* 从 `init` 事件的第一个参数
* 通过 `refs` 访问子组件，[参考vue文档](https://cn.vuejs.org/v2/guide/components-edge-cases.html#访问子组件实例或子元素)

<vuep template="#example3"></vuep>

<script v-pre type="text/x-template" id="example3">

  <template>
    <div>
      <b-carousel :options="options" style="height: 300px;" @init="onInit">
        <b-carousel-slide v-for="(item, i) in list" :key="i">
          <img :src="item">
        </b-carousel-slide>
      </b-carousel>
      <br>
      <b-button @click.native="handle('slidePrev')">上一张</b-button>
      <b-button @click.native="handle('slideNext')">下一张</b-button>
      <div>
        第一张：{{mySwiper.isBeginning}}
        <br>
        最后一张：{{mySwiper.isEnd}}
        <br>
        当前的索引：{{mySwiper.activeIndex}}
      </div>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          mySwiper: {},
          options: {
          },
          list: [
            'https://swiperjs.com/demos/images/nature-1.jpg',
            'https://swiperjs.com/demos/images/nature-2.jpg',
            'https://swiperjs.com/demos/images/nature-3.jpg',
            'https://swiperjs.com/demos/images/nature-4.jpg'
          ]
        };
      },
      methods: {
        handle (name) {
          this.mySwiper[name]()
        },
        onInit (mySwiper) {
          // 将init实践获得的实例保存起来，可以调用实例上的任何方法或属性
          this.$set(this, 'mySwiper', mySwiper)
        }
      }
    };
  </script>
</script>

## 懒加载

在 `b-carousel` 组件初始化的时候，应设置以下选项
```
{
  preloadImages: false,
  lazy: true
}
```

<vuep template="#example4"></vuep>

<script v-pre type="text/x-template" id="example4">

  <template>
    <div>
      <b-carousel :options=options style="height: 300px;">
        <b-carousel-slide v-for="(item, i) in list" :key="i"
          :lazy="{src: item}"
        >
        </b-carousel-slide>
      </b-carousel>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: [
            'https://swiperjs.com/demos/images/nature-1.jpg',
            'https://swiperjs.com/demos/images/nature-2.jpg',
            'https://swiperjs.com/demos/images/nature-3.jpg',
            'https://swiperjs.com/demos/images/nature-4.jpg'
          ],
          options: {
            pagination: true,
            navigation: true,
            preloadImages: false,
            lazy: true
          }
        };
      }
    };
  </script>
</script>

## Carousel Props

* `options`: `Object?: {}` [Swiper](https://swiperjs.com/api/) 对应选项配置
  * `pagination`: `(Boolean | Object)?: undefined` 传 `Object` 或 `true` 时，显示分页（下面的属性相同）
  * `navigation`: `(Boolean | Object)?: undefined` 显示导航
  * `scrollbar`: `(Boolean | Object)?: undefined` 显示滚动条

## Carousel Slide Props

* `lazy`: `Object?: {}` [Swiper Lazy Loading](https://swiperjs.com/api/#lazy) 懒加载配置
  * `slideBackground`: `String?: undefined`  以 `b-carousel-slide` 为载体的背景图地址
  * `src`: `String?: undefined` 以 `img` 为载体的图片地址
  * `srcset`: `String?: undefined` 以 `img` 为载体的`2x`图地址
  * `background`: `String?: undefined` 以 `div` 为载体的背景图地址

## Carousel Events

* `init`: `(swiper: Object)` `swiper` 初始化时触发

## Carousel Solts

* `default`: 默认插槽，通常使用 `b-carousel-slide` 组件插入内容

## Carousel Slide Solts

* `default`: 默认插槽
