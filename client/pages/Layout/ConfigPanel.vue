<template>
  <div
    class="config-panel"
    :class="show ? ' transform' : ''"
  >
    aaa
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
}
</script>

<style lang="less">
.config-panel {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 600px;
  height: 400px;
  transition: all ease-in-out 0.2s;
  background-color: rgba(0,0,0,.3);
  z-index: -1;
  opacity: 0;
}
.transform {
  opacity: 1;
  transform: translateX(-600px) translateY(-400px);
}
</style>