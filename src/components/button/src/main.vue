<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-24 16:13:50
 * @LastEditTime: 2019-10-12 16:03:11
 * @LastEditors: Please set LastEditors
 -->

<script>
  export default {
    name: 'b-button',
    render: function (createElement) {
      return createElement(
        this.tag,   // 标签名称
        {
          'class': this.class,
          attrs: this.attrs
        },
        this.$slots.default // 子节点数组
      )
    },
    props: {
      type: {
        type: String,
        validator (v) {
          let arr = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark', 'link']
          return arr.includes(v)
        },
        default: 'primary'
      },
      tag: {
        type: String,
        default: 'button'
      },
      outline: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        validator (v) {
          let arr = ['sm', 'lg', '']
          return arr.includes(v)
        },
        default: ''
      },
      block: {
        type: Boolean,
        default: false
      },
      state: {
        type: String,
        default: ''
      },
      href: {
        type: String,
        default: ''
      },
      target: {
        type: String,
        default: '_self'
      },
      name: {
        type: String,
        default: ''
      }
    },
    computed: {
      class () {
        let type = this.outline ? 'btn-outline' : 'btn'
        
        return [
          'btn',
          `${type}-${this.type}`,
          this.size ? `btn-${this.size}` : '',
          this.block ? `btn-block` : '',
          this.state
        ]
      },
      attrs () {
        let result = {}

        switch (this.tag) {
          case 'button':
          case 'input':
            result.name = this.name
            result.type = 'button'
            result.disabled = this.state === 'disabled'
            result.value = this.$slots.default && this.$slots.default.length ? this.$slots.default[0].text : ''
            break

          case 'a':
            result.href = this.href
            result.target = this.target
            break
        
          default:
            break
        }

        return result
      }
    },
    methods: {
    },
    created () {
    }
  }
</script>
