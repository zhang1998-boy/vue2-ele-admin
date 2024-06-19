
/* eslint-disable import/no-duplicates */
import axios from 'axios'
// import store from '@/store' // 引入vueX
import router from '../router'
import { notification } from 'ant-design-vue'
import nprogress from 'nprogress'
import '@/style/nprogress.css';
import Cookies from 'js-cookie'


// 导入封装的message函数
import showMessage from './showMessage'
import { getDomain } from './cookieOprtate';
const baseURL = process.env.NODE_ENV === "development" ? "" : 'https://gateway-open-uat.longfor.com/zt-fill-uat'
// 请求拦截器
const CASTGC = router.app?._route.query?.CASTGC ? router.app._route.query?.CASTGC : 'TGT-22334-YHFU1desW6ko4CKD0kkEZM0SNNQEVTeXxm6Vg69Y6g45DWyiVtIalkC9kLw1rhhqoxU-minerva'

Cookies.set('CASTGC', CASTGC, { domain: '.longfor.com' });
Cookies.set('CASTGC', CASTGC);


const service = axios.create({
  baseURL,
  withCredentials: true,
  crossDomain: true
})
let NotificationRes = false


service.interceptors.request.use(
  config => {
    // 加载进度条
    nprogress.start();
    return config
  },
  error => {
    nprogress.done();
    return Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(response => {
  localStorage.setItem('retCode', response.data.data.retCode)
  if (response.data?.retCode == '0') {
    nprogress.done();
    return response.data
  } else {
    showMessage(response.data.msg) // 抛出错误信息
    // if (response.data.code !== 0 && response.data.code !== 4108) {
    //   showMessage('未绑定系统用户')
    // }
    // if (response.data.code === 4101 || response.data.code === 4104 || response.data.code === 4503) {
    //   deleteAllCookies()
    //   // setTimeout(() => {
    //   //   sessionStorage.clear()
    //   //   window.location.reload()
    //   //   router.push('/login')
    //   // }, 10)
    // }
  }
}, function (err) {
  nprogress.done();
  if (err && err.response) {
    switch (err.response.status) {
      // case 401: err.message = '登录信息过期,请重新登录(401)'; localStorage.clear(); router.push('/login'); break
      case 403: err.message = '没有权限(403)'; break
      case 404: err.message = '访问资源不存在(404)'; break
      case 405: err.message = '请求方法不允许(405)'; break
      case 408: err.message = '请求超时(408)'; break
      case 500: err.message = '服务器错误(500)'; break
      case 501: err.message = '服务未实现(501)'; break
      case 502: err.message = '网络错误(502)'; break
      case 503: err.message = '服务不可用(503)'; break
      case 504: err.message = '网络超时(504)'; break
      case 505: err.message = 'HTTP版本不受支持(505)'; break
      default: err.message = `连接出错(${err.response.status})!`
    }
  } else {
    err.message = '连接服务器失败!'
  }
  if (!NotificationRes) {
    NotificationRes = true
    notification.error({ title: '提示', message: err.message })
    setTimeout(() => {
      NotificationRes = false
    }, 3000)
  }
  return Promise.reject(err)
})

// 删除cookie方法
export function deleteAllCookies () {
  // Cookies.remove("user_token");
  let domian = getDomain()
  Cookies.remove("user_token", { domain: domian })
}
export default service
