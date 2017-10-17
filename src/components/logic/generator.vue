<template>
  <div class="generator">
    <h2>Generator是ES6中的一个异步编程解决方案。其行为与传统概念完全不同。</h2>
    <h3>Generator函数通过 function* boo 这样的方式声明。</h3>
    <p>先来简单看看</p>
    <div class="demoBlock">
      {{demo1Txt}}
      <button @click="getNext">执行next！</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        demo1Txt: null,
        can: null
      };
    },
    methods: {
      demo1Fun: function* () {
        console.log('here 0');
        yield console.log('hello');
        console.log('here 1');
        yield console.log('world');
        return 'ending';
      },
      getNext () {
        this.can = this.can || this.demo1Fun();
        this.can.next();
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
