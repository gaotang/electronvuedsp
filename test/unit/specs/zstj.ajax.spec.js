import Promise from 'es6-promise'
import { zstjAjax as ajax } from '@/utils/ajax/zstj'

describe('测试ZSTJ接口环境', () => {
  before(function () {
    Promise.polyfill()
  })

  it('测试POST方法', () => {
    return ajax.post('BMSReportinfo/GetList', {
      ReportItemName: ''
    })
      .then(function (json) {
        expect(json).to.be.an('array')
      })
      .catch(function (error) {
        console.log('error:', error)
      })
  })
})

