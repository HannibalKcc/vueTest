<template>
  <div class="infiniteScroll">
    <h3>描述：无限滚动</h3>
    <p class="textIndent">
      无限滚动的infinite-scroll-disabled属性是有bug的，还是需要自己手动检查
    </p>
    <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      infinite-scroll-immediate-check="false"
      infinite-scroll-listen-for-event="manualLoad">
      <!-- infinite-scroll-immediate-check立即自检查 -->
      <!-- infinite-scroll-listen-for-event用vue.on监听函数，使手动检查成为可能 -->
      <li :class="{borderB: index !== list.length - 1}" v-for="(item, index) in list">{{ item }}</li>
    </ul>
    <button @click="emit">手动检查是否启动loadMore</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        loading: false,
        list: 10
      };
    },
    methods: {
      loadMore () {
        this.loading = true;
        setTimeout(() => {
          this.list += 3;
          this.loading = false;
        }, 1000);
      },
      emit () {
        this.$emit('manualLoad');
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .infiniteScroll {
    ul {
      width: 100px;
      height: 500px;
      overflow-y: scroll;
      margin: auto;
      text-align: left;
      li {
        line-height: 30px;
        text-align: center;
      }
    }
    .borderB {
      border-bottom: 1px solid #ddd;
    }
  }
</style>
