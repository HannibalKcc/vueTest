<template>
  <div class="sync">
    <h2>sync</h2>
    <h3>子组件传值修饰符sync</h3>
    <p>利用.sync语法糖可以更加让父子双向绑定简单、明显</p>
    <div class="demoBlock">
      <div class="father">
        <button @click="show = true">show子组件</button>
        <son v-if="show" :show.sync="show"></son>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import son from './src/myCom.vue';

  export default {
    components: {son},
    data () {
      return {
        show: false
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .father {
    background-color: #ddd;
  }
</style>
