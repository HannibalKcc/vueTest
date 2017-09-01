<template>
  <div class="flotageQrCode">
    <div class="content">
      <input type="text" placeholder="请输入ip" v-model="localIp">
      <br>
      <a :href="codeUrl" target="_blank" title="草料二维码">草料二维码</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
    },
    data () {
      return {
        localIp: '192.168.1.123'
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
    position: fixed;
    top: 250px;
    left: 0;
    box-sizing: border-box;
    width: 200px;
    transform: translateX(-180px);
    padding: 10px 0;
    border: 3px solid #00B7FF;
    background-color: #ddd;
    transition: transform 0.7s;
    &:hover {
      transform: translateX(0);
    }
  }

  .content {

  }
</style>
