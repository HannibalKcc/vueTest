<template>
  <div id="app">
    <div class="content">
      <ul class="routerBox">
        <tree-far
          v-for="(item, index) in routersList" :key="index"
          :nodeData="item">
        </tree-far>
      </ul>
      <div class="viewBox">
        <router-view/>
      </div>
    </div>

    <flotage-qr-code></flotage-qr-code>
  </div>
</template>

<script>
  import {routesRaw} from './router/index.js';

  import flotageQrCode from './views/others/flotageQrCode.vue';
  import treeFar from './views/others/treeNode.vue';

  export default {
    name: 'app',
    components: {flotageQrCode, treeFar},
    data() {
      return {
        routersList: routesRaw
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  #app {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px 10px 0;
    font-family: 'Microsoft YaHei', Arial;
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
    max-height: 830px;
    padding-bottom: 100px;
    border-right: 3px solid #404040;
    margin-right: 20px;
    overflow-y: scroll;
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
