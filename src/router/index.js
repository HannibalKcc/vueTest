import Vue from 'vue';
import VueRouter from 'vue-router';

import {Toast} from 'mint-ui';
import vuePart from './src/vuePart.js';
import logicPart from './src/logicPart/index.js';
import utilsPart from './src/utilsPart.js';

function copy (aObject) {
  var bObject, v, k;
  bObject = Array.isArray(aObject) ? [] : {};
  for (k in aObject) {
    v = aObject[k];
    bObject[k] = (typeof v === 'object') ? copy(v) : v;
  }
  return bObject;
}

const routesRaw = [vuePart, logicPart, utilsPart];
let tmp = copy(routesRaw);  // 由于内部有自定义函数，所以JSON的深度拷贝方法不可行
let routesRes = [];
(function machiningRoutes (t) {
  if (Object.prototype.toString.call(t) === '[object Array]') {
    t.forEach((val, index, arr) => {
      machiningRoutes(val);
    });
  } else if (t.hasOwnProperty('farName')) {
    machiningRoutes(t.classChild);
  } else if (t.hasOwnProperty('path')) {
    routesRes.push(t);
  }
})(tmp);

const router = new VueRouter({
  mode: 'history',
  routes: routesRes,
  scrollBehavior (to, from, savedPosition) {
    // 可以获取window
    // return 期望滚动的位置（number参数）
    return {x: 0, y: 0};
  }
});

// 全局路由的导航拦截器
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

Vue.use(VueRouter);

export default router; // 给main.js拿去挂载
export {routesRaw}; // 给app.vue拿去路由跳转
