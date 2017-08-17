<template>
  <!--注意，这是移动端的解决方案！-->
  <div class="fullPage-mobile">
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page">
          <p class="part-1">vue-fullpage</p>
        </div>
        <div class="page-2 page">
          <p class="part-2">vue-fullpage</p>
        </div>
        <div class="page-3 page">
          <p class="part-3">vue-fullpage</p>
          <p class="part-3">vue-fullpage</p>
          <p class="part-3">vue-fullpage</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        opts: {
          start: 0,
          dir: 'v',
          duration: 500
        }
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
