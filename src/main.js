// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App';
import Vue from 'vue';
import router from './router/index.js'; // vue-router
import './api/index.js';  // vue-reource

import './components/utils/flexible/flexible-Nlint.js'; // 淘宝移动端rem
import Mint from 'mint-ui'; // mint-ui
import 'mint-ui/lib/style.css'; // mint-ui-css
import ElementUI from 'element-ui'; // element-ui
import 'element-ui/lib/theme-default/index.css';  // element-ui-css
import VueFullpage from 'vue-fullpage';
import 'vue-fullpage/vue-fullpage.css';
// './components/utils/vee-validate'路径也是可行的，因为当路径为目录时，import、require会依次寻找目录下的package.json、index.js、index.json、index.node
import './components/utils/vee-validate/index.js';  // 表单验证
import myGlobal from './components/vueSelf/global/src/globalPlugin.js'; // 全局函数
import globalComponent from './components/vueSelf/global/src/globalComponent.vue';  // 全局组件

Vue.config.productionTip = false;

// Vue.use(VueRouter);
// Vue.use(VueResource);
Vue.use(Mint);
Vue.use(ElementUI);
Vue.use(VueFullpage);
Vue.use(myGlobal);
Vue.component('global-component', globalComponent);  // 注册全局函数

/* eslint-disable */
const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
/* eslint-enable */
