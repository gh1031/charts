<template>
  <Menu
    v-if="options.length"
    :open-name="options.length && [options[0].id]"
    width="auto"
    @on-select="onSelect"
  >
    <template v-for="option in options">
      <Submenu
        v-if="option.children && option.children.length"
        :key="option.id"
        :name="option.title"
      >
        <template slot="title">
          <span>{{ option.title }}</span>
        </template>
        <MenuItem
          v-for="childOption in option.children"
          :key="childOption.id"
          :name="childOption.title"
        >
          <span>{{ childOption.title }}</span>
        </MenuItem>
      </Submenu>
      <MenuItem
        v-else
        :key="option.id"
        :name="option.title"
      >
        <div class="change-option">
          <span>{{ option.title }}:</span>
          <Input class="input-option" />
        </div>
      </MenuItem>
    </template>
  </Menu>
</template>

<script>
export default {
  props: {
    onSelect: {
      type: Function,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    }
  },
}
</script>

<style lang="less">
.change-option {
  display: flex;

  & > span {
    text-align: right;
    margin-right: 8px;
  }
  .input-option {
    flex: 1;
  }
}
</style>
