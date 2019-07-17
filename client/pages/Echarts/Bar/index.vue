<template>
  <Base :option="setOption()" :theme="'dark'" :config="{width: '500px', height: '500px' }" />
</template>

<script>
import Base from '../Base';

export default {
  components: {
    Base,
  },
  data() {
    return {}
  },
  mounted() {
    
  },
  methods: {
    setOption() {
      return {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
    }
  },
}
</script>

<style lang="less">

</style>