<template>
  <div class="async">
    <h2>async函数</h2>

    <h3>基本的使用</h3>
    <p>
      需要注意的是，在babel2015中，这个语法处于stage3
    </p>
    <div class="demoBlock">
      <div>{{demo01}}</div>
      <button @click="asyncPrint('瑟瑟发抖', 3000)">开始</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        demo01: 'await等待异步赋值'
      };
    },
    methods: {
      async timeout (ms) {
        await new Promise((resolve) => {
          setTimeout(resolve, ms);
        });
      },
      // await必须在async函数内使用！
      async asyncPrint (value, ms) {
        await this.timeout(ms);
        this.demo01 = value;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
