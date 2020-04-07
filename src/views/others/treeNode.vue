<template>
  <li class="treeNode">
    <div class="title" @click="folding = !folding" :class="{setCursor: nodeData.classChild}">
      <span class="nodeName">{{nodeData.farName || nodeData.info}}</span>
      <em v-if="nodeData.classChild"><strong>[{{folding? '+' : '-'}}]</strong></em>
    </div>
    <tree-children v-if="nodeData.classChild" v-show="!folding" :childrenList="nodeData.classChild"></tree-children>
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
  .nodeName:hover{
    text-shadow: 1px 1px 0px #dd6f6c;
  }
</style>
