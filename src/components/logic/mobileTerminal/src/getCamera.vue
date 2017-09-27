<template>
  <div class="getCamera">
    <h3>描述：移动端调用设备（移动端打开获得完整体验）</h3>
    <div class="line">
      <label>调用照相机</label><input type="file" capture="camera" accept="image/*">
    </div>
    <div class="line">
      <label>调用录像机</label><input type="file" capture="camcorder" accept="video/*">
    </div>
    <div class="line">
      <label>调用录音机</label><input type="file" capture="microphone" accept="audio/*">
    </div>
    <div class="line">
      <label>允许多重调用</label><input type="file" multiple>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
