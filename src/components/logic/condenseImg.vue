<template>
  <div class="condenseImg">
    <h3>描述：利用canvas压缩图片</h3>
    <input type="file" id="img_input" @change="condense">
    <span v-if="done">压缩完成！</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
        return {
            done: false
        };
    },
    methods: {
      condense () {
        var that = this;
        var file = document.querySelector('#img_input').files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          // 1，用FileReader读取file里的图片
          var img = new Image();
          var width = 640;  // image resize
          var quality = 0.8;  // image quality
          var canvas = document.createElement('canvas');
          var drawer = canvas.getContext('2d');
          img.src = this.result;  // 2，再把读完的图片拿去加载
          img.onload = function () {
            canvas.width = width;
            canvas.height = width * (img.height / img.width);
            drawer.drawImage(img, 0, 0, canvas.width, canvas.height);
            var tmp = new Image();
            tmp.src = canvas.toDataURL('image/jpeg', quality);  // 压缩完毕的图片
            that.done = true;
          };
        };
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
