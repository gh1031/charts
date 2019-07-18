<template>
  <Menu
    v-if="menus.length"
    :open-name="menus.length && [menus[0].id]"
    :theme="theme"
    width="auto"
  >
    <template v-for="menu in menus">
      <Submenu 
        v-if="menu.children && menu.children.length"
        :key="menu.id"
        :name="menu.id"
      >
        <template slot="title">
          <Icon :type="menu.icon" />
          <span>{{ menu.title }}</span>
        </template>
        <MenuItem
          v-for="childMenu in menu.children"
          :key="childMenu.id"
          :name="childMenu.id"
          :to="childMenu.path"
        >
          <Icon :type="childMenu.icon" />
          <span>{{ childMenu.title }}</span>
        </MenuItem>
      </Submenu>

      <MenuItem
        v-else
        :key="menu.id"
        :name="menu.id"
        :to="menu.path"
      >
        <Icon :type="menu.icon" />
        <span>{{ menu.title }}</span>
      </MenuItem>
    </template>
  </Menu>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      required: true,
    },
    theme: {
      type: String,
      default: 'dark',
    },
  }
}
</script>

<style lang="less">
.link-style {
  width: 100%;
  height: 100%;
}
</style>
