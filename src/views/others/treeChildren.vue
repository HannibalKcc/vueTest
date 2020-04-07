<template>
  <ul class="treeChildren wrap">
    <tree-node
      v-for="(item, index) in childrenList" :key="index"
      :nodeData="item"
      @click.native="$router.push(item.path)">
    </tree-node>
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
      this.$options.components.treeNode = require('./treeNode.vue').default;
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .wrap {
    padding-left: 30px;
    cursor: pointer;
  }
</style>
