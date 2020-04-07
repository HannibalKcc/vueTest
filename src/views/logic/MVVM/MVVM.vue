<template>
  <div class="MVVM">
    <h1>描述：研究MMVM中的双向绑定</h1>
    <backbone-part class="marginTB"></backbone-part>
    <hr>
    <ag-part class="marginTB"></ag-part>
    <hr>
    <vue-part class="marginTB"></vue-part>
  </div>
</template>

<script type="text/ecmascript-6">
  import backbonePart from './src/backbonePart.vue';
  import agPart from './src/agPart.vue';
  import vuePart from './src/vuePart.vue';
  export default {
    components: {backbonePart, agPart, vuePart}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .MVVM {
    text-align: left;
  }

  .marginTB {
    margin: 20px 0;
  }
</style>
