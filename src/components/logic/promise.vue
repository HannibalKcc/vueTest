<template>
  <div class="promise">
    <h2>promise跟generator类似，也是ES6处理异步的一种思路。</h2>

    <h3>异步A、B、C依次执行，看起来就像同步。</h3>
    <p>then()中return一个promise对象的话，那么下一个then就会等待该promise状态转化</p>
    <div class="demoBlock">
      执行示意：{{demo1Txt}}<br>
      <button @click="demo1Start()">开始计时：{{time}}</button>
    </div>

    <h3>Promise.all(...promise)用于把多个promise实例封装成新的Promise实例</h3>
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
