import axios from 'axios'
import config from '@/config'
import token from './authorization'

/**
 * 创建实例时设置配置的默认值
 */
const instance = axios.create({
  baseURL: config[process.env.NODE_ENV].BASE_URL.ZSTJ,
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
  config.headers.common['Authorization'] = token(config.data)
  return config
}, function (error) {
  return Promise.reject(error)
})

/**
 * 添加一个返回拦截器
 */
instance.interceptors.response.use(function (response) {
  if (response.status === 200) {
    if (response.data.Code === 1) {
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
  post: function (target, params = {}) {
    Object.assign(params, { timespan: Math.round(new Date().getTime() / 1000) })
    return instance.post(target, params)
  }
}
