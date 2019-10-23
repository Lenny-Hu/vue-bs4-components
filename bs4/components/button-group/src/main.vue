<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:50
 * @LastEditTime: 2019-10-23 11:29:16
 * @LastEditors: Please set LastEditors
 -->

 <template>
  <div
    :class="[size ? `btn-group-${size}` : '', {'btn-group-toggle': isSelectionMode, 'btn-group-vertical': vertical, 'btn-group': !vertical }]"
  >
    <template v-if="isSelectionMode">
      <label class="btn" :class="setItemClasses(item)"
        v-for="(item, i) in list" :key="i"
      >
        <input :type="type" 
          :name="item.name ? item.name : false" 
          :value="item.value"
          v-model="selected"
          @change="change($event, item)"
        > {{item.text || item.value}}
      </label>
    </template>

    <template v-else>
      <slot></slot>
    </template>
  </div>
 </template>

<script>
  const typeList = ['checkbox', 'radio']
  export default {
    name: 'b-button-group',
    data () {
      return {
        selected: this.checked
      }
    },
    model: {
      prop: 'checked',
      event: 'change'
    },
    props: {
      checked: [String, Array],
      type: {
        type: String,
        validator (v) {
          let arr = [''].concat(typeList)
          return arr.includes(v)
        },
        default: ''
      },
      list: {
        type: Array
      },
      size: {
        type: String,
        validator (v) {
          let arr = ['sm', 'lg', '']
          return arr.includes(v)
        },
        default: ''
      },
      vertical: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      isSelectionMode () {
        return typeList.includes(this.type)
      }
    },
    methods: {
      change () {
        this.$emit('change', this.selected)
      },
      setItemClasses (item) {
        let results = [`btn-${item.type ? item.type : 'primary'}`]

        switch (this.type) {
          case 'checkbox':
            this.selected.indexOf(item.value) !== -1 && results.push('active')
            break;

          case 'radio':
            this.selected === item.value && results.push('active')
            break;
        
          default:
            break;
        }
        return results;
      }
    },
    watch: {
      checked (n) {
        this.selected = n
        this.change()
      }
    }
  }
</script>
