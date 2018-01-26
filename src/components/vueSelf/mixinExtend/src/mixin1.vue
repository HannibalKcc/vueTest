<template>
  <div class="mixin1">
    mixin1
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      console.log('mixin1 created');
      this.foo();
    },
    methods: {
      foo () {
        console.log('mixin1 fn');
      },
      bar () {
        console.log('mixin1 bar');
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  h3 {
    color: red;
  }
</style>
