import { Store } from 'vuex';
import Vuex from 'vuex';

import Vue from 'vue';

Vue.use(Vuex);
export default new Store({
  state: { echartsConf: false },
  actions: {
    toggleEchartsConf({ commit, state }) {
      commit('toggleEchartsConf', !state.echartsConf)
    },
  },
  mutations: {
    toggleEchartsConf(state, payload) {
      state.echartsConf = payload;
    },
  },
})
