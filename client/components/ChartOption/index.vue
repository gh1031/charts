<template>
  <Menu
    v-if="configs.length"
    :open-name="configs.length && [configs[0].id]"
    width="auto"
    @on-select="onSelect"
  >
    <template v-for="config in configs">
      <!-- 一级菜单含子菜单 -->
      <Submenu
        v-if="hasChildren(config.children)"
        :key="config.id"
        :name="config.title"
      >
        <!-- 二级菜单 -->
        <template slot="title">
          <span>{{ config.title }}</span>
        </template>
        <!-- 二级菜单含子菜单 -->
        <template v-for="childConfig in config.children">
          <Submenu
            v-if="hasChildren(childConfig.children)"
            :key="childConfig.id"
            :name="childConfig.title"
          >
            <!-- 三级菜单 -->
            <template slot="title">
              <span>{{ childConfig.title }}</span>
            </template>
            <MenuItem
              v-for="grandsonConfig in childConfig.children"
              :key="grandsonConfig.id"
              :name="grandsonConfig.title"
            >
              <my-form
                :g-label="config.title"
                :p-label="childConfig.title"
                :label="grandsonConfig.title"
                :type="grandsonConfig.type"
                :config="grandsonConfig"
              />
            </MenuItem>
          </Submenu>
          <MenuItem
            v-else
            :key="childConfig.id"
            :name="childConfig.title"
          >
            <my-form
              :p-label="config.title"
              :label="childConfig.title"
              :type="childConfig.type"
              :config="childConfig"
            />
          </MenuItem>
        </template>
      </Submenu>

      <!-- 一级菜单 -->
      <MenuItem
        v-else
        :key="config.id"
        :name="config.title"
      >
        <my-form
          :label="config.title"
          :type="config.type"
          :options="config.options"
          :config="config"
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
    configs: {
      type: Array,
      required: true,
    }
  },
  mounted() {
    console.log(this)
  },
  methods: {
    hasChildren(array) {
      return array && array.length
    }
  }
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
