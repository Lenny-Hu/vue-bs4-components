<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 09:56:15
 * @LastEditTime: 2019-10-10 09:56:15
 * @LastEditors: your name
 -->
<template>
  <div>
    <h4>Options</h4>
    <hr>
    <table class="table table-striped">
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
      <tr v-for="(v, k) in options" :key="k">
        <td>{{k}}</td>
        <td>{{v.type | type}}</td>
        <td>{{v.default}}</td>
        <td>{{v.desc}}</td>
      </tr>
    </table>

    <h4>Events</h4>
    <hr>
    <table class="table table-striped">
      <tr>
        <th>Name</th>
        <th>Params</th>
        <th>Description</th>
      </tr>
      <tr v-for="(v, k) in events" :key="k">
        <td>{{k}}</td>
        <td>{{v.params}}</td>
        <td>{{v.desc}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    props: {
      options: Object,
      events: Object,
    }
  }
</script>

<style lang="scss" scoped>

</style>