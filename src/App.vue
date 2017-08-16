<template>
  <div id="app">
    <div class="routerBox">
      <router-link class="router" v-for="(item, index) in routers" :to="item.to" :key="index">{{item.inf}}</router-link>
      <hr>
      <router-view></router-view>
    </div>
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
          {to: '/sort', inf: 'logic-sort'},
          // 工具
          {to: '/fullPage', inf: 'utils-fullPage'}
        ],
        texts: ['c1', 'c2', 'c3', 'c4', 'c5']
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
    margin-top: 60px;
  }

  a:visited {
    color: #b6b96b;
  }

  .routerBox {
    .router {
      margin: 10px 5px;
    }
    .router-link-active {
      color: rgb(25, 240, 229);
    }
  }
</style>
