<template>
  <div class="vueFile">
    <h2>研究.vue文件</h2>
    <!--文档 https://vue-loader.vuejs.org/zh-cn/ -->
    <h3>允许存在多个style标签，可以混用scope、非scope</h3>

    <h3>允许使用深度作用选择器 &gt; &gt; &gt;</h3>
    <div class="demoBlock">
      <div class="far">
        父标签文字
        <the-son/>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import theSon from './src/son.vue';

  export default {
    components: {theSon}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .far {
    .son {
      color: #00B7FF;
      .deepSon {
        color: #502540;
      }
    }
  }

  /*深度作用选择器不生效 版本问题12.2开始支持*/
  .far /deep/ .deepSon {
    color: #77ff48;
  }
</style>
