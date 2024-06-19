<template>
  <a-config-provider :locale="locale">
    <div id="app" :class="appMode === 'dark' ? 'dark' : 'light'">
      <router-view />
    </div>
  </a-config-provider>
</template>
<script>
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import { useDark, useToggle } from "@vueuse/core";
import Cookies from "js-cookie";
import { getUserDetail } from "@/utils/tool";
import { getDomain } from "@/utils/cookieOprtate";

dayjs.locale("zh-cn");

export default {
  data() {
    return {
      checked: null,
      locale: zhCN,
    };
  },
  computed: {
    appMode() {
      return localStorage.getItem("mode");
    },
    // checked () {
    //   let mode = localStorage.getItem('mode')
    //   return mode === 'dark' ? true : false
    // }
  },
  mounted() {
    this.$nextTick(() => {
      let domian = getDomain();
      let hasToken = Cookies.get("user_token", { domain: domian });
      if (hasToken) {
        getUserDetail();
      }
    });
  },
  created() {
    // let mode = localStorage.getItem('mode')
    // mode === 'dark' ? this.checked = true : false
  },
  methods: {
    changeMode() {
      if (!this.checked) {
        localStorage.removeItem("mode");
      }
      this.$store.dispatch("changeMOde", this.checked ? "dark" : "light");
      localStorage.setItem("mode", this.checked ? "dark" : "light");
      const routerPath = this.$router.resolve({
        path: "/registration/register",
      });
      setTimeout(window.open(routerPath.href, "_blank"), 100);

      // // let isDark = this.isDark()
      // useToggle(isDark)
    },
    isDark() {
      const html = document.documentElement;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      const head = document.getElementsByTagName("head")[0];
      head.appendChild(link);
      let a = useDark({
        selector: "html",
        attribute: "data-doc-theme",
        valueDark: "dark",
        valueLight: "light",
        onChanged(dark) {
          if (dark) {
            document.body.setAttribute("data-theme", "dark");
            html.setAttribute("data-doc-theme", "dark");
            html.style.colorScheme = "dark";
            link.href = "/style/dark.css";
          } else {
            document.body.setAttribute("data-theme", "light");
            html.setAttribute("data-doc-theme", "light");
            html.style.colorScheme = "light";
            link.href = "";
          }
        },
      });
      return a;
    },
  },
};
</script>

<style lang="less">
.ant-modal-mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2) !important;
  filter: alpha(opacity=50);
}
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
}

body {
  // background: #eef2f8;
  /* 设置你要的背景色 */
  overflow: hidden;
}
.light {
  background: #eef2f8 !important;
}
</style>
