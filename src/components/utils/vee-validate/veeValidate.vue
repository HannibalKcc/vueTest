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
        <span v-show="errors.has('testReq')">{{errors.first('testReq')}}</span>
      </div>
      <div class="eg3">
        <my-com v-model="testMobile" v-validate="'required|mobile'" name="testMobile"></my-com>
        <span v-show="errors.has('testMobile')">{{errors.first('testMobile')}}</span>
      </div>
      <div class="err" v-show="errors.any()">检测所有表单：{{errors.all()[0]}}!</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myCom from './src/myCom.vue';
  export default {
    components: {myCom},
    data () {
      return {
        test: '测试文本',
        testMobile: '15912346789'
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .veeValidate {
    padding: 0 80px;
    text-align: left;
  }
  .err{
    color: brown;
  }
</style>
