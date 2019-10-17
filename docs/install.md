<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-15 17:52:46
 * @LastEditTime: 2019-10-17 13:53:00
 * @LastEditors: Please set LastEditors
 -->
# 安装
---

## CDN | LOCAL

`dist` 目录文件说明
* `components`: 每个组件的独立js文件目录
* `vue-bs4-components.common.js`: 一个给打包器用的 CommonJS 包
* `vue-bs4-components.umd.js`: 一个直接给浏览器或 AMD loader 使用的 UMD 包
* `vue-bs4-components.umd.min.js`: 压缩后的 UMD 构建版本
* `vue-bs4-components.css`: 提取出来的 CSS 文件

```html
// CDN
<script src="//unpkg.com/vue-bs4-components/dist/vue-bs4-components.umd.js"></script>
// LOCAL
<script src="dist/vue-bs4-components.umd.js"></script>
```

## NPM | YARN

```bash
npm install vue-bs4-components
// or
yarn add vue-bs4-components
```

```js
import bs4 from 'vue-bs4-components'

// 全部注册
import bs4 from 'vue-bs4-components'
Vue.use(bs4)

// 单个注册（插件安装形式）
import { Alert } from 'vue-bs4-components'
Vue.use(bs4)

// 单个注册（需要自定义名称的情况下）
import { Alert } from 'vue-bs4-components'
Vue.component(bs4.Alert.name, bs4.Alert)
Vue.component('custom-name', bs4.Alert) // 自定义名称单个注册
```

```html
// 使用组件 <b-组件名称></b-组件名称>
<b-alert>alert</b-alert>
```
