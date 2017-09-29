import {Toast} from 'mint-ui';
import vuePart from './src/vuePart.js';
import logicPart from './src/logicPart.js';
import utilsPart from './src/utilsPart.js';

import VueRouter from 'vue-router';

const routes = [...vuePart, ...logicPart, ...utilsPart];

const router = new VueRouter({
  routes
});
console.log(router);

// 路由的导航拦截器
router.beforeEach((to, from, next) => {
  // 查询meta是否有值，若有则处理
  if (to.matched.some(record => record.meta.needStorage && !sessionStorage.getItem('something'))) {
    console.log('路由的副本', to.matched);
    Toast('没有设置storage，驳回并跳转');
    next('/vueRouter/a'); // 驳回导航并重导向
  } else {
    next();
  }
});

export default router;
