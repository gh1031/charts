const textStyle = {
  color: '#333',
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontFamily: 'sans-serif',
  fontSize: 18,
  lineHeight: 56,
  width: '',
  height: '',
  textBorderColor: 'transparent',
  textBorderWidth: 0,
  textShadowColor: 'transparent',
  textShadowBlur: 0,
  textShadowOffsetX: 0,
  textShadowOffsetY: 0,
};

const bgAndShadow = {
  backgroundColor: '#ccc',
  borderColor: 'blue',
  borderWidth: 3,
  borderRadius: 4,
  shadowBlur: 10,
  shadowColor: 'red',
  shadowOffsetX: 0,
  shadowOffsetY: 0,
}
export default {
  namespace: true,
  state: {
    title: {
      text: 'Main Text',
      show: 1,
      link: 'https://www.baidu.com',
      target: 'blank',
      textStyle,
      subtext: 'Sub Text',
      sublink: 'https://www.baidu.com',
      subtarget: 'self',
      subtextStyle: {
        color: 'yellow'
      },
      textAlign: 'auto',
      textVerticalAlign: 'auto',
      triggerEvent: 0,
      padding: 5,
      itemGap: 10,
      zlevel: 0,
      z: 2,
      left: 'auto',
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      ...bgAndShadow,
    },
    legend: {
      type: 'plain',
      id: '',
      show: 'single',
      zlevel: 0,
      z: 2,
      left: '200',
      top: 'auto',
      right: 'auto',
      bottom: 'auto',
      width: 'auto',
      height: 'auto',
      orient: 'horizontal',
      align: 'auto',
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolKeepAspect: 1,
      formatter: null,
      selectedMode: 1,
      inactiveColor: '#ccc',
      selected: {
        '销量': true,
        '系列2': false,
      },
      textStyle,
      tooltip: {
        show: true,
      },
      data: [{ name: '销量', icon: 'circle', textStyle }],
      ...bgAndShadow,
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: 'end',
      pageFormatter: '',
      pageIcons: {
        horizontal: [],
        vertical: [],
      },
      pageIconColor: '#2f4554',
      pageIconInactiveColor: '#aaa',
      pageIconSize: 15,
      pageTextStyle: textStyle,
      animation: 1,
      animationDurationUpdate: 800,
    },
    grid: {
    },
    xAxis: {
      show: 0,
      position: 'bottom',
      axisLine: {},
      axisTick: {},
      axisLabel: {},
      splitLine: {},
      splitArea: {},
      data: [],
      axisPointer: {},
    },
    yAxis: {
      show: 0,
      position: 'bottom',
      axisLine: {},
      axisTick: {},
      axisLabel: {},
      splitLine: {},
      splitArea: {},
      data: [],
      axisPointer: {},
    },
    animation: 1,
    animationThreshold: 2000,
    animationDuration: 1000,
    animationEasing: "ease",
    animationDelay: 1000,
    animationDurationUpdate: 300,
    animationEasingUpdate: 'ease',
    animationDelayUpdate: 0,
  },
  mutations: {
    changeEchartsConf(state, payload) {
      const { gLabel, pLabel, label, value } = payload;
      if (gLabel) {
        return state[gLabel][pLabel][label] = value;
      }
      if (pLabel) {
        return state[pLabel][label] = value;
      } else {
        return state[label] = value;
      }
    }
  },
}