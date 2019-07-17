import Vue from 'vue';
import VueRouter from 'vue-router';
import EchartsLine from 'pages/Echarts/Line';
import EchartsBar from 'pages/Echarts/Bar';
import Main from 'pages/Layout/Main';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [{
    path: '/',
    component: Main,
    children: [{
      path: 'echarts/line',
      component: EchartsLine,
    },
    {
      path: 'echarts/bar',
      component: EchartsBar,
    },]
  }]
})