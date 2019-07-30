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
        <div class="config-box">
          <div
            class="config-btn"
            @click="onToggle"
          >
            <span>配置</span>
          </div>
          <CreateDrawer
            width="40%"
            :show="show"
            :on-close="onToggle"
            title="配置"
            :mask="false"
          >
            <ChartOption
              :configs="configs"
              :on-select="handleSelect"
            />
          </CreateDrawer>
        </div>
      </Content>
    </Layout>
  </Layout>
</template>

<script>
import MyMenu from "./MyMenu";
import ChartOption from 'components/ChartOption';
import CreateDrawer from 'components/CreateDrawer';
import { fetchMenus, fetchOptions } from "client/api";
import { mapActions, mapState } from 'vuex';

export default {
  components: {
    MyMenu,
    CreateDrawer,
    ChartOption,
  },
  data() {
    return {
      isCollapsed: false,
      menus: [],
      configs: [],
    };
  },
  computed: {
    ...mapState({
      show: state => state.isConfShow,
    }),
    rotateIcon() {
      return ["menu-icon", this.isCollapsed && "rotate-icon"];
    }
  },
  async mounted() {
    try {
      const menus = await fetchMenus();
      this.menus = menus;
    } catch(e) {}
    try {
      const configs = await fetchOptions();
      this.configs = configs;
    } catch(e) {}
  },
  methods: {
    ...mapActions({
      onToggle: 'toggleEchartsConf'
    }),
    collapsedSider() {
      this.$refs.side.toggleCollapse();
    },
    handleSelect() {
    },
  }
};
</script>

<style lang="less">
.main {
  height: 100%;

  .layout-header-bar {
    line-height: 56px;
    background: #fff;
    box-shadow: 0 0 10px #909090;

    .menu-icon {
      margin: 0 24px;
    }
  }
  .content {
    background: #fff;
    box-shadow: 0 0 10px #909090;
    margin: 24px;
    padding: 24px;
    min-height: calc(100% - 56px);

    .config-box {
      position: fixed;
      bottom: 50%;
      right: 0;

      .config-btn {
        position: absolute;
        left: -40px;
        top: 50%;
        width: 40px;
        padding: 8px;
        z-index: 100;
        cursor: pointer;
        text-align: center;
        background-color: #fff;
        box-sizing: border-box;
        border: 1px solid #ccc;
        border-right: none;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        transition: all ease-in-out 0.3s;
      }
    }
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
}
</style>