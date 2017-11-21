<template>
  <div class="global">
    <h2>在vue中设置全局云云</h2>

    <h3>全局变量、函数</h3>
    <p>
      Vue.use符合规则的js文件就可以使用了 <br>
      在Vue.prototype上添加
    </p>
    <div class="demoBlock">
      <button @click="globalFun1">点我调用全局方法</button>
      <div>全局函数{{a}}</div>
    </div>

    <h3>全局组件</h3>
    <p>在main.js中调用Vue.component()注册</p>
    <div class="demoBlock">
      <global-component></global-component>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
