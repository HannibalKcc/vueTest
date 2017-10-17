<template>
  <div id="app">
    <div class="content">
      <ul class="routerBox">
        <a href="https://github.com/HannibalKcc" target="_blank" title="github地址">
          <img src="./assets/img/head.jpg" height="100" width="100"/>
        </a>
        <li v-for="(item, index) in routers">
          <router-link class="router" :to="item.to" :key="index">{{item.inf}}</router-link>
        </li>
      </ul>
      <div class="viewBox">
        <router-view></router-view>
      </div>
    </div>
    <flotage-qr-code></flotage-qr-code>
  </div>
</template>

<script>
  import flotageQrCode from './components/others/flotageQrCode.vue';
  export default {
    name: 'app',
    components: {
      flotageQrCode
    },
    data () {
      return {
        routers: [
          // vue部分
          {to: '/transition', inf: 'vue-transition组件'},
          {to: '/propSolt', inf: 'vue-slot'},
          {to: '/resource', inf: 'vue-Resource'},
          {to: '/vueRouter', inf: 'vue-router'},
          {to: '/tree', inf: 'vue-递归组件与树形图'},
          {to: '/key', inf: 'vue-key'},
          // 逻辑
          {to: '/sort', inf: 'logic-排序'},
          {to: '/forLoop', inf: 'logic-es6 循环'},
          {to: '/import-export', inf: 'logic-es6 import&export'},
          {to: '/object', inf: 'logic- 对象问题'},
          {to: '/touchPenetration', inf: 'logic- 移动端点击穿透'},
          {to: '/currentTarget', inf: 'logic- target&currentTarget'},
          {to: '/array', inf: 'logic- 数组问题'},
          {to: '/mobile1px', inf: 'logic- 移动端1px问题'},
          {to: '/getCamera', inf: 'logic- input的各种用法'},
          {to: '/iife', inf: 'logic- 立即执行函数'},
          {to: '/svg', inf: 'logic- svg'},
          {to: '/this', inf: 'logic- this问题'},
          {to: '/condenseImg', inf: 'logic- 压缩图片'},
          {to: '/regExp', inf: 'logic- 正则表达式的各种验证'},
          {to: '/mvvm', inf: 'logic- 双向绑定的实现'},
          {to: '/navigatorAPI', inf: 'logic- navigator'},
          {to: '/Generator', inf: 'logic- es6-Generator'},
          // 工具
          {to: '/fullPage', inf: 'utils- fullPage'},
          {to: '/mintUI', inf: 'utils- mintUI'},
          {to: '/aMap', inf: 'utils- 高德地图'},
          {to: '/veeValidate', inf: 'veeValidate表单验证'},
          {to: '/wx', inf: '微信'}
        ]
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  #app {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 60px 10px 0;
    font-family: 'Microsoft YaHei UI', Arial;
    -webkit-font-smoothing: antialiased; // 字体抗锯齿
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  a:visited {
    color: #313e41;
  }

  .content {
    display: flex;
  }

  .routerBox {
    flex: 0 0 200px;
    padding-bottom: 100px;
    border-right: 3px solid #404040;
    margin-right: 20px;
    text-align: left;
    .router {
      margin: 10px 5px;
      line-height: 40px;
    }
    .router-link-active {
      color: #ce1e27;
    }
  }

  .viewBox {
    flex: 1;
  }
</style>
