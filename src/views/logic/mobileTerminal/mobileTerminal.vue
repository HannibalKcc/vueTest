<template>
  <div class="mobileTerminalJunk">
    <h2>移动端杂问题</h2>

    <h3>移动端数字键盘</h3>
    <p>pattern属性搭配正则表达式</p>
    <div class="demoBlock">
      <input type="tel" placeholder="会有+*#的tel型输入"> <br>
      <input type="text" placeholder="通过pattern限制纯数字键盘" pattern="[0-9]*"> <span>安卓4.4.4以上只认type</span><br>
      <input type="text" placeholder="校验输入3个字母" pattern="[a-z]{3}"> <br>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        msg: '测试rebase2'
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
