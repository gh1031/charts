import { Store } from 'vuex';
import Vuex from 'vuex';
import Vue from 'vue';
import { fetchUserInfo } from 'client/api';


import modules from './modules';

Vue.use(Vuex);
export default new Store({
  modules: {
    ...modules
  },
  state: { isConfShow: false, userInfo: {} },
  actions: {
    toggleEchartsConf({ commit, state }) {
      commit('TOGGLE_ECHARTS_CONF', !state.isConfShow)
    },
    async fetchUserInfo({ commit }, loginData) {
      const userInfo = await fetchUserInfo(loginData);
      commit('LOGIN', userInfo);
    }
  },
  mutations: {
    TOGGLE_ECHARTS_CONF(state, payload) {
      return state.isConfShow = payload;
    },
    LOGIN(state, payload) {
      return state.userInfo = payload;
    }
  },
})
