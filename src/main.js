// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App';
import Vue from 'vue';
import VueRouter from 'vue-router';
// import VueResource from 'vue-resource';
import './components/utils/flexible-Nlint.js'; // 淘宝移动端rem
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'vue-fullpage/vue-fullpage.css';
import VueFullpage from 'vue-fullpage';

import router from './router/index.js';
import './api/index.js';  // 引入vue-reource

Vue.config.productionTip = false;
Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.use(Mint);
Vue.use(VueFullpage);

/* eslint-disable*/
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
/* eslint-enable*/
