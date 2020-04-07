<template>
  <div class="input2">
    <input v-model="value[0].tit"/>
    <input v-model="value[1].tit"/>
    <button @click="change">点我修改数据</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['value'],
    watch: {
      value: {
        handler (newVal) {
//          this.$emit('change', newVal);
        },
        deep: true
      }
    },
    methods: {
      change () {
        this.value[1].tit = 999; // 不会报错，视图也没有被修改
        // this.value.splice(1, 1, 666); // 不会报错，视图被修改
        // this.value = 333;   // 报错，视图被修改
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
