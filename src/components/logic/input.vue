<template>
  <div class="getCamera">
    <h2>Input的各种用法</h2>
    <h3>移动端调用设备（移动端打开获得完整体验）</h3>
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

    <h3>原生的表单验证</h3>
    <form class="validate">
      <input type="text" required placeholder="必填">
      <input type="eamil" required placeholder="必填 email">
      <input type="url" required placeholder="必填 url">
      <input type="number" name="points" min="3" max="600" placeholder="3-600"/>
      <input type="submit">
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .validate {
    input {
      &:valid {
        border: 1px solid #77ff48;
      }
      &:invalid {
        border: 1px solid #ff2d3c;
      }
    }
  }
</style>
