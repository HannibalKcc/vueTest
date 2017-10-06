<template>
  <div class="vueRouter">
    <h2>vueRouter实践</h2>
    <div class="box1">
      <h3>二级路由</h3>
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
      <p>配合路由钩子可以用来识别用户是否登录</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
