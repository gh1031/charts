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
  watch: {
    option: {
      handler: function() {
        this.initialCharts()
      },
      deep: true,
    }
  },
  mounted() {
    this.initialCharts();
  },
  updated() {
    },
  methods: {
    initialCharts() {
      this.$nextTick().then(() => {
        this.charts = Echarts.init(
          document.getElementById(this.container),
          this.theme,
          this.initialConfig
        );
        this.charts.setOption(this.option)
      })
    }
  }
}
</script>