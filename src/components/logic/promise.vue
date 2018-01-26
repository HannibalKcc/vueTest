<template>
  <div class="promise">
    <h2>Promise跟Generator类似，也是ES6处理异步的一种思路。</h2>

    <h3>Promise的链式写法</h3>
    <p>
      由于Promise的then()的返回值（注：这里不指then中rb的返回值）总会返回一个新的Promise对象<br>
      所以我们可以采取链式的书写promise.then().then()<br>
      then()中rb的return值（非Promise对象时）会被当做下一个then的参数
    </p>
    <div class="demoBlock">
      <button @click="demo0Start">Go</button>
    </div>

    <h3>异步A、B、C依次执行，看起来就像同步。</h3>
    <p>
      如果then()的rb接受参数是一个Promise对象，那么then()的rb会等待这个Promise进入非pending状态后执行<br>
      换句话说，只要上Promise对象resolve()传参 或者 一个then()的rb内return一个 Promise对象，那么就可以异步依次执行
    </p>
    <div class="demoBlock">
      执行示意：{{demo1Txt}}<br>
      <button @click="demo1Start()">开始计时：{{time}}</button>
    </div>

    <h3>Promise与vue-resource</h3>
    <p>
      依次执行ajax，return一个Promise对象（即vue-reousrce的$http）在then的rb中操作res<br>
      （注：return非Promise对象会传入到下一个then的rb参数中去）
    </p>
    <div class="demoBlock">
      依次请求豆瓣ID：1764796、3541415、1794171
      <button @click="jdStart([1764796,3541415,1794171])">开始</button>
      <span v-for="item in moviesList">{{item.title}}&nbsp;&nbsp;</span>
    </div>


    <h3>Promise.all(...promise)</h3>
    <p>
      Promise.all(...promise)用于把多个Promise实例封装成新的Promise实例<br>
    </p>

    <h3>附录：测试预加载与ajax的关系</h3>
    <p>
      1，如果编译错误，那么打不了包（与预渲染prerender有关！正常打包并不检查错误）
      <!--1，{{moviesList[0].aka[0]}}-->
      <br>
      2，预渲染的运行环境是nodejs，所以比如Promise的语法必须有catch()等捕捉错误的方法，否则会报错。这点与浏览器环境有所不同
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
    },
    data () {
      return {
        time: 0,  // 计时用的时间
        demo1Txt: '',
        interval: null, // 计时器，用于清空
        moviesList: [] // 电影列表
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
            return 300;
          })
          .then(a => {
            console.log(a);
            a -= 10;
            return a;
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
      },
      jdStart (idList) {
        this.ajaxGetMovie(idList[0]).then(res => {
          this.moviesList.push(res.body);
          return this.ajaxGetMovie(idList[1]);
        }).then(res => {
          this.moviesList.push(res.body);
          return this.ajaxGetMovie(idList[2]);
        }).then(res => {
          this.moviesList.push(res.body);
        });
      },
      ajaxGetMovie (id) {
        return this.$http.get(`/v2/movie/subject/${id}`);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
