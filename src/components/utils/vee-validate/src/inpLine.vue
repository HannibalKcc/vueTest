<template>
  <div class="inpLine">
    <slot name="left"></slot>
    <img class="icon" v-if="imgSrc" :src="imgSrc" alt="">
    <!--文本inp-->
    <input v-if="inpuType === 'text'" type="text" :placeholder="placeTxt" :value="value" @input="updateValue($event.target.value)">
    <!--密码inp-->
    <input v-if="inpuType === 'pwd'" type="password" :placeholder="placeTxt" :value="value" @input="updateValue($event.target.value)">
    <slot name="right"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      imgSrc: {
        type: String,
        default: ''
      },
      placeTxt: {
        type: String,
        default: ''
      },
      inpuType: {
        type: String,
        default: 'text'
      },
      value: {}
    },
    methods: {
      updateValue (value) {
        var formattedValue = value;
        // 通过 input 事件发出数值
        this.$emit('input', formattedValue);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .inpLine {
    display: flex;
    width: 250px;
    height: 30px;
    border-radius: 5px;
    margin-bottom: 10px;
    overflow: hidden;
    background-color: #fff;
  }

  .icon {
    display: inline-block;
    height: 30px;
    padding-left: 5px;
  }

  input {
    width: 10px;
    flex: 1 1 10px;
    display: inline-block;
    height: 30px;
    padding: 0 5px;
    border: none;
  }
</style>
