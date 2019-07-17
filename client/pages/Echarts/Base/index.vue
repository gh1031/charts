<template>
  <div id="container" :style="config" />
</template>

<script>
import * as Echarts from 'echarts';

export default {
  data() {
    return {}
  },
  mounted() {
    this.initialCharts();
  },
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
    }
  },
  methods: {
    initialCharts() {
      this.charts = Echarts.init(document.getElementById('container'), this.theme);
      this.charts.setOption(this.option)
    }
  },
}
</script>