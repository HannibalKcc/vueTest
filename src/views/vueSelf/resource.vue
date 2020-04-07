<template>
  <div class="resource">
    <button @click="ajaxTest">发送请求</button>
    <img width="50" src="http://localhost:3000/public/img/logo.png" title="后台获取的图片">
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
    },
    methods: {
      ajaxTest () {
        this.$http.get('http://localhost:3000/test').then(res => {
            console.log(res);
        }, res => {
            console.log(res);
        });
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
