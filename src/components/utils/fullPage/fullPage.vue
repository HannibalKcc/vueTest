<template>
  <div class="fullPage">
    <div class="section">第一屏</div>
    <div class="section">第二屏</div>
    <div class="section">
      <div class="slide">第三屏的第一屏</div>
      <div class="slide">第三屏的第二屏</div>
      <div class="slide">第三屏的第三屏</div>
      <div class="slide">第三屏的第四屏</div>
    </div>
    <div class="section">第四屏</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import '../../../assets/css/jquery.fullPage.css';
  import $ from 'jquery';
  import 'fullPage.js';
  export default {
    mounted () {
      this.initFullPage();
    },
    methods: {
      initFullPage () {
        $('.fullPage').fullpage();
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import '../../../assets/css/jquery.fullPage.css';
</style>
