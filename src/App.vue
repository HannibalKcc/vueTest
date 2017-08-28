<template>
  <div id="app">
    <div class="routerBox">
      <router-link class="router" v-for="(item, index) in routers" :to="item.to" :key="index">{{item.inf}}</router-link>
      <hr>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {},
    data () {
      return {
        routers: [
          // vue部分
          {to: '/transition', inf: 'vue-transition'},
          {to: '/propSolt', inf: 'vue-prop-slot'},
          // 逻辑
          {to: '/sort', inf: 'logic-排序'},
          {to: '/forLoop', inf: 'logic-es6 循环'},
          {to: '/import-export', inf: 'logic-es6 import&export'},
          {to: '/object', inf: 'logic- 对象问题'},
          {to: '/touchPenetration', inf: 'logic- 移动端点击穿透'},
          {to: '/currentTarget', inf: 'logic- target&currentTarget'},
          {to: '/array', inf: 'logic- 数组问题'},
          // 工具
          {to: '/fullPage', inf: 'utils-fullPage'}
        ]
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px 60px 0;
  }

  a:visited {
    color: #313e41;
  }

  .routerBox {
    .router {
      margin: 10px 5px;
    }
    .router-link-active {
      color: rgb(21, 202, 191);
    }
  }
</style>
