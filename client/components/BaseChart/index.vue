<template>
  <div
    id="container"
    :style="config"
  />
</template>

<script>
import * as Echarts from 'echarts';

export default {
  props: {
    theme: {
      type: String,
      default: 'light'
    },
    option: {
      type: Object,
      required: true,
    },
    config: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.initialCharts();
  },
  methods: {
    initialCharts() {
      this.charts = Echarts.init(document.getElementById('container'), this.theme);
      this.charts.setOption(this.option)
    }
  },
}
</script>