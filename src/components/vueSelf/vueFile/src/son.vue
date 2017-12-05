<template>
  <div class="son">
    子组件的文字
    <div class="deepSon">更深一层的文字</div>
    <deep-son-com/>
  </div>
</template>

<script type="text/ecmascript-6">
  import deepSonCom from './deepSonCom.vue';
  export default {
    components: {deepSonCom}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
