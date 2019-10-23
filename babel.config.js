/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:22:32
 * @LastEditTime: 2019-10-21 15:33:46
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  presets: [
    '@vue/app'
  ],
  env: {
    test: {
      plugins: [
        ['istanbul', {
          useInlineSourceMaps: false
        }]
      ]
    }
  }
}
