<template>
  <div class="import">
    <h2>ES6中，import与export模块化代码</h2>
    <p>路由之间切换，组件会被销毁。可用标签&lt;kepp-alive&gt;缓存</p>

    <h2>import()</h2>
    <p>通过在路由中设置import()动态地引入组件文件，形成异步组件</p>
  </div>
</template>

<script type="text/ecmascript-6">
  import './src/import&export.js'; // 里面声明并export default变量txt，但是无法使用
  export default {
    created () {
      console.log('created!');
    },
    mounted () {
      console.log('mounted!');
      // eslint-disable-next-line
      //console.log(txt); error
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
