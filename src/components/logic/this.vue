<template>
  <div class="this">
    <h3>描述：this随着调用者变化而变化，具体见代码</h3>
    <span>{{txt}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
//      let log = console.log.bind(console);
      function showThis () {
        console.log(this);
      }

      // 回调函数 固定方法 例子：定时器
      this.timeout(showThis); // Window
      this.timeout(showThis.bind(this)); // VueComponent
      this.timeout(showThis.apply(this, [])); // VueComponent
      // 嵌套函数 固定方法 例子：ajax请求
      // 略 箭头函数
    },
    data () {
      return {
        txt: 'myTXT'
      };
    },
    methods: {
      timeout (f) {
        setTimeout(f, 300);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
