import { MD5 } from 'crypto-js'
import { btoa } from 'Base64'

const Key = 'HZ_API_V2'
const Secret = '1!2@3#4$5%6^'

// 生成相关的验签
const Token = function (url, param) {      // 掌上体检APP接口验签
  const [timespan, tag] = [Math.round(new Date().getTime() / 1000), (url.indexOf('?') === -1 ? '?' : '&')]
  let preSign = `${url}timespan=${timespan}|${Secret}`
  if (param) {
    const paramStr = JSON.stringify(param)
    preSign = `${url}${tag}|${paramStr}|${Secret}`
  }
  // 1. 生成相关的验签
  const safeStr = unescape(encodeURIComponent(`${Key}:${MD5(preSign)}`))
  // 2. Base64 加密
  return `Basic ${btoa(safeStr)}`
}

export default Token
