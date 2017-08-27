<template>
  <div class="array">
    <h3>描述：取数组中出现次数最多的元素（元素类型不定）</h3>
    <div>{{arr1}}</div>
    <div>reduce()——{{resultReduce}}</div>
    <div></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.resultReduce = this.arr1.reduce((preVal, val, index) => (preVal[val]++ || (preVal[val] = 1), preVal), {}); // eslint-disable-line
    },
    data () {
      return {
        arr1: ['a', 'b', 562, 'c', 'c', '93', 'aaa', 'b', 'b', 562, 'c', 'z', 'k', 'a', '39', 'c', 'vv', 'd', 'c', 'd'],
        resultReduce: ''
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
