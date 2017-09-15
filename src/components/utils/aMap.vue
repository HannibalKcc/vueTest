<template>
  <div class="aMap">
    <h3>描述：高德地图应用</h3>
    <div id="container" tabindex="0"></div>
  </div>
</template>

<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.0&key=1698fdc3e94b89f0f10b87a6605a350f"></script>
<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.initMap();
    },
    methods: {
      initMap () {
        var map = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 17,
          center: new AMap.LngLat(113.3335910, 23.122494)
        });
        AMap.plugin('AMap.CloudDataLayer', function () {
          let CloudData = new AMap.CloudDataLayer('59b9e4742376c11dabff9f76', {});
          CloudData.setMap(map);
          AMap.event.addListener(CloudData, 'click', function (result) {
            var clouddata = result.data;
            var infoWindow = new AMap.InfoWindow({
              content: '哈哈哈哈',    // 可以写String、HTMLElement
              offset: new AMap.Pixel(0, -34)
            });
            infoWindow.open(map, clouddata._location);
          });
        });
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  #container {
    width: 100%;
    height: 100%;
  }
</style>
