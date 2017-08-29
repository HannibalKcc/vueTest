<template>
  <div class="soltFather">
    <h3>描述：熟悉solt属性分发内容</h3>
    <slot-son>
      <!--虽然具名，但顺序由分发者决定-->
      <span slot="some1">具名1</span>
      <span class="yellow" slot="some2">具名2</span>
      <span slot="some3">具名3（被抛弃）</span>
    </slot-son>
    <!--作用域插槽？？？-->
  </div>
</template>

<script type="text/ecmascript-6">
  import slotSon from './slotSon.vue';
  export default {
    components: {slotSon}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .yellow {
    background: rgb(215, 220, 74);
  }
</style>
