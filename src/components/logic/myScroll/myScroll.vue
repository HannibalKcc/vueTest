<template>
  <div class="myScroll">
    <h2>自己尝试书写Scroll</h2>
    <div class="demoBlock">
      <div class="tarWrapper">
        <ul class="content">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>

    <h3>参考BetterScroll</h3>
    <div class="demoBlock">
      <p>拖动看效果</p>
      <hr>
      <div class="wrapper">
        <ul class="content">
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import MyScroll from './src/MyScroll.js';

  export default {
    mounted () {
      this.initScroll();
      this.initBScroll();
    },
    methods: {
      initScroll () {
        let myScroll = new MyScroll('.tarWrapper');  // eslint-disable-line
      },
      initBScroll () {
        const scroll = new BScroll('.wrapper'); // eslint-disable-line
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .tarWrapper {
    height: 500px;
    overflow: auto;
    background-color: white;
    li {
      height: 200px;
      &:nth-child(1) {
        background-color: #00B7FF;
      }
      &:nth-child(2) {
        background-color: #ff6ee7;
      }
      &:nth-child(3) {
        background-color: #57ffae;
      }
      &:nth-child(4) {
        background-color: #80ff2c;
      }
      &:nth-child(5) {
        background-color: #ff0008;
      }
    }
  }

  .wrapper {
    height: 300px;
    overflow: hidden;
    background-color: rgba(0, 0, 0, .3);
    .content {
      height: 500px;
      li {
        height: 100px;
      }
    }
  }
</style>
