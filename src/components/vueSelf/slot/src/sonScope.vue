<template>
  <div class="sonScope">
    <slot text="hello from child"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        txt: '子组件'
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
