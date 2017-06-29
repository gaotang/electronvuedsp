/**
 * @file api 电话报告解读
 */
import { dspZhuAjax as ajax } from '@/utils/ajax'

export default {
  /**
   * 获取 推送报告解读用户数据列表
   * @param { PageState（请求的页面类型）：1、外呼执行；2、待联系执行；3、已经联系记录 } params
   */
  telReadReportUserInfos(params) {
    return ajax.post(`TelReadReport/TelReadReportUserInfos`, params)
  },
  /**
   * 取得数据中心体检报告
   * @param {客户编号} customerId
   * @param { [{ CheckUnitCode: '', WorkNo: '' }]} params
   */
  getHealthReport(customerId, params) {
    return ajax.post(`Common/GetHealthReports?intCustomerId=${customerId}`, params)
  },
  /**
   * 设置电话解读认领健管师
   * @param {订单号} orderNo
   * @param {健管师编号} doctorId
   * @param {健管师名称} doctorName
   */
  setTelServiceDoctor(orderNo, doctorId, doctorName) {
    return ajax.post(`TelReadReport/SetTelServiceDoctor?orderNo=${orderNo}&DoctorId=${doctorId}&DoctorName=${doctorName}`)
  },
  /**
   * 设置电话解读服务状态
   * @param {订单号} orderNo
   * @param { 1待联系；2客户忙待联系；3、已联系；4、健管师已经认领（不用）} state
   * @param {健管师编号} doctorId
   */
  setTelServiceState(orderNo, state, doctorId) {
    return ajax.post(`TelReadReport/SetTelServiceState?orderNo=${orderNo}&State=${state}&DoctorId=${doctorId}`)
  },
  /**
   * 电话拨号
   * @param {健管师编号} doctorId
   * @param {订单号} orderNo
   */
  call(doctorId, orderNo) {
    return ajax.post(`TelReadReport/Call?DoctorID=${doctorId}&OrderNo=${orderNo}`)
  },
  /**
   * 沟通记录（备注信息）
   * @param {订单号} orderNo
   * @param {客户编号} accountId
   * @param {备注} remark
   */
  setTelServiceRemark(orderNo, accountId, remark) {
    return ajax.post(`TelReadReport/SetTelServiceRemark?orderNo=${orderNo}&AccountId=${accountId}&Remark=${remark}`)
  },
  /**
   * 保存报告解读总结
   * @param {类型（Type）；1评估报告；2医生建议} params
   */
  saveTelReportSummarys(params) {
    return ajax.post(`TelReadReport/SaveTelReportSummarys`, params)
  },
  /**
   * 客户报告总结（电话解读）
   * @param {客户编号} customerId
   */
  telReportSummarys(customerId) {
    return ajax.post(`TelReadReport/TelReportSummarys?CustId=${customerId}`)
  },
  /**
   * 获取呼叫记录列表
   * @param {*} params
   */
  doctorVoiceCallRecords(params) {
    return ajax.post(`TelReadReport/DoctorVoiceCallRecords`, params)
  },
  /**
   * 修改可以预约的资源数量
   * @param {开始时间} startDate
   * @param {结束时间} endDate
   * @param {机构编号} deptID
   */
  setReservationResources(startDate, endDate, deptID) {
    return ajax.post(`TelReadReport/SetReservationResources?StartDate=${startDate}&EndDate=${endDate}&DeptID=${deptID}`)
  },
  /**
   * 获取指定时间段内的预约资源列表
   * @param {开始时间} startDate
   * @param {结束时间} endDate
   * @param {机构编号} deptID
   */
  getReservationResources(startDate, endDate, deptID) {
    return ajax.get(`TelReadReport/GetReservationResources?StartDate=${startDate}&EndDate=${endDate}&DeptID=${deptID}`)
  },
  /**
   * 一年的第几周日期
   * @param {年} year
   * @param {周} week
   */
  getResourcesCalendarFormat(year, week) {
    return ajax.get(`TelReadReport/GetResourcesCalendarFormat?Year=${year}&Week=${week}`)
  }
}
