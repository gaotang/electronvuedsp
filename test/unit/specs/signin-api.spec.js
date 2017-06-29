import Promise from 'es6-promise'
import { signinApi as api } from '@/api'

describe('测试DSP咨询接口', () => {
  before(function () {
    Promise.polyfill()
  })

  it('测试 登录(loginValidate) 方法：', () => {
    const [uid, pwd] = ['yuanwentao001', '111111']
    return api.loginValidate(uid, pwd)
    .then(function (json) {
      // console.log('loginValidate:', json)
      expect(json).to.be.an('object')
      done()
    })
    .catch(function (error) {
      console.log('error:', error)
    })
  })
})

