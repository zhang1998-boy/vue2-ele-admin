
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mode: 'light',
    userInfo: {},
    userData: {}
  },
  mutations: {
    CHANGE_MODE (state, val) {
      state.mode = val
    },
    GET_USERINFO (state, val) {
      state.userInfo = { ...val }
    },
    SET_USERINFO (state, val) {
      state.userData = { ...val }
    }
  },
  actions: {
    changeMOde ({ commit }) {
      commit('CHANGE_MODE');
    },
    getuserInfo ({ commit }, param) {
      commit('GET_USERINFO', param);
    },
    setUserInfo ({ commit }, param) {
      commit('SET_USERINFO', param);
    },
  },
  modules: {
  }
})
