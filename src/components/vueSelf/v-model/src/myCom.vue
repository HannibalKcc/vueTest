<template>
  <div class="myCom">
    <span>个人组件实现v-model绑定</span>
    <input type="text" :value="value" @input="updateValue($event.target.value)">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: ['value'],
    methods: {
      updateValue (value) {
        var formattedValue = value;
        // 通过 input 事件发出数值
        this.$emit('input', Number(formattedValue));
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
