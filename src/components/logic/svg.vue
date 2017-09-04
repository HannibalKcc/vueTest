<template>
  <div class="svg">
    <div class="content">
      <h3>描述：SVG描边</h3>
      <svg class="stroke" width="800" height="200">
        <text class="text text1" text-anchor="middle" x="50%" y="50%">
          awesome storke！
        </text>
        <text class="text text2" text-anchor="middle" x="50%" y="50%">
          awesome storke！
        </text>
        <text class="text text3" text-anchor="middle" x="50%" y="50%">
          awesome storke！
        </text>
        <text class="text text4" text-anchor="middle" x="50%" y="50%">
          awesome storke！
        </text>
        </text>
      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .svg {

  }

  .content {

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
