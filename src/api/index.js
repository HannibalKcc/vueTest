import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.interceptors.push(function (req, next) {
  console.log('拦截req:', req);
  next(function (res) {
    console.log('拦截res', res);
  });
});
