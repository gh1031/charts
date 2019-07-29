<template>
  <Menu
    v-if="options.length"
    :open-name="options.length && [options[0].id]"
    width="auto"
    @on-select="onSelect"
  >
    <template v-for="option in options.slice(0, 1)">
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
          <my-form
            :p-label="option.title"
            :label="childOption.title"
          />
        </MenuItem>
      </Submenu>
      <MenuItem
        v-else
        :key="option.id"
        :name="option.title"
      >
        <my-form
          :label="option.title"
        />
      </MenuItem>
    </template>
  </Menu>
</template>

<script>
import MyFrom from './Form';

export default {
  components: {
    'my-form': MyFrom,
  },
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
  mounted() {
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
