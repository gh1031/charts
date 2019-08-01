<template>
  <BaseChart
    container="Bar-theme-dark"
    :option="getOption"
    :theme="'dark'"
    :style="{width: '100%', height: '100%'}"
  />
</template>

<script>
import BaseChart from 'components/BaseChart';
import { mapState } from 'vuex';

export default {
  components: {
    BaseChart,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      title: state => state.echartsConf.title,
      legend: state => state.echartsConf.legend,
      grid: state => state.echartsConf.grid,
      xAxis: state => state.echartsConf.xAxis,
      yAxis: state => state.echartsConf.yAxis,
    }),
    getOption() {
      const { title, legend, grid, xAxis, yAxis } = this;
      return {
        title,
        legend,
        tooltip: {},
        grid,
        xAxis: {
          ...xAxis,
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
          ...yAxis,
          name: '销量',
          max: 100,
          splitNumber: 13,
        },
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }, {
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    },
  },
}
</script>

<style lang="less">
.bar-box {
  display: flex;
}
</style>