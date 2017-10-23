<template>
  <div class="myCom">
    子组件：{{show}}
    <button @click="unshow">关闭</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      show: {
        type: Boolean
      }
    },
    methods: {
      unshow () {
        this.$emit('update:show', false);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  button {

  }
</style>
