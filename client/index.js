import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
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
  Form,
  FormItem,
  Select,
  Option,
  RadioGroup,
  Radio,
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
Vue.component('Form', Form);
Vue.component('FormItem', FormItem);
Vue.component('Select', Select);
Vue.component('Option', Option);
Vue.component('RadioGroup', RadioGroup);
Vue.component('Radio', Radio);

const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#root');

window.app = app;
