<template>
  <div class="MVVM">
    <h3>描述：研究MMVM中的双向绑定</h3>
    <div class="backbonePart">
      <h3>发布者-订阅者模式--backbone</h3>
    </div>
    <hr>
    <div class="agPart">
      <h3>脏值检查--ag</h3>
    </div>
    <hr>
    <vue-part></vue-part>
  </div>
</template>

<script type="text/ecmascript-6">
  import vuePart from './vuePart.vue';
  export default {
    components: {vuePart}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">


  .MVVM {
    text-align: left;
  }


</style>
