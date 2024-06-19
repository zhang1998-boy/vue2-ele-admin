import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Cookies from 'js-cookie'
import { getDomain } from '../utils/cookieOprtate';

Vue.use(VueRouter)
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function push (location) {
  return originPush.call(this, location).catch(err => err)
}
VueRouter.prototype.replace = function push (location) {
  return originReplace.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: to => {
      return '/businessData'
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index')
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index'),
    children: [
      {
        path: '/businessData',
        name: 'BusinessData',
        component: () => import('@/views/Home/mangement/dataMengent'),
        meta: {
          activeMenu: 'businessData', // 主菜单 的 接口文档 高亮
          path_name: '运营填报 / 业绩数据',
          name: '业绩数据',
        }
      },
      {
        path: '/planMengent',
        name: 'planMengent',
        component: () => import('@/views/Home/mangement/planMengent'),
        meta: {
          activeMenu: 'planMengent',
          path_name: '运营填报 / 运营计划',
          name: '运营计划',
        }
      },
      {
        path: '/designMengent',
        name: 'designMengent',
        component: () => import('@/views/Home/mangement/designMengent'),
        meta: {
          activeMenu: 'designMengent',
          path_name: '运营填报 / 在建规模',
          name: '在建规模',
        }
      },
      {
        path: '/watchMengent',
        name: 'watchMengent',
        component: () => import('@/views/Home/mangement/watchMengent'),
        meta: {
          activeMenu: 'watchMengent',
          path_name: '运营填报 / 在建监管',
          name: '在建监管',
        }
      },
      {
        path: '/goodsStructure',
        name: 'goodsStructure',
        component: () => import('@/views/Home/marketingManagement/goodsStructure'),
        meta: {
          activeMenu: 'goodsStructure',
          path_name: '营销填报 / 货值结构',
          name: '货值结构',
        }
      },
      {
        path: '/backManagement',
        name: 'backManagement',
        component: () => import('@/views/Home/marketingManagement/backManagement'),
        meta: {
          activeMenu: 'backManagement',
          path_name: '营销填报 / 认签回达成',
          name: '认签回达成',
        }
      },
      {
        path: '/backTargetManagement',
        name: 'backTargetManagement',
        component: () => import('@/views/Home/marketingManagement/backTargetManagement'),
        meta: {
          activeMenu: 'backTargetManagement',
          path_name: '营销填报 / 认签回目标',
          name: '认签回目标',
        }
      },
      {
        path: '/threeManagement',
        name: 'threeManagement',
        component: () => import('@/views/Home/financeManagement/threeManagement'),
        meta: {
          activeMenu: 'threeManagement',
          path_name: '财务填报 / 三费管理',
          name: '三费管理',
        }
      },
      {
        path: '/moneyManagement',
        name: 'moneyManagement',
        component: () => import('@/views/Home/financeManagement/moneyManagement'),
        meta: {
          activeMenu: 'moneyManagement',
          path_name: '财务填报 / 营收利润',
          name: '营收利润',
        }
      },
      {
        path: '/changeManagement',
        name: 'changeManagement',
        component: () => import('@/views/Home/designManagement/changeManagement'),
        meta: {
          activeMenu: 'changeManagement',
          path_name: '设计工程填报 / 变洽签管理',
          name: '变洽签管理',
        }
      },
      {
        path: '/people',
        name: 'people',
        component: () => import('@/views/Home/pepoleManagement/people'),
        meta: {
          activeMenu: 'people',
          path_name: '人力填报 / 人资管理',
          name: '人资管理',
        }
      },
      {
        path: '/money',
        name: 'money',
        component: () => import('@/views/Home/businessManagement/money'),
        meta: {
          activeMenu: 'money',
          path_name: '商务填报 / 绩效管理',
          name: '绩效管理',
        }
      },
    ]
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})



// 路由拦截，token校验
router.beforeEach(async (to, from, next) => {
  // let domian = getDomain()
  next();
  // let hasToken = Cookies.get('user_token', { domain: domian })
  // if (!hasToken) {
  //   //无token时去登陆页
  //   if (to.name == 'Login') {
  //     next();
  //   } else {
  //     next({ path: '/registration/register' });
  //   }
  // } else {
  //   //有token的时候自动登陆
  //   if (to.name == 'Login') {
  //     next({ path: '/registration/register' });
  //   } else {
  //     next();
  //   }
  // }

});
export default router
