<template>
  <div class="vueRouter">
    <h2>vueRouter实践</h2>
    <div class="box1">
      <h3>二级路由</h3>
      <!--为了在任何路由下准确地跳转，to应该写绝对路径-->
      <router-link to="/vueRouter/a">跳转到二级路由a</router-link>
      <router-link to="/vueRouter/b">跳转到二级路由b</router-link>
      <router-link to="/vueRouter/c">跳转到二级路由c</router-link>
      <router-link to="/vueRouter/d">跳转到二级路由d</router-link>
      <router-view></router-view>
    </div>
    <div class="box2">
      <h3>路由钩子（导航拦截器）</h3>
      <p>全局钩子与局部钩子</p>
    </div>
    <div class="box3">
      <h3>路由元信息meta</h3>
      <p>配合路由钩子完成简单的鉴权工作</p>
    </div>

    <h3>复杂的鉴权问题</h3>
    <p>
      在复杂鉴权问题下，应当考虑使用 addRoutes 动态地加载路由的存在与否。取代复杂又不容易辨别的 if else <br>
      在 addRoutes 后，记得手动刷新一遍路由列表，如下： <br>
      router.addRoutes之后的next()可能会失效，因为可能next()的时候路由并没有完全add完成 <br>
    </p>
    <div class="demoBlock">
      <button @click="addRoutes">添加路由manual</button>
      <router-link to="/vueRouter/manual">跳转</router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import manual from './src/manual.vue';
  import router404 from './src/router404.vue';

  export default {
    methods: {
      addRoutes () {
        this.$router.addRoutes([
          {
            path: '/vueRouter/manual',
            component: manual
          },
          {
            path: '/404',
            component: router404
          },
          {
            path: '*',
            redirect: '/404'
          }
        ]);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
