<template>
  <!-- 这里没有使用v-model因为父子组建使用双向数据绑定会导致数据流难以理解，vue会warn -->
  <Drawer
    :value="show"
    :width="width"
    :title="title"
    class="drawer"
    @on-close="onClose"
  >
    <slot />
  </Drawer>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    width: {
      type: [Number, String],
      default: 256,
    },
    onClose: {
      type: Function,
      required: true,
    }
  },
}
</script>
