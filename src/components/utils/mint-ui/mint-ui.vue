<template>
  <div class="mintUI">
    <a href="http://mint-ui.github.io/docs/#/zh-cn/toast" target="_blank">Mint-UI文档</a>
    <div class="content">
      <message-box></message-box>
      <hr>
      <infinite-scroll></infinite-scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import messageBox from './src/messageBox.vue';
  import infiniteScroll from './src/infiniteScroll.vue';
  export default {
    components: {messageBox, infiniteScroll}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
