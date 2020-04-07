<template>
  <div class="vuePart">
    <h3>数据劫持--vue</h3>
    <p class="txtIndent">
      采用数据劫持结合发布者-订阅者模式的方式，通过Object.defineProperty()来劫持各个属性的setter，getter，在数据变动时发布消息给订阅者，触发相应的监听回调。</p>
    <define-property></define-property>
    <observer></observer>
  </div>
</template>

<script type="text/ecmascript-6">
  import defineProperty from './defineProperty.vue';
  import observer from './observer.vue';
  export default {
    components: {defineProperty, observer}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  h3 {
    text-align: center;
  }

  .txtIndent {
    text-indent: 2em;
  }
</style>
