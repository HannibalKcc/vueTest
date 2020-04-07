<template>
  <div class="mixinExtend">
    <h2>关于vue的extends与 mixin</h2>

    <h3>观察合并规则</h3>
    <p>
      通过console.log可知，mixin与extends的相应vue内的选项。对于函数会合并，而对于对象内的同名属性则采用优先级替换的策略（extends &lt; mixin &lt; self，生命周期顺序同理）
      标签、样式并不会合并
    </p>

    <h3>类似的有Vue.extend，在实现上述功能的基础上提供一个可以复用的构造对象</h3>
  </div>
</template>

<script type="text/ecmascript-6">
  import mixin1 from './src/mixin1.vue';
  import mixin2 from './src/mixin2.vue';
  import extend from './src/extend.vue';

  export default {
    extends: extend, // 最先执行生命周期
    mixins: [mixin2, mixin1], // 其次执行
    created () {
      console.log('self created');
      this.foo();
      this.bar(); //  mixin1 bar
    },
    methods: {
      foo () {
        console.log('slef fn');
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
