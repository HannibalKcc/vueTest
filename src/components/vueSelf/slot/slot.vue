<template>
  <div class="slotFather">
    <h2>solt属性分发内容</h2>

    <h3>具名solt</h3>
    <p>通过具名让solt匹配到对应位置，匹配不成功的组件会被抛弃</p>
    <div class="demoBlock">
      <son-name>
        <div slot="some1">具名1</div>
        <div class="yellow" slot="some2">具名2</div>
        <div slot="some3">具名3（被抛弃）</div>
      </son-name>
    </div>

    <h3>作用于插槽</h3>
    <p>似乎出了点问题？</p>
    <div class="demoBlock">
      <son-scope>
        <template slot-scope="props">
          <span>{{ props }}</span>
        </template>
      </son-scope>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import sonName from './src/sonName.vue';
  import sonScope from './src/sonScope.vue';

  export default {
    components: {sonName, sonScope}
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .yellow {
    background: rgb(215, 220, 74);
  }
</style>
