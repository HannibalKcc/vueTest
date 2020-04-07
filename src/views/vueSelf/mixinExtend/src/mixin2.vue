<template>
  <div class="mixin2">
    mixin2
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      console.log('mixin2 created');
      this.foo();
    },
    methods: {
      foo () {
        console.log('mixin2 fn');
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
