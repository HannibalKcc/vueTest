<template>
  <div class="key">
    <h2>key是识别节点的一个通用机制</h2>
    <h3>在v-for中使用，准确地识别节点</h3>
    <p>
      在v-for中，如果不使用key，那么就会默认使用'就地复用'的高效简单策略。<br>
      但是这样在某些情况下会产生一些错误，如下：
    </p>
    <div class="demoBlock">
      <button @click="shuffle">重新排序元素</button>
      <span>{{list}}</span>
      <ul>
        <li v-for="(item, index) in list" :key="item">
          {{item}}
          <input type="text" placeholder="随便输入点什么先">
          <div class="btn" @click="list.splice(index, 1);">X</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import _ from 'lodash';
  export default {
    data () {
      return {
        list: [1, 2, 3, 4, 5, 6, 7]
      };
    },
    methods: {
      shuffle () {
        this.list = _.shuffle(this.list);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
