/**
 * @file api 商品推送
 */
import { dspAjax as ajax } from '@/utils/ajax'

export default {
  /**
   * 获得商品列表
   * @param { returnCount: 返回'1',需要数据的总条数 } params
   */
  goodsList(params) {
    return ajax.post(`VIP/GoodsList`, params)
  },
  /**
   * 获取商品详情
   * @param { 商品编号 } goodsId
   */
  goodsDetail(goodsId) {
    return ajax.get(`VIP/GoodsDetail/${goodsId}`)
  },
  /**
   * 商品推送数据接收
   * @param {*商品推送数据接收} params
   */
  pushGoods(params) {
    return ajax.post(`VIP/PushGoods`, params)
  }

}
