import Vue from 'vue';
import App from './App';
import router from './router';
import 'iview/dist/styles/iview.css';
import './style/global.less';


// iview
import {
  Layout,
  Menu,
  Submenu,
  MenuItem,
  Icon,
  Sider,
  Message,
  Button,
  Drawer,
  Input,
} from 'iview';

Vue.component('Layout', Layout);
Vue.component('Menu', Menu);
Vue.component('Icon', Icon);
Vue.component('MenuItem', MenuItem);
Vue.component('Sider', Sider);
Vue.component('Submenu', Submenu);
Vue.component('Message', Message);
Vue.component('Button', Button);
Vue.component('Drawer',  Drawer);
Vue.component('Input', Input);

const app = new Vue({
  router,
  render: (h) => h(App),
}).$mount('#root');

window.app = app;
