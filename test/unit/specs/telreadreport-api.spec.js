import Promise from 'es6-promise'
import { telReadReportApi as api } from '@/api'

describe('测试DSP咨询接口', () => {
  before(function () {
    Promise.polyfill()
  })

  it('测试获取 推送报告解读用户数据列表(telReadReportUserInfos) 方法：', () => {
    const params = {
      Name: '',
      Mobile: '',
      DoctorId: 7228,
      OrderNo: '',
      State: 1,
      PageState: 1,
      StartDate: '',
      EndDate: '',
      ReServation: true
    }
    return api.telReadReportUserInfos(params)
      .then(function (json) {
        // console.log('telReadReportUserInfos:', json)
        expect(json).to.be.an('array')
      })
      .catch(function (error) {
        console.log('error:', error)
      })
  })

  // it('测试 取得数据中心体检报告(getHealthReport) 方法：', () => {
  //   const customId = 1700523
  //   const params = [
  //     {
  //       CheckUnitCode: '',
  //       WorkNo: ''
  //     }
  //   ]
  //   return api.getHealthReport(customId, params)
  //     .then(function (json) {
  //       console.log(json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 设置电话解读认领健管师(setTelServiceDoctor) 方法：', () => {
  //   const [orderNo, doctorId, doctorName] = ['', 7228, 'yuanwentao001']
  //   return api.setTelServiceDoctor(orderNo, doctorId, doctorName)
  //     .then(function (json) {
  //       console.log(json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 设置电话解读服务状态(setTelServiceState) 方法：', () => {
  //   const [orderNo, state, doctorId] = ['', 1, 7228]
  //   return api.setTelServiceState(orderNo, state, doctorId)
  //     .then(function (json) {
  //       console.log(json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 电话拨号(call) 方法：', () => {
  //   const [doctorId, orderNo] = [7228, '']
  //   return api.call(doctorId, orderNo)
  //     .then(function (json) {
  //       console.log(json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 沟通记录（备注信息）(setTelServiceRemark) 方法：', () => {
  //   const [orderNo, accountId, remark] = [7228, '']
  //   return api.setTelServiceRemark(orderNo, accountId, remark)
  //     .then(function (json) {
  //       console.log(json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 保存报告解读总结(saveTelReportSummarys) 方法：', () => {
  //   const params = {

  //   }
  //   return api.saveTelReportSummarys(params)
  //     .then(function (json) {
  //       console.log(json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 客户报告总结（电话解读）(telReportSummarys) 方法：', () => {
  //   const customerId = 0
  //   return api.telReportSummarys(customerId)
  //     .then(function (json) {
  //       console.log(json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 获取呼叫记录列表(doctorVoiceCallRecords) 方法：', () => {
  //   const params = {

  //   }
  //   return api.doctorVoiceCallRecords(params)
  //     .then(function (json) {
  //       console.log(json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 修改可以预约的资源数量(setReservationResources) 方法：', () => {
  //   const [startDate, endDate, deptID] = ['2017-01-01', '2017-06-01', 4]
  //   return api.setReservationResources(startDate, endDate, deptID)
  //     .then(function (json) {
  //       console.log('setReservationResources:', json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 获取指定时间段内的预约资源列表(getReservationResources) 方法：', () => {
  //   const [startDate, endDate, deptID] = ['2017-01-01', '2017-06-01', 4]
  //   return api.getReservationResources(startDate, endDate, deptID)
  //     .then(function (json) {
  //       console.log('getReservationResources:', json)
  //       expect(json).to.be.an('object')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })

  // it('测试 一年的第几周日期(getResourcesCalendarFormat) 方法：', () => {
  //   const [year, week] = [2017, 12]
  //   return api.getResourcesCalendarFormat(year, week)
  //     .then(function (json) {
  //       // console.log('getResourcesCalendarFormat:', json)
  //       expect(json).to.be.an('array')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })
})

