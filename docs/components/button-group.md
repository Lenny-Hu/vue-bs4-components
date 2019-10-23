<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 15:21:29
 * @LastEditTime: 2019-10-23 11:28:01
 * @LastEditors: Please set LastEditors
 -->


# ButtonGroup
---

## 基础

<vuep template="#example1"></vuep>

<script v-pre type="text/x-template" id="example1">

  <template>
    <div>
      <b-button-group>
        <template v-for="(item, i) in list">
          <b-button :type="item" :key="i">
            {{item}}
          </b-button>
        </template>
      </b-button-group>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'secondary']
        };
      }
    };
  </script>

</script>

## Checkbox

<vuep template="#example2"></vuep>

<script v-pre type="text/x-template" id="example2">

  <template>
    <div>
      <b-button-group
        type="checkbox"
        :list="list"
        v-model="selected"
      >
      </b-button-group>
      {{selected}}
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: [
            {
              value: '1'
            },
            {
              value: '2',
              text: 'text2'
            },
            {
              value: '3',
              text: 'text3',
              name: 'name3',
              type: 'success'
            }
          ],
          selected: ['1']
        }
      }
    };
  </script>

</script>

## Radio

<vuep template="#example3"></vuep>

<script v-pre type="text/x-template" id="example3">

  <template>
    <div>
      <b-button-group
        type="radio"
        :list="list"
        v-model="selected"
      >
      </b-button-group>
      {{selected}}
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: [
            {
              value: '1'
            },
            {
              value: '2',
              text: 'text2'
            },
            {
              value: '3',
              text: 'text3',
              name: 'name3',
              type: 'success'
            }
          ],
          selected: '1'
        };
      }
    };
  </script>
  
</script>

## Sizes

<vuep template="#example4"></vuep>

<script v-pre type="text/x-template" id="example4">

  <template>
    <div>
      <b-button-group>
        <b-button>正常</b-button>
        <b-button>正常</b-button>
      </b-button-group>&nbsp;
      <template v-for="(item, i) in list">
        <b-button-group :size="item" :key="i">
          <b-button>{{item}}</b-button>
          <b-button>{{item}}</b-button>
        </b-button-group>
        &nbsp;
      </template>
    </div>
  </template>

  <script>
    export default {
      data () {
        return {
          list: ['sm', 'lg']
        };
      }
    };
  </script>
  
</script>

## Vertical

<vuep template="#example5"></vuep>

<script v-pre type="text/x-template" id="example5">

  <template>
    <div>
      <b-button-group :vertical="true">
        <b-button>vertical</b-button>
        <b-button>vertical</b-button>
        <b-button>vertical</b-button>
      </b-button-group>
    </div>
  </template>

  <script>
    export default {};
  </script>
  
</script>

## Props

* `type`: `String?: ''` 类型，可选值 ['checkbox', 'radio']
* `list`: `Array?: []` 对象数组，当`type != ''` 时，传递的列表数据，有以下属性
  * `value`: `String: ''` input的`value`属性值
  * `text`: `String?: value` 显示文本
  * `name`: `String?: ''` input的`name`属性值
  * `type`: `String?: primary` 按钮的外观样式

* `size`: `String?: ''` 大小，可选值['lg', 'sm']
* `vertical`: `Boolean?: false` 垂直显示

## Model

  * `v-model`: `(Array | String)?: ''` 当`type`为`checkbox、radio`时，选中的值

## Solts

* `default`: 默认插槽，使用时，`type` 应等于 `''`
