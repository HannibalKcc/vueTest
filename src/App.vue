<template>
  <div id="app">
    <div class="routerBox">
      <router-link v-for="(item, index) in routers" :to="item.to" :key="index">{{item.inf}}</router-link>
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
        routers: [{to: '/transition', inf: 'transition'}],
        texts: ['c1', 'c2', 'c3', 'c4', 'c5']
      };
    }
  };
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
