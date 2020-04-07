<template>
  <div class="fullPage">
    <div class="section">
      <h1>切换路由后自个刷新下</h1>
      <a href="https://alvarotrigo.com/fullPage/#firstPage">fullPage官网</a>
    </div>
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
  import $ from 'jquery';
  import 'fullpage.js';
  export default {
    mounted () {
      this.initFullPage();
    },
    methods: {
      initFullPage () {
        $('.fullPage').fullpage({
          sectionsColor: ['#c2f2f2', '#4BBFC3', '#7BAABE', '#fc1']
        });
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @import '../../../assets/css/jquery.fullPage.css';
</style>
