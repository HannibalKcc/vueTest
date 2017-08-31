<template>
  <div class="flotageQrCode">
    <div class="content">
      <input type="text" placeholder="请输入ip" v-model="localIp">
      <img :src="codeUrl" alt="草料二维码" title="草料二维码">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
    },
    data () {
      return {
        localIp: ''
      };
    },
    computed: {
      codeUrl () {
        return `https://cli.im/api/qrcode/code?text=http://${this.localIp}:9090&mhid=sELPDFnok80gPHovKdI`;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
.flotageQrCode {

}
  .content {

  }
</style>
