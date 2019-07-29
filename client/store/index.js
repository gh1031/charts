import { Store } from 'vuex';
import Vuex from 'vuex';
import Vue from 'vue';
import modules from './modules';

Vue.use(Vuex);
export default new Store({
  modules: {
    ...modules
  },
  state: { isConfShow: false },
  actions: {
    toggleEchartsConf({ commit, state }) {
      commit('toggleEchartsConf', !state.isConfShow)
    },
  },
  mutations: {
    toggleEchartsConf(state, payload) {
      state.isConfShow = payload;
    },
  },
})
