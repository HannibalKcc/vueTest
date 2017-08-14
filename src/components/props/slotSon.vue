<template>
  <div class="slotSon">
    <!--虽然具名，但顺序由分发者决定-->
    <slot name="some1"></slot>
    <span>子内容</span>
    <!--匿名组件相互匹配-->
    <slot>匿名槽默认值</slot>
    <slot name="some2"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {};
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
</style>
