
import request from '@/utils/request'

// 获取个人信息
export function getUserInfo () {
  return request({
    url: '/ucenter/v1/systems/users/self_infos',
    method: 'GET'
  })
}
// 修改个人信息
export function modifyUserInfo (data) {
  return request({
    url: '/ucenter/v1/systems/users/self_infos',
    method: 'PUT',
    data
  })
}
// 更换手机号
export function changeMobile (data) {
  return request({
    url: '/ucenter/v1/systems/users/mobiles',
    method: 'PUT',
    data
  })
}
// 更换头像
export function changeAvatar (data) {
  return request({
    url: '/ucenter/v1/systems/users/avatars',
    method: 'POST',
    data
  })
}
// 修改密码
export function ChangePassword (data) {
  return request({
    url: '/ucenter/v1/systems/users/passwords',
    method: 'PUT',
    data
  })
}