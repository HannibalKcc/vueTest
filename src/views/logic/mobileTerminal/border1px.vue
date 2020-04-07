<template>
  <div class="border1px">
    <div class="content">
      <h3>描述：没有设置meta，请在移动端放大观察。</h3>
      <div class="box1">不处理的1px</div>
      <br>
      <div class="box2 border-1px">处理的1px</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  @media (-webkit-min-device-pixel-ratio: 2),(min-device-pixel-ratio: 2) {
    .border-1px {
      color: #932;
      &::after {
        transform: scaleY(.5); // 使用淘宝rem后，处理不处理都显示一致的效果
      }
    }
  }

  .moble1px {

  }

  .content {
    .box1 {
      border-bottom: 1px solid chocolate;
    }
    .box2 {
      position: relative;
      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-top: 1px solid chocolate;
      }
    }
  }
</style>
