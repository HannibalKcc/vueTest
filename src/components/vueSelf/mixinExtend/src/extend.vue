<template>
  <div class="extend">

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created () {
      console.log('extend created');
      this.foo();
    },
    methods: {
      foo () {
        console.log('extend fn');
      },
      bar () {
        console.log('extend bar');
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
