<template>
  <div class="c">
    <p>大侠，点个赞再走嘛！</p>
    <button @click="allowLeave = !allowLeave" :class="{clicked: allowLeave}">赞！</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        allowLeave: false
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  button {
    text-align: center;
    color: #666;
  }

  .clicked {
    color: brown;
  }
</style>
