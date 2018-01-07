<template>
  <div class="svg">
    <h2>SVG</h2>

    <h3>SVG描边</h3>
    <div class="demoBlock">
      <svg class="stroke" width="800" height="200">
        <text class="text" text-anchor="middle" x="50%" y="50%"
              v-for="(item, index) in 4" :class="'text' + (index + 1)">
          awesome storke!
        </text>
        <text class="text" text-anchor="middle" x="50%" y="80%"
              v-for="(item, index) in 4" :class="'text' + (index + 1)">
          中文效果
        </text>
      </svg>
    </div>

    <h3>SVG科学地引入</h3>
    <div class="demoBlock">
      <icon iconClass="gongchengshi"/>
      <svg>
        <use xlink:href="#icon-watch"/>
      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import icon from './src/icon.vue';
  import '../../../assets/img/svg/animals.svg';
  import '../../../assets/img/svg/watch.svg';

  export default {
    components: {icon}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .svg {

  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 206;
    }
  }

  .stroke {
    .text {
      font-size: 60px;
      font-weight: bold;
      text-transform: uppercase; // 大写转换
      fill: none;
      stroke-width: 2px;
      stroke-dasharray: 50 156;
      animation: stroke 6s infinite linear;
    }
    .text1 {
      stroke: #3498db;
      animation-delay: 0s;
    }
    .text2 {
      stroke: #aedb83;
      animation-delay: -1.5s;
    }
    .text3 {
      stroke: #db0a97;
      animation-delay: -3s;
    }
    .text4 {
      stroke: #ffda7e;
      animation-delay: -4.5s;
    }
  }
</style>
