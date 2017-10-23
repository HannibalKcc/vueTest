<template>
  <div class="input2">
    <input v-model="value[0].tit"/>
    <input v-model="value[1].tit"/>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['value'],
    watch: {
      value: {
        handler (newVal) {
          this.$emit('change', newVal);
        },
        deep: true
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
