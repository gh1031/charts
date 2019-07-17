<template>
  <Menu
    v-if="menus.length"
    :open-name="menus.length && [menus[0].id]"
    :theme="theme"
    width="auto"
  >
    <template v-for="menu in menus">
      <Submenu 
        :key="menu.id"
        :name="menu.id"
        v-if="menu.children && menu.children.length"
      >
        <template slot="title">
          <Icon :type="menu.icon" />
          <span>{{ menu.title }}</span>
        </template>
        <MenuItem
          v-for="childMenu in menu.children"
          :key="childMenu.id"
          :name="childMenu.id"
        >
          <router-link :to="childMenu.path">
            <Icon :type="childMenu.icon" />
          </router-link>
          {{ childMenu.title }}
        </MenuItem>
      </Submenu>

      <MenuItem v-else :key="menu.id">
        <router-link :to="menu.path">
          <Icon :type="menu.icon" />
          <span>{{ menu.title }}</span>
        </router-link>
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
    }
  },
}
</script>