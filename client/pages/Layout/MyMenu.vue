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
        <router-link
          v-for="childMenu in menu.children"
          :key="childMenu.id"
          :to="childMenu.path"
        >
          <MenuItem
            :name="childMenu.id"
          >
            <Icon :type="childMenu.icon" />
            <span>{{ childMenu.title }}</span>
          </MenuItem>
        </router-link>
      </Submenu>

      <router-link
        v-else
        :key="menu.id"
        :to="menu.path"
        class="link-style"
      >
        <MenuItem :name="menu.id">
          <Icon :type="menu.icon" />
          <span>{{ menu.title }}</span>
        </MenuItem>
      </router-link>
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
  },
}
</script>

<style lang="less">
.link-style {
  width: 100%;
  height: 100%;
}
</style>
