import { MD5 } from 'crypto-js'
import { btoa } from 'Base64'

const Key = 'HZ_PME_API_V1'
const Secret = '1!2@3#4$5%6^'

// 生成相关的验签
const Token = function (param) {      // 掌上体检APP接口验签
  const preSign = Object.assign(param, {
    secret: Secret
  })
  // 1. 根据 Key 排序
  const [arrKeyPreSign, arrPreSign] = [Object.keys(preSign).sort(), {}]
  arrKeyPreSign.forEach(function (key, index, arr) {
    arrPreSign[key] = preSign[key]
  })
  // 2. 把对象转换为小写的字符串
  const newPreSign = JSON.stringify(arrPreSign).toLowerCase()
  // 3. 生成相关的验签
  const safeStr = unescape(encodeURIComponent(`${Key}:${MD5(newPreSign)}`))
  // 4. Base64 加密
  return `Basic ${btoa(safeStr)}`
}

export default Token
