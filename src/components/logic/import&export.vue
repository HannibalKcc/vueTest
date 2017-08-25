<template>
  <div class="IE">
    <span>测试ES6中，import与export语法</span>
    <span>路由之间切换，组件会被销毁。可用标签&lt;kepp-alive&gt;缓存</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import './import&export.js'; // 里面声明并export default变量txt，但是无法使用
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
