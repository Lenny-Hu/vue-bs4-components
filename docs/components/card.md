<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 15:21:29
 * @LastEditTime: 2019-10-24 10:31:04
 * @LastEditors: Please set LastEditors
 -->


# Card
---

## 基础

<vuep template="#example1"></vuep>

<script v-pre type="text/x-template" id="example1">

  <template>
    <div>
      <b-card :top-img="topImg">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <b-button tag="a" href="/">Go somewhere</b-button>
      </b-card>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          topImg: {
            src: 'https://getbootstrap.com/docs/4.3/assets/img/examples/album.png',
            alt: 'getbootstrap'
          }
        };
      }
    };
  </script>

</script>

## 插槽位置

<vuep template="#example2"></vuep>

<script v-pre type="text/x-template" id="example2">

  <template>
    <div>
      <b-card>
        <template slot="header">header</template>
        body
        <template slot="other">other</template>
        <template slot="footer">footer</template>
      </b-card>
    </div>
  </template>

  <script>
    export default {};
  </script>

</script>

## Props

* `topImg`: `Object?: {}` 卡片顶部图片配置，有以下属性
  * `src`: `String?: ''` img 的 `src` 属性
  * `alt`: `String?: ''` img 的 `alt` 属性

## Solts

* `default`: 默认插槽，card-body
* `header`: card-header
* `footer`: card-footer
* `other`: 以子元素的方式插入到 `card-body` 之后
