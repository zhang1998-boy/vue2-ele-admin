import request from '@/utils/request'

// 获取用户注册列表
export function getCustomerList (params) {
  return request({
    url: `/api/v1/advertisers/applications`,
    method: 'GET',
    params
  })
}
// 同意注册
export function agreeReg (data) {
  return request({
    url: '/api/v1/advertisers/applications/agree',
    method: 'POST',
    data
  })
}
// 拒绝账号注册申请
export function refuseCustomerApply (data) {
  return request({
    url: `/api/v1//advertisers/applications/refuse`,
    method: 'POST',
    data
  })
}
// 重新发送邮件
export function resendEmail (data) {
  return request({
    url: `/api/v1/advertisers/applications/send_email`,
    method: 'POST',
    data
  })
}
// 禁用账号
export function DisableAccount (data) {
  return request({
    url: `/api/v1/advertisers/applications/disabled`,
    method: 'POST',
    data
  })
}
// 恢复账号
export function recoverAccount (data) {
  return request({
    url: `/api/v1/advertisers/applications/recover`,
    method: 'POST',
    data
  })
}
//获取授权客户列表
export function getEmpowerList (params) {
  return request({
    url: `/crm/v3/customers/customer_id_name`,
    method: 'GET',
    params //?is_all=fasle query=多媒介
  })
}
//选择授权客户
export function empowerCustomer (data) {
  return request({
    url: `/api/v1/advertiser/accredit`,
    method: 'POST',
    data
  })
}