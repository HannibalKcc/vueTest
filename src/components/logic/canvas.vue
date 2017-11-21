<template>
  <div class="canvas">
    <h2>canvas的一些技巧</h2>

    <h3>利用canvas压缩图片</h3>
    <p>通过input获取图片，利用canvas的toDataURL函数转化图片为指定尺寸、质量的图片（base64格式）</p>
    <div class="demoBlock">
      <input type="file" id="img_input" @change="condense">
      <span>原图片大小：{{originSize}}</span>
      <span>压缩后大小：{{condensedSize}}</span>
      <span v-if="done">压缩完成！</span>
      压缩后的bse64:<img :src="condensedbase64"><br>
      压缩后的bse64->blob->base64:<img :src="condensedDataFromBlob">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        originSize: '0KB', // 源文件大小
        condensedSize: '0KB',  // 压缩后大小
        condensedbase64: '',  // 压缩后base64
        condensedBlob: '',  // 压缩后blob文件，从blob文件中获取数据的唯一方法就是使用FileReader
        condensedDataFromBlob: '',  // 获取blob文件的data
        done: false
      };
    },
    methods: {
      condense () {
        var that = this;
        var file = document.querySelector('#img_input').files[0];
        that.originSize = file.size / 1024 + 'KB';
        let reader = new FileReader();
        reader.readAsDataURL(file); // 1，用FileReader读取file里的图片
        reader.onload = function (e) {
          var img = new Image();
          var width = 640;  // image resize
          var quality = 0.8;  // image quality
          var canvas = document.createElement('canvas');
          var drawer = canvas.getContext('2d');
          img.src = this.result;  // 2，再把读完的图片拿去加载
          img.onload = function () {
            canvas.width = width;
            canvas.height = width * (img.height / img.width); // 保持宽高原尺寸
            drawer.drawImage(img, 0, 0, canvas.width, canvas.height); // 3，在canvas上画出来
            that.condensedbase64 = canvas.toDataURL('image/jpeg', quality);  // 4，将canvas上的内容转化为base64格式
            that.done = true;
            that.convertBase64UrlToBlob(that.condensedbase64);
          };
        };
      },
      convertBase64UrlToBlob (base64) {
        let bytes = window.atob(base64.split(',')[1]);
        let ab = new ArrayBuffer(bytes.length);
        let ia = new Uint8Array(ab);
        for (let i = 0; i < bytes.length; i++) {
          ia[i] = bytes.charCodeAt(i);
        }
        // Blob类型：二进制文件，是可以ajax传输的。
        // 构造函数 type: MIME格式
        let _blob = new Blob([ab], {type: 'image/png'});
        this.condensedBlob = _blob;
        this.getDataFromBlob(this.condensedBlob);
      },
      getDataFromBlob (blob) {
        let that = this;
        let reader = new FileReader();
        reader.readAsDataURL(blob); // 1，用FileReader读取file里的图片
        reader.onload = function () {
          that.condensedDataFromBlob = this.result; // reader读出来的也是base64格式
        };
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
