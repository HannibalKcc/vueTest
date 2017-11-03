<template>
  <div class="sonName">
    <slot name="some1"></slot>
    <div>子内容</div>
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
