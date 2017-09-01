<template>
  <div class="IIFE">
    <h3>描述：立即执行函数</h3>
    <pre>
      通常我们创建并调用一个函数的过程为：
      1，声明function foo () {}
      2，调用 foo()

      那么可以不可以使用 function () {}() 直接调用？
      理论上是可以，但是js解释器把前半段当成了函数声明而非函数表达式。
      那么function foo () {}() 呢？
      这次报错的原因不同了，后半段被当成是分组操作符（常用在提升计算优先级）。

      可行的IIFE语法：
      (function() {/* code */}()) // 外层括号
      (function() {/* code */})() // 双括号
    </pre>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      ((function (somting) {
        console.log(somting);
      })('立即执行函数'));
    },
    data () {
      return {};
    },
    methods: {
      foo () {  // 还是要调用foo()才能执行其中的IIFE
        ((function (count) {
          console.log(count);
        })(6));
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
