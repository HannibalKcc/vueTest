<template>
  <div class="tmp">
    hi，这里是通过extend .vue文件并挂载的组件
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      console.log('来自.vue文件的渲染');
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .tmp {
    color: red;
  }
</style>
