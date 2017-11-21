<template>
  <div class="keepAlive">
    <h2>利用组件keep-alive缓存组件</h2>

    <h3>include、exclude可以动态地缓存需要的特定组件</h3>
    <p>缓存效果通过vue-tool可见</p>
    <div class="demoBlock">
      <keep-alive include="selfA">
        <component :is="is"></component>
      </keep-alive>
      <button @click="toggleIs">切换组件</button>
    </div>

    <h3>附录：is与单文件组件、DOM模板</h3>
    <p>
      在DOM模板中，由于H5的特性，并不有些标签并不能随意包裹任意标签。 <br>
      比如ul标签内部应该是li标签，那么此时ul标签内填写my-li标签会报错。正确的解决方法是使用li is="my-li"来解决。
      注：非DOM模板中不必考虑
    </p>
    <div class="demoBlock">
      <div>
        <ul>
          <li>由于此处是非DOM模板，所以ul标签内可以随意填写自定义组件，只要最终编译出来的结果符合H5标准即可</li>
          <my-li></my-li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import selfA from './src/a.vue';
  import selfB from './src/b.vue';
  import myLi from './src/myLi.vue';

  export default {
    components: {selfA, selfB, myLi},
    data () {
      return {
        is: 'selfA'
      };
    },
    methods: {
      toggleIs () {
        this.is = this.is !== 'selfA' ? 'selfA' : 'selfB';
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
