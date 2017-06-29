/**
 * @file api 健管师登录逻辑
 */
import { MD5 } from 'crypto-js'
import { dspAjax as ajax } from '@/utils/ajax'

const convert = {
  /**
   * 1.1 转换 健管师信息
   */
  UserInfo: (model) => {
    return {
      account: model.Account,
      doctorId: model.Doctor_ID,
      userName: model.Name,
      userAvator: model.PhotoUrl,
      deptId: model.Dept,
      deptCode: model.DeptCode,
      deptName: model.deptName,
      position: model.Position,
      serviceType: model.ServiceType,
      serviceLimit: model.ServiceLimit
    }
  }
}

export default {
  /**
   * 登录验证
   * @param {健管师帐号} account
   * @param {密码} password
   */
  loginValidate(account, password) {
    return ajax.get(`Login/LoginValidate?strAccount=${account}&strPassword=${MD5(password)}`).then(convert.UserInfo)
  },
  /**
   * 修改用户密码
   * @param {健管师帐号} account
   * @param {新密码} newPassword
   */
  modifyPassword(account, newPassword) {
    return ajax.get(`Login/ChangePassword?account=${account}&newPassword=${newPassword}`)
  }

}
