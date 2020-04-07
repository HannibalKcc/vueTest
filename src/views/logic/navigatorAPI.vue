<template>
  <div class="navigatorAPI">
    <h3>描述：关于API——navigator的研究</h3>
    <ol>
      <li>判断浏览器版本:{{userAgent}}</li>
      <li>判断访问端信息:{{appVersion}}</li>
    </ol>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.userAgent = navigator.userAgent;
      this.appVersion = navigator.appVersion;
      window.addEventListener('scroll', () => {
        console.log('scroll!');
      });
    },
    data () {
      return {
        userAgent: '',
        appVersion: ''
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
.navigatorAPI {
  height: 2000px;
}
</style>
