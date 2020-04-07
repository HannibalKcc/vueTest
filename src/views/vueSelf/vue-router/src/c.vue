<template>
  <div class="c">
    <p>大侠，点个赞再走嘛！</p>
    <button @click="allowLeave = !allowLeave" :class="{clicked: allowLeave}">赞！</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        allowLeave: false
      };
    },
    beforeRouteLeave (to, from, next) {
      console.log(this);
        if (this.allowLeave === false) {
          this.$notify.error({
            title: '错误',
            message: '不点赞不许走！'
          });
        next(false); // 不合条件就拒绝跳转
      } else {
        this.$notify.success({
          title: '成功',
          message: '既然点过赞了，那就走吧！'
        });
        next();
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  button {
    text-align: center;
    color: #666;
  }

  .clicked {
    color: brown;
  }
</style>
