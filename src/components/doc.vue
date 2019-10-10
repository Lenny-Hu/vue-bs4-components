<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 09:56:15
 * @LastEditTime: 2019-10-10 15:30:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <template v-if="options">
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
    </template>

    <template v-if="events">
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
    </template>

    <template v-if="slots">
      <h4>Slots</h4>
      <hr>
      <table class="table table-striped">
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
        <tr v-for="(v, k) in slots" :key="k">
          <td>{{k}}</td>
          <td>{{v.desc}}</td>
        </tr>
      </table>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      options: Object,
      events: Object,
      slots: Object
    }
  }
</script>

<style lang="scss" scoped>

</style>