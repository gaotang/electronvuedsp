import Promise from 'es6-promise'
import { consultApi as api } from '@/api'

describe('测试DSP咨询接口', () => {
  before(function () {
    Promise.polyfill()
  })

  it('测试getConsults方法：', () => {
    return api.getConsults({
      customId: 1703133,
      lastId: 4
    })
    .then(function (json) {
      // console.log('测试getConsults方法：', json)
      expect(json).to.be.an('array')
    })
    .catch(function (error) {
      console.log('error:', error)
    })
  })

  it('测试pendingData方法：', () => {
    const [doctorId, skip, take, flag] = [8250, 0, 20, 3]
    return api.pendingData(doctorId, skip, take, flag)
      .then(function (json) {
        // console.log('测试pendingData方法：', json)
        expect(json).to.be.an('object')
      })
      .catch(function (error) {
        console.log('error:', error)
      })
  })

  // it('测试sendMessage方法：', () => {
  //   const params = {
  //     ReDoctorId: 7228,
  //     ReDoctorName: 'yuanwentao001',
  //     CustomerId: 1700523,
  //     ReplyContent: '测试sendMessage方法',
  //     ServiceDeptCode: 'hzsj001',
  //     consultReplyType: 0,
  //     AppendInfo: ''
  //   }
  //   return api.sendMessage(params)
  //     .then(function (json) {
  //       expect(json).to.be.an('object')
  //     })
  //     .catch(function (error) {
  //       console.log('error:', error)
  //     })
  // })
})

