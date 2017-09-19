<template>
  <div class="v-model">
    <h3>描述：在自定义组件里面使用v-model</h3>
    <pre>
      v-model实际上只是一个语法糖，
      它相当于v-bind:value="something"与v-on:input="something = $event.target.value"
    </pre>
    <my-com v-model="test"></my-com>
    <span>展示{{test}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import myCom from './src/myCom.vue';
  export default {
    components: {myCom},
    data () {
      return {
        test: '初始文本'
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
