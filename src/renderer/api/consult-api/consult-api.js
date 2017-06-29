/**
 * @file api 每天咨询
 */
import { dspAjax as ajax } from '@/utils/ajax'

const covert = {
  /**
   * 1.1 获取客户待处理列表
   * @param { 未处理客户列表 } PendingData
   * @param { 第一个客户咨询记录 } FirstCustomerConsultRecords
   */
  Pending: ({ PendingData = { Data: [], Count: 0 }, FirstCustomerConsultRecords = [] }) => {
    let tempData = []
    PendingData.Data.forEach(function (item) {
      tempData.push({
        Id: item.ROWNUMBER,
        ConsultId: item.HealthConsultId,
        ConsultTitle: item.ConsultTitele,
        Priority: item.Priority,
        CustomerId: item.CustId,
        CustomerName: item.CustName,
        Nickname: item.Nickname,
        DpetId: item.ServiceDeptId,
        DeptCode: item.ServiceDeptCode,
        DeptName: item.DeptName,
        SystemType: item.SystemType,
        Birthday: item.Birthday,
        Mobile: item.Mobile,
        Sex: item.Sex,
        CommitOn: item.CommitOn,
        PhotoUrl: item.PhotoUrl
      })
    })
    let result = { Data: tempData, Count: PendingData.Count, FirstRecords: covert.Consults(FirstCustomerConsultRecords) }
    return result
  },
  /**
   * 1.2 转换用户咨询记录 集合
   * @param { Content: string } models
   *        { 1：“递交” 2:“未递交” } DeliverState
   *        { 客户咨询 1: “文本”2:“图片” 3:“体检报告” 4:“问卷调查”   健管师回复：0：纯文本： 1：带连接  2：商品推送 } ConsultType
   *        { 图片地址,体检报告号，问卷调查号 } AppendInfo
   */
  Consults: (models = []) => {
    let result = []
    models.forEach(function (item) {
      result.push({
        Id: item.Id,
        CustomerId: item.CustomerId,
        ReDoctorId: item.ReDoctorId,
        IsDoctorReply: item.IsDoctorReply,
        ConsultType: item.ConsultType,
        AppendInfo: item.AppendInfo,
        DeliverState: item.DeliverState,
        DpetId: item.DeptID,
        DeptName: item.DeptName,
        Content: item.Content,
        CommitOn: item.CommitOn,
        IsReplied: item.IsReplied,
        IsAutoSend: item.IsAutoSend,
        PhotoUrl: item.PhotoUrl
      })
    })
    return result
  }
}

export default {
  /**
   * 1. 获取咨询管理待处理列表，获取左侧列表以及列表第一个客户的客户信息及咨询记录
   * @param {待回复的健管师ID} doctorId
   * @param {跳过数量} skip
   * @param {取数据量} take
   * @param {1：查看我的客户的问题；2：查看转入的问题；3：查看全部问题} flag
   */
  pendingData(doctorId, skip, take, flag) {
    return ajax.get(`HealthConsult/PendingData/${doctorId}/${skip}/${take}/${flag}`).then(covert.Pending)
  },
  /**
   * 2. 获取用户咨询记录
   * @param { customId: number, lastId: number }
   */
  getConsults({ customId, lastId = 0 }) {
    return ajax.get(`HealthConsult/Records/${customId}/${lastId}`).then(covert.Consults)
  },
  /**
   * 3. 发送聊天记录
   * @param { ReplyContent: string }
   */
  sendMessage(params) {
    return ajax.post(`HealthConsult/AddDoctorReply`, params)
  }
}
