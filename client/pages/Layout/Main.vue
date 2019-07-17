<template>
  <Layout class="main">
    <Sider
      ref="side"
      v-model="isCollapsed"
      collapsible
      :collapsed-width="80"
    >
      <MyMenu :menus="menus" />
    </Sider>
    <Layout>
      <Header class="layout-header-bar">
        <Icon
          :class="rotateIcon"
          type="md-menu"
          size="24"
          @click.native="collapsedSider"
        />
      </Header>
      <Content class="content">
        <router-view />
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import MyMenu from "./MyMenu";
import { fetchMenus } from "client/api";

export default {
  components: { MyMenu },
  data() {
    return {
      isCollapsed: false,
      menus: []
    };
  },
  computed: {
    
    rotateIcon() {
      return ["menu-icon", this.isCollapsed && "rotate-icon"];
    }
  },
  async mounted() {
    const menus = await fetchMenus();
    this.menus = menus;
  },
  methods: {
    collapsedSider() {
      this.$refs.side.toggleCollapse();
    }
  }
};
</script>

<style lang="less">
.main {
  height: 100%;

  .layout-header-bar {
    line-height: 56px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

    .menu-icon {
      margin: 0 24px;
    }
  }
  .content {
    background: #fff;
    box-shadow: 0 0 20px #909090;
    margin: 24px;
    padding: 24px;
    height: calc(100vh - 56px - 40px);
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
}
</style>