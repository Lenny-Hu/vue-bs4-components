/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-18 14:29:52
 * @LastEditTime: 2019-10-18 16:13:37
 * @LastEditors: Please set LastEditors
 */
module.exports = {
  'check-coverage': false,
  'per-file': true,
  'skip-full': true,
  all: true,
  include: [
    'bs4/**/*.{js,vue}'
  ],
  exclude: [
    // 'src/*.js'
    // '**/index.js'
  ],
  reporter: [
    'lcov',
    'text',
    'text-summary'
  ],
  extension: [
    '.js',
    '.vue'
  ]
};
