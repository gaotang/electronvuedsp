import { consultApi, goodsApi } from '@/api'

export default {
  /**
   * 获取 客户信息
   */
  Custom: () => {
    return goodsApi
  },
  /**
   * 获取 客户报告
   */
  Report: () => { },
  /**
   * 获取 客户问卷
   */
  Questionnaire: () => { },
  /**
   * 转交 客户给其他健管师
   */
  TurnOver: () => { },
  /**
   * 获取 常用短语
   */
  UsefulExpressions: () => { },
  /**
   * 获取 客户列表
   */
  Customs: consultApi.pendingData,
  /**
   * 获取 客户咨询记录
   */
  ConsultRecords: consultApi.getConsults,
  /**
   * 发送 健管师聊天记录
   */
  SendMessage: consultApi.sendMessage
}
