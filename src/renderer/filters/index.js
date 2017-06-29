import Vue from 'vue'

/**
 * 1.1 清除时间字符串中的“T”和豪秒数
 */
Vue.filter('clearT', function (value = '') {
  if (value.indexOf('T') !== -1) {
    value = value.replace('T', ' ')
  }
  if (value.indexOf('.') !== -1) {
    value = value.split('.')[0]
  }
  return value
})

/**
 * 1.2 分割字符串
 * @param {默认长度为 4} length
 */
Vue.filter('subStr', function (value = '', length = 4) {
  if (value) {
    value = value.substring(0, length)
  }
  return value
})
