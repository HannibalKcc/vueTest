<template>
  <div class="generator">
    <h2>Generator是ES6中的一个异步编程解决方案。其行为与传统概念完全不同。</h2>

    <h3>Generator函数通过 function* boo 这样的方式声明。</h3>
    <p>先来简单看看</p>
    <div class="demoBlock">
      {{demo1Txt}}
      <button @click="getNext1">执行next！</button>
    </div>

    <h3>异步写起来就像同步</h3>
    <p>也可以把多重异步当做同步任务去书写</p>
    <div class="demoBlock">
      {{demo2Txt}}
      <button @click="getNext2">依次异步执行</button>
    </div>

    <h3>省去容器</h3>
    <p>
      Generaor声明并执行后会返回一个指针，前面两个demo都需要一个承载容器，这样的代码并不直观。那么是否可以利用立即执行函数来省去容器变量呢？<br>
      需要注意的是，立即执行函数后返回的是一个值，所以应该声明在vue实例的data中而非methods
    </p>
    <div class="demoBlock">
      {{demo3Fun.next()}}
      <button @click="demo3Fun.next()">这次没有容器了</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        demo1Txt: null,
        can: null,
        demo2Txt: null,
        can2: null,
        demo3Fun: (function* () {
          console.log(123);
          yield 123;
          console.log(456);
          yield 456;
          console.log(789);
          yield 789;
        })()
      };
    },
    methods: {
      demo1Fun: function* () {
        console.log('here 0');
        yield this.demo1Txt = 'hello';
        console.log('here 1');
        yield this.demo1Txt = 'world';
        return 'ending';
      },
      getNext1 () {
        this.can = this.can || this.demo1Fun();
        this.can.next();
      },
      demo2Fun: function* () {
        yield setTimeout(() => {
          this.demo2Txt = 'Do';
          this.can2.next();
        }, 500);
        yield setTimeout(() => {
          this.demo2Txt += ' Re';
          this.can2.next();
        }, 500);
        yield setTimeout(() => {
          this.demo2Txt += ' Mi';
          this.can2.next();
        }, 500);
      },
      getNext2 () {
        this.can2 = this.can2 || this.demo2Fun();
        this.can2.next();
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
