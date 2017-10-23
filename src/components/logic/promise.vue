<template>
  <div class="promise">
    <h2>Promise跟Generator类似，也是ES6处理异步的一种思路。</h2>

    <h3>Promise的链式写法</h3>
    <p>
      由于Promise的then()的返回值总会返回一个新的Promise对象（即使return 123）<br>
      所以我们可以采取链式的书写promise.then().then()<br>
      then()中return的内容会被当做下一个then的参数
    </p>
    <div class="demoBlock">
      <button @click="demo0Start">Go</button>
    </div>

    <h3>异步A、B、C依次执行，看起来就像同步。</h3>
    <p>
      如果then()接受到的参数是一个Promise对象，那么then()会等待这个Promise进入非pending状态后执行<br>
      换句话说，只要上Promise对象resolve()传参 或者 一个then()return一个 Promise对象，那么就可以异步依次执行
    </p>
    <div class="demoBlock">
      执行示意：{{demo1Txt}}<br>
      <button @click="demo1Start()">开始计时：{{time}}</button>
    </div>

    <h3>Promise.all(...promise)</h3>
    <p>
      Promise.all(...promise)用于把多个Promise实例封装成新的Promise实例<br>
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        time: 0,  // 计时用的时间
        demo1Txt: '',
        interval: null // 计时器，用于清空
      };
    },
    methods: {
      demo0Start () {
        return new Promise((resolve, reject) => {
          resolve(999);
        })
          .then(a => {
            console.log(a);
            return --a; // 注意！tmp = Promise.then(),tmp !== 999; 这个return值只是给下一个then()作为参数使用的
          })
          .then(a => {
            console.log(a);
            return --a;
          })
          .then(a => {
            console.log(a);
            return --a;
          });
      },
      demo1Start () {
        this.runTime();
        this.damo1P().then(() => {
          this.demo1Txt = 'A';
          return this.damo1P(); // return一个promise对象
        }).then(() => {
          this.demo1Txt += '->B';
          return this.damo1P(1000);
        }).then(() => {
          this.demo1Txt += '->C';
          clearInterval(this.interval); // 清除定时器
        });
      },
      damo1P (time) {
        return new Promise((resolve, reject) => {
          return setTimeout(resolve, time || 3000);
        });
      },
      runTime () {
        this.time = 0;
        this.interval = setInterval(() => {
          this.time += 0.5;
        }, 500);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
