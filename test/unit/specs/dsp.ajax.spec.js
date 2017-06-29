import Promise from 'es6-promise'
import { dspAjax as ajax } from '@/utils/ajax/dsp'

describe('测试DSP接口环境', () => {
  before(function () {
    Promise.polyfill()
  })

  it('测试GET方法', () => {
    return ajax.get('Role')
      .then(function (json) {
        expect(json).to.be.an('array')
      })
  })

  it('测试POST方法', () => {
    return ajax.post('Questions', {
      IsEnable: true,
      Code: '',
      Title: '111'
    })
      .then(function (json) {
        expect(json).to.be.an('array')
      })
  })
})

