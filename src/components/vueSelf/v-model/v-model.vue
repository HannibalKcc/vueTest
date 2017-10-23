<template>
  <div class="v-model">
    <h2>v-model</h2>
    <h3>在自定义含input组件里面使用v-model</h3>
    <p>
      v-model实际上只是一个语法糖，
      它相当于v-bind:value="something"与v-on:input="something = $event.target.value"
    </p>
    <div class="demoBlock">
      <my-com v-model="test"></my-com>
      <span>{{test}}</span>
    </div>

    <p>
      知道v-model只是一个语法糖后，便可以知道v-model并不局限与input的值。<br>
      通过watch及时地$emit值（对象、数组、任何玩意）,v-model可以轻松地实现双向绑定
    </p>

    <h3>子组件多个input下的v-model处理</h3>
    <p>多个input可以通过v-model来双向绑定父组件的值</p>
    <div class="demoBlock">
      <input2 @change="changeValue" v-model="test2"></input2>
      <input v-model="test2">
    </div>

    <h3>number修饰符</h3>
    <p>
      number修饰符并不限制输入，而是尽可能把输入转化成数字(否则转为NaN)<br>
      对于输入的限制还是从input type="number"下手
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  import myCom from './src/myCom.vue';
  import input2 from './src/input2.vue';

  export default {
    components: {myCom, input2},
    data () {
      return {
        test: '初始文本',
        test2: [{tit: 11}, {tit: 22}]
      };
    },
    methods: {
      changeValue (txt) {
        this.test2 = txt;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
