export default {
  namespace: true,
  state: {
    title: {
      text: 'aaa'
    },
  },
  mutations: {
    changeEchartsConf(state, payload) {
      const { pLabel, label, value } = payload;
      if (pLabel) {
        state[pLabel][label] = value;
      }
      state[label] = value;
    }
  },
}