<template>
  <li class="treeNode">
    <div class="title" @click="folding = !folding;" :class="{setCursor: nodeData.children}">
      <span class="nodeName">{{nodeData.name}}</span>
      <em v-if="nodeData.children"><strong>[{{folding? '+' : '-'}}]</strong></em>
    </div>
    <tree-children v-if="nodeData.children" v-show="!folding" :childrenList="nodeData.children"></tree-children>
  </li>
</template>

<script type="text/ecmascript-6">
  import TreeChildren from './treeChildren.vue';
  export default {
    name: 'TreeNode',
    components: {TreeChildren},
    props: {
      nodeData: {
        type: Object
      }
    },
    beforeCreate () {
//      this.$options.components.TreeChildren = require('./treeChildren.vue');
    },
    data () {
      return {
        folding: false
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .setCursor {
    cursor: pointer;
  }
</style>
