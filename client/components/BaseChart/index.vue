<template>
  <div
    :id="container"
    :style="containerStyle"
  />
</template>

<script>
import * as Echarts from 'echarts';

import {
  // returnEmptyArray,
  returnEmptyObject,
} from 'client/utils/lang';

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
    container: {
      type: String,
      required: true,
    },
    initialConfig: {
      type: Object,
      default: returnEmptyObject,
    },
    containerStyle: {
      type: Object,
      default: returnEmptyObject,
    }
  },
  mounted() {
    this.initialCharts();
  },
  methods: {
    initialCharts() {
      this.charts = Echarts.init(
        document.getElementById(this.container),
        this.theme,
        this.initialConfig
      );
      this.charts.setOption(this.option)
      console.log({
        widht: this.charts.getWidth(),
        height: this.charts.getHeight(),
        dom: this.charts.getDom(),
        options: this.charts.getOption()
      })
    }
  },
}
</script>