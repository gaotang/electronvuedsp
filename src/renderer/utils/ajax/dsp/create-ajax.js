import axios from 'axios'
import config from '@/config'
import token from './authorization'

/**
 * 创建实例时设置配置的默认值
 */
var instance = axios.create({
  // baseURL: config[process.env.NODE_ENV].BASE_URL.DSP,
  baseURL: config[process.env.NODE_ENV].BASE_URL.DSP,
  timeout: 5000,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  }
})

/**
 * 添加一个请求拦截器
 */
instance.interceptors.request.use(function (config) {
  // 在请求发送之前做一些事
  config.headers.common['Authorization'] = token(config.url, config.data)
  // config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  return config
}, function (error) {
  // 当出现请求错误是做一些事
  return Promise.reject(error)
})

/**
 * 添加一个返回拦截器
 */
instance.interceptors.response.use(function (response) {
  // 对返回的数据进行一些处理
  if (response.status === 200) {
    if (response.data.state === 1) {
      return response.data.Data
    } else {
      // console.log(response.data.message)
      return Promise.reject(response.data.message)
    }
  } else {
    // console.log(response.statusText)
    return Promise.reject(response.statusText)
  }
}, function (error) {
  // 对返回的错误进行一些处理
  return Promise.reject(error)
})

export default {
  get: function (target) {
    return instance.get(target)
  },
  post: function (target, params = {}) {
    return instance.post(target, params)
  }
}
