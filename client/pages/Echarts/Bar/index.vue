<template>
  <div class="flex">
    <BaseChart
      container="Bar-theme-dark"
      :option="getOption()"
      :theme="'dark'"
      :initial-config="{width: '300px', height: '300px' }"
    />
    <BaseChart
      container="Bar-theme-light"
      :option="getOption()"
      :initial-config="{ width: '300px', height: '300px', renderer: 'svg' }"
    />
  </div>
</template>

<script>
import BaseChart from 'components/BaseChart';

export default {
  components: {
    BaseChart,
  },
  data() {
    return {}
  },
  methods: {
    getOption() {
      return {
        title: {
          text: 'Basic'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
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
    }
  },
}
</script>

<style lang="less">
.bar-box {
  display: flex;
}
</style>