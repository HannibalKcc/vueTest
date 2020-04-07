<template>
  <div class="vuex">
    <h2>研究vuex</h2>

    <h3>基本操作</h3>
    <div class="demoBlock">
      <span>{{counts}}</span>
      <button @click="addCounts">增</button>
      <button @click="reduceCounts">减</button>
    </div>

    <h3>异步操作</h3>
    <div class="demoBlock">
      <button @click="asyncAdd">异步增</button>
    </div>

    <h3>通过plugin与subscribe与subscribeAction订阅vuex操作，优雅地防刷新丢数据</h3>
    <p>自行查看localSotrage的变化</p>
    <div class="demoBolck">

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapMutations, mapActions} from 'vuex';

  export default {
    computed: {
      counts () {
        return this.$store.state.counts;
      }
    },
    methods: {
      ...mapMutations([
        'addCounts',
        'reduceCounts'
      ]),
      ...mapActions([
        'asyncAdd' // 映射为this.$store.dispatch('asyncAdd')
      ])
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
