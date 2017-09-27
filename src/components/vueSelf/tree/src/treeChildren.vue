<template>
  <ul class="treeChildren wrap">
    <tree-node v-for="(item, index) in childrenList" :key="index" :nodeData="item"></tree-node>
  </ul>
</template>

<script type="text/ecmascript-6">
  import treeNode from './treeNode.vue';
  export default {
    name: 'TreeChildren',
    components: {treeNode},
    props: {
      childrenList: {
        type: Array
      }
    },
    beforeCreate () {
      this.$options.components.treeNode = require('./treeNode.vue');  // 文档中这里需要加一个后缀default，经过反复测试均为undefined
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .wrap {
    padding-left: 30px;
  }
</style>
