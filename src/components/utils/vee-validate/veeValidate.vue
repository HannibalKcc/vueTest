<template>
  <div class="veeValidate">
    <h3>描述：vee-validate表单验证</h3>
    <div class="base">
      <div class="eg1">
        <input v-validate="'required|email'" name="email"
               type="text" placeholder="Email">
        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
      </div>
      <div class="eg2">
        <my-com v-model="test" v-validate="'required'" name="testReq"></my-com>
        <span v-show="errors.has('testReq')">{{ errors.first('testReq') }}</span>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myCom from './src/myCom.vue';
  export default {
    components: {myCom},
    data () {
      return {
        test: '测试文本'
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
.veeValidate{
  padding: 0 80px;
  text-align: left;
}
</style>
