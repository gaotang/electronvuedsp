import Promise from 'es6-promise'
import { goodsApi as api } from '@/api'

describe('测试DSP咨询接口', () => {
  before(function () {
    Promise.polyfill()
  })

  it('测试 获得商品列表(goodsList) 方法：', () => {
    const params = {
      categoryId: '',
      secondCategoryId: '',
      goodsName: '',
      goodsType: '',
      pageIndex: 1,
      pageSize: 4,
      returnCount: '1',
      supplierId: '',
      cityCode: '',
      storeId: ''
    }
    return api.goodsList(params)
    .then(function (json) {
      // console.log(json.list[0])
      expect(json.count).to.be.an('number')
      expect(json.list).to.be.an('array')
    })
    .catch(function (error) {
      console.log('error:', error)
    })
  })

  it('测试 获得商品列表(goodsDetail) 方法：', () => {
    const goodsId = '2bef1289-1759-4351-891e-9ad09683d6bd'
    return api.goodsDetail(goodsId)
      .then(function (json) {
        // console.log(json)
        expect(json.goodsId).to.be.equal(goodsId)
      })
      .catch(function (error) {
        console.log('error:', error)
      })
  })

  // it('测试 商品推送数据接收(pushGoods) 方法：', () => {
  //   const params = {
  //     doctorId: 7228,
  //     doctorName: 'yuanwentao001',
  //     goodsId: '2bef1289-1759-4351-891e-9ad09683d6bd',
  //     goodsName: '',
  //     customerID: 1700523,
  //     subTitle: '测试商品',
  //     price: 1.0,
  //     imagUrl: '',
  //     categoryId: '1',
  //     secondCategoryId: '2',
  //     ServiceDeptCode: 'hzsj001'
  //   }
  //   return api.pushGoods(params)
  //     .then(function (json) {
  //       // console.log(json)
  //       expect(json).to.be.an('object')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })
})

