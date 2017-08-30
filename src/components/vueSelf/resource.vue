<template>
  <div class="resource">
    <button @click="ajaxTest">发送请求</button>
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
