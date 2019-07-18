<template>
  <div class="flex">
    <BaseChart
      container="Bar-theme-dark"
      :option="getOption()"
      :theme="'dark'"
      :container-style="{width: '500px', height: '500px' }"
    />
    <BaseChart
      container="Bar-theme-light"
      :option="getOption()"
      :theme="'light'"
      :initial-config="{ width: '500px', height: '500px'}"
    />
    <BaseChart
      container="Bar-theme-yellow"
      :option="getOption()"
      :theme="'light'"
      :initial-config="{ width: '500px', height: '500px'}"
    />
    <BaseChart
      container="Bar-theme-blue"
      :option="getOption()"
      :theme="'light'"
      :initial-config="{ width: '500px', height: '500px'}"
    />
    <BaseChart
      container="Bar-theme-green"
      :option="getOption()"
      :theme="'dark'"
      :container-style="{width: '500px', height: '500px' }"
    />
    <BaseChart
      container="Bar-theme-red"
      :option="getOption()"
      :theme="'light'"
      :initial-config="{ width: '500px', height: '500px'}"
    />
    <BaseChart
      container="Bar-theme-black"
      :option="getOption()"
      :theme="'light'"
      :initial-config="{ width: '500px', height: '500px'}"
    />
    <BaseChart
      container="Bar-theme-white"
      :option="getOption()"
      :theme="'light'"
      :initial-config="{ width: '500px', height: '500px'}"
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
  mounted() {
    
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
.bar-box {
  display: flex;
}
</style>