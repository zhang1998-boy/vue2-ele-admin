import { getUserInfo } from "@/api/personal.js";
import store from '@/store/index'
// 获取用户详情
export const getUserDetail = async () => {
  let { code, msg, data } = await getUserInfo();
  if (code !== 0) return;
  let { real_name, avatar_url } = data;
  localStorage.setItem("userDataAvatar", avatar_url);
  localStorage.setItem("userDataName", real_name);
  store.dispatch("setUserInfo", { real_name, avatar_url });
}
