<template>
  <div class="tree">
    <h3>描述：用递归组件制作树形图</h3>
    <p>利用了递归组件</p>
    <ul class="wrap">
      <tree-node v-for="(item, index) in treeList" :key="index" :nodeData="item"></tree-node>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  import treeNode from './src/treeNode.vue';

  export default {
    components: {treeNode},
    data () {
      return {
        treeList: [
          {
            name: '顶级目录A',
            children: [
              {
                name: '二级目录a',
                children: [
                  {name: 'a-1'},
                  {name: 'a-2'}
                ]
              },
              {
                name: '二级目录b',
                children: [
                  {name: 'b-1'},
                  {name: 'b-2'},
                  {name: 'b-3'}
                ]
              }
            ]
          },
          {
            name: '顶级目录B',
            children: [{name: '二级目录c'}]
          }
        ]
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .wrap {
    width: 70%;
    padding-left: 30px;
    text-align: left;
  }
</style>
