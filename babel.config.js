/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-25 10:22:32
 * @LastEditTime: 2019-09-25 10:22:32
 * @LastEditors: your name
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
