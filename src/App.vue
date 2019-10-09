<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:22:32
 * @LastEditTime: 2019-10-09 16:05:59
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div id="app" class="g-doc">
    <div class="g-hd">
      <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#/home">
          <img src="./assets/logo.png" width="30" height="30" alt="">
          Vue-Bootstrap4-components
        </a>
        <a class="navbar-brand" href="https://github.com/Lenny-Hu/vue-bs4-components">github</a>
      </nav>
    </div>
    <div class="g-bd container-fluid d-flex">
      <div class="g-sd">
        <nav class="nav flex-column m-nav-sd">
          <router-link class="nav-link" :to="{name: nav.name}" v-for="nav in navList" :key="nav.path">
            {{nav.meta.title}}
          </router-link>
        </nav>
      </div>
      <div class="g-main">
        <h3>{{$route.meta.title}}</h3>
        <hr>
        <router-view></router-view>
      </div>
    </div>
    <div class="g-ft container-fluid text-center text-muted">
      <hr>
      <p>假装有个页脚</p>
    </div>
  </div>
</template>

<script>
import routes from './routes/base'

export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    navList () {
      return routes.filter(v => v.meta && v.meta.title)
    }
  },
  created () {
    console.log(this.$route)
  }
}
</script>

<style lang="scss">
@import './styles/main.scss';
.m-nav-sd {
  .nav-link {
    color: #666;

    &.router-link-active {
      color: #007bff;
    }
  }
}
</style>
