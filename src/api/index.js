import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

// Vue.http.options.emulateJSON = true;  // vue-resource的POST请求与原生ajax请求产生的content-type不同。当此值为真时，可以使前后者一致
// Vue.http.options.root = 'http://huhansanXX.com'; // 设置全局的请求头，注意局部请求头不能以'/'斜杠打头！

Vue.http.interceptors.push(function (req, next) {
  console.log('拦截req:', req);
  // 拦截res
  next(function (res) {
    console.log('拦截res', res);
  });
});
