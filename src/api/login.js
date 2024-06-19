import request from '@/utils/request'

// 密码登录
export function pwdlogin (data) {
  return request({
    url: '/auth/v1/pwd_login?login_system=gatherone_oms',
    // login_system=gatherone_oms
    method: 'POST',
    data
  })
}
// 手机号登陆
export function phonePwdlogin (data) {
  return request({
    url: '/auth/v1/sms_login?login_system=gatherone_crm',
    method: 'POST',
    data
  })
}
//  导入接口
export function achievementImport (data) {
  return request({
    url: '/api/v1/excel/achievementImport',
    method: 'POST',
    data
  })
}


//获取短信验证码
export function getPhoneCode (params) {
  return request({
    url: '/ucenter/v1/systems/sms_codes',
    method: 'GET',
    params
  })
}
//校验验证码
export function verifySmsCode (data) {
  return request({
    url: '/ucenter/v1/systems/verify_sms_codes',
    method: 'POST',
    data
  })
}
//忘记密码
export function forgetPassword (data) {
  return request({
    url: '/ucenter/v1/systems/forget_password',
    method: 'POST',
    data
  })
}
//注册
export function registrations (data) {
  return request({
    url: '/ucenter/v1/systems/registrations',
    method: 'POST',
    data
  })
}