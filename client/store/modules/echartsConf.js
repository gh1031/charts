export default {
  namespace: true,
  state: {
    title: {
      text: 'aaa',
      show: 1,
      link: '',
      textStyle: {},
      subtextStyle: {}
    },
  },
  mutations: {
    changeEchartsConf(state, payload) {
      console.log(payload, 'payload');
      const { pLabel, label, value } = payload;
      if (pLabel) {
        state[pLabel][label] = value;
      } else {
        state[label] = value;
      }
      console.log(state, 'state')
    }
  },
}