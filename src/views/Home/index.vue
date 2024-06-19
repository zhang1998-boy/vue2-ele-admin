<template>
  <div class="home_container">
    <div
      style="
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: space-between;
        position: fixed;
        z-index: 10;
      "
    >
      <div :class="!collapsed ? 'left_top' : 'left_topactive'">
        <p style="font-size: 16px">业务数据平台</p>
        <a-icon
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          style="margin: 22px 0 0 10px; font-size: 18px"
          @click="toggleCollapsed"
        />
      </div>
      <div class="nav-bar">
        <div class="top-cread">
          <a-breadcrumb>
            <a-breadcrumb-item href="">
              <a-icon type="home" />
            </a-breadcrumb-item>
            <a-breadcrumb-item
              :key="idnex"
              v-for="(item, idnex) in breadcrumb"
              >{{ item }}</a-breadcrumb-item
            >
          </a-breadcrumb>
        </div>
      </div>

      <div class="rigth_top">
        <a-avatar class="avatar" v-if="userActor" :src="userActor" />
        <a-avatar
          v-else
          class="avatar"
          style="backgroundcolor: #87d068"
          size="small"
          icon="user"
        />
        <a-dropdown style="float: right">
          <div class="topRight">
            <div class="topUserName" @click="(e) => e.preventDefault()">
              {{ userName || '访客' }}
            </div>
            <div class="rightDown">
              <!-- <i class="iconfont">&#xe87e;</i> -->
            </div>
          </div>

          <!-- <a-menu slot="overlay">
            <a-menu-item>
              <a @click="toPersonal">个人中心</a>
            </a-menu-item>
            <a-menu-item>
              <a @click="reminderVsible = true">退出登录</a>
            </a-menu-item>
          </a-menu> -->
        </a-dropdown>
      </div>
    </div>
    <div style="display: flex">
      <div class="left-menu" v-if="!collapsed">
        <el-menu
          style="min-height: 100%"
          :unique-opened="true"
          theme="dark"
          :default-active="defaultRoute"
          router
        >
          <!-- <el-menu-item index="/"
            ><i class="el-icon-menu"></i>首页</el-menu-item
          > -->
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-setting"></i>运营填报</template
            >
            <el-menu-item :index="'/businessData'">业绩数据</el-menu-item>
            <el-menu-item :index="'/planMengent'">运营计划</el-menu-item>
            <el-menu-item :index="'/designMengent'">在建规模</el-menu-item>
            <el-menu-item :index="'/watchMengent'">在建监管</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-goods"></i>营销填报</template
            >
            <el-menu-item :index="'goodsStructure'">货值结构</el-menu-item>
            <el-menu-item :index="'backManagement'">认签回达成</el-menu-item>
            <el-menu-item :index="'backTargetManagement'"
              >认签回目标</el-menu-item
            >
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-coin"></i>财务填报</template
            >
            <el-menu-item :index="'threeManagement'">三费管理</el-menu-item>
            <el-menu-item :index="'moneyManagement'">营收利润</el-menu-item>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"
              ><i class="el-icon-data-line"></i>设计工程填报</template
            >
            <el-menu-item :index="'changeManagement'">变洽签管理</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"
              ><i class="el-icon-set-up"></i>人力填报</template
            >
            <el-menu-item :index="'people'">人资管理</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"
              ><i class="el-icon-suitcase"></i>商务填报</template
            >
            <el-menu-item :index="'money'">绩效管理</el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div :class="collapsed ? 'container_rightactive' : 'container_right'">
        <div class="container-right-cont">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <a-modal v-dialogDrag v-model="reminderVsible" title="提示" :width="400">
      <template slot="footer">
        <a-button key="back" type="primary" @click="handelCancel" ghost>
          取消
        </a-button>
        <a-button
          key="submit"
          type="primary"
          class="blue_button"
          @click="exitSystem"
        >
          确定
        </a-button>
      </template>
      <div>
        <!-- <i class="iconfont" style="margin-right: 8px">&#xe61b;</i> -->
        <span>您确定要退出登录吗</span>
      </div>
    </a-modal>
  </div>
</template>
<script>
import { deleteAllCookies } from '@/utils/request.js'
export default {
  data() {
    return {
      //折叠
      collapsed: false,
      modeType: null,
      openKeys: [],
      routes: [],
      rootSubmenuKeys: ['/account/open-account', '/capital/account-recharge'],
      breadcrumb: '', // 面包屑绑定值
      reminderVsible: false,
    }
  },
  watch: {
    // 监听路由变化当前路由为基本信息时左侧导航栏消失
    $route: {
      handler: async function (newval, oldVal) {
        if (this.$route.path == '/personal') {
          this.collapsed = true
        } else {
          this.collapsed = false
        }
        this.routes = newval.matched.filter((items) => items.meta.path_name)
        setTimeout(() => {
          if (this.$route.meta.path_name === undefined) {
            this.breadcrumb = ''
          } else {
            this.breadcrumb = this.$route.meta.path_name.split('/')
          }
        }, 300)
      },
      immediate: true,
      deep: true,
    },
  },
  created() {
    // this.routes = this.$route.matched.filter((item) => item.meta.path_name)
    // console.log(this.$router)
    // // 将从缓存中取出openKeys
    // const openKeys = window.sessionStorage.getItem('openKeys')
    // if (openKeys) {
    //   // 存在即赋值
    //   this.openKeys = JSON.parse(openKeys)
    // }
    // this.modeType = localStorage.getItem('mode')
  },
  computed: {
    defaultActive: function () {
      console.log(
        this.$route.path.replace('/', ''),
        'this.$route.path.replace("/", "")'
      )
      return this.$route.path.replace('/', '')
    },
    defaultRoute() {
      console.log(this.$route.name, 'this.$router.options.routes')
      return this.$route.name
    },
    userName() {
      let userData = localStorage.getItem('userDataName')
      return this.$store.state.userData.real_name || userData
    },
    userActor() {
      let userData = localStorage.getItem('userDataAvatar')
      return this.$store.state.userData.avatar_url || userData
    },
  },
  methods: {
    handelCancel() {
      this.reminderVsible = false
    },
    //折叠的切换
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    menuClick({ item, key, keyPath }) {
      // 获取到当前的key,并且跳转
      this.$router.push({
        path: key,
      })
    },
    toPersonal() {
      this.$router.push('/personal')
    },
    //退出登录
    async exitSystem() {
      localStorage.setItem('mode', 'light')
      this.reminderVsible = false
      localStorage.clear()
      await deleteAllCookies()

      setTimeout(() => {
        this.$router.push('/login')
      }, 100)
    },
    changeType(val) {
      localStorage.setItem('mode', val)
      window.location.reload()
    },
  },
}
</script>
<style lang="less" scoped>
.topRight {
  display: flex;
  overflow: hidden;
}
.rightDown {
  margin-left: 5px;
  line-height: 70px;
}

.topUserName {
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 70px;
}
.home_container {
  width: 100%;
  height: 100%;
}
.container-right-cont {
  padding: 15px 20px 0 12px;
  clear: both;
  width: 100% !important ;
  min-height: 100vh;
  box-sizing: border-box;
  margin-top: 60px;
}

.container_left {
  width: 200px;
  height: 100vh;
  margin-top: 60px;
  background-color: rgb(50, 64, 87);
  position: fixed;
}

.left_top {
  width: 200px;
  // height: 60px;
  line-height: 60px;
  color: #333333;
  font-weight: bold;
  display: flex;
  padding: 0 18px;
  box-sizing: border-box;
  font-size: 20px;
  background: #fff;
}

.left_topactive {
  width: 210px;
  // height: 60px;
  line-height: 60px;
  color: #333333;
  font-weight: bold;
  display: flex;
  padding: 0 18px;
  box-sizing: border-box;
  font-size: 20px;
  background: #fff;
}

.container_right {
  width: ~'calc(100vw - 200px)';
  height: 100vh;
  // margin-left: 200px;
}

.container_rightactive {
  width: 100%;
  height: 100vh;
  margin-left: 0;
}

.nav-bar {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  padding-left: 20px;

  a {
    color: #333333;
  }

  .active {
    color: #f2f2f2;
    width: 82px;
    height: 34px;
    font-weight: 500;
    font-size: 14px;
    background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
    padding: 8px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 5px 5px 0px #a5deff;
  }
}

.rigth_top {
  align-items: center;
  height: 60px;
  background: #fff;
  line-height: 60px;
  padding: 0 40px 0 30px;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
}

.avatar {
  margin-right: 10px;
}
.dropIcon {
  margin-left: 16px !important;
}
// /deep/.ant-menu-item-selected {
//   width: 180px !important;
//   height: 36px !important;
//   line-height: 36px !important;
//   border-radius: 10px;
//   padding-left: 40px !important;
//   box-shadow: 0px 4px 4px 0px #a5deff !important;
// }
// /deep/.ant-menu-sub {
//   height: 50px !important;
// }
.menu-body {
  color: #333333 !important;
}
/deep/.ant-modal-header {
  border-bottom: none !important;
}
/deep/.ant-modal-footer {
  border-top: none !important;
}
/deep/.ant-modal-body {
  padding: 4px 24px !important;
}
/deep/.ant-modal-footer {
  padding-bottom: 30px !important;
}
/deep/.ant-breadcrumb {
  line-height: 15px !important;
}
.top-cread {
  width: 100%;
  height: 40px;
  background: #fff;
  padding: 12px 30px;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
}
// .el-menu-vertical-demo:not(.el-menu--collapse) {
//   width: 200px;
//   min-height: 400px;
// }
.left-menu {
  // width: ~"calc(100vw - 200px)";
  margin-top: 60px;
}
.el-menu {
  width: 200px;
  border: none;
}
</style>
