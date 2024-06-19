
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入antdesign
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'
import axios from 'axios'
import '@/style/element-ui.scss' // 引入全局样式
import '@/style/reset.css'// 清除默认样式
import '@/style/iconfont.css'// 引入阿里图标
import '@/utils/directive.js' // 引入axios
import '@/style/dark1.less'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入message.js
import message from '@/utils/antMessage.js'
//引入VueCropper
import VueCropper from 'vue-cropper'
import Cookies from "js-cookie";
import './assets/css/btnCommon.less';


let pathName = window.location.pathname
if (localStorage.getItem('mode') === 'dark' && pathName !== '/login') {
  import('@/style/dark.css')
}
Vue.prototype.axios = axios
Vue.prototype.$message = message
Vue.use(Antd) // 拖拽弹窗，在需要用到拖拽功能的弹窗标签上加v-dialogDrag
Vue.use(ElementUI) // 拖拽弹窗，在需要用到拖拽功能的弹窗标签上加v-dialogDrag
Vue.use(VueCropper)
Vue.use(Cookies)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
