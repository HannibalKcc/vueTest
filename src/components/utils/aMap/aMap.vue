<template>
  <div class="aMap">
    <h3>描述：高德地图应用</h3>
    <div id="container" tabindex="0"></div>
    <div class="setCenter" @click="setCenter">设置中心点</div>
  </div>
</template>

<script type="text/ecmascript-6">
  import AMap from 'AMap';
  export default {
    mounted () {
      this.initMap();
    },
    data () {
      return {
        theMap: null,
        theGeolocation: null
      };
    },
    methods: {
      initMap () {
        this.theMap = new AMap.Map('container', {
          resizeEnable: true,
          zoom: 17,
          center: new AMap.LngLat(113.3335910, 23.122494)
        }); // 生成地图实例并初始化
        this.initCloud();
        this.initLoc();
      },
      initCloud () {
        let that = this;
        AMap.plugin('AMap.CloudDataLayer', function () {
          let CloudData = new AMap.CloudDataLayer('59b9e4742376c11dabff9f76', {});  // 获取云图
          CloudData.setMap(that.theMap);  // 添加到地图上
          AMap.event.addListener(CloudData, 'click', function (result) {
            var clouddata = result.data;
            var infoWindow = new AMap.InfoWindow({
              content: '哈哈哈哈',    // 可以写String、HTMLElement
              offset: new AMap.Pixel(0, -34)
            });
            infoWindow.open(that.theMap, clouddata._location);  // 打开信息窗体
          });
        });
      },
      initLoc () {
        let that = this;
        if (window.location.origin.search(/https/i) === -1) {
          console.warn('Chrome与IOS10不支持非Https的精度请求');
        }
        this.theMap.plugin('AMap.Geolocation', function () {
          that.theGeolocation = new AMap.Geolocation({
            timeout: 10000, // 超过10秒后停止定位，默认：无穷大
            convert: true,  // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            panToLocation: true,  // 定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy: true  // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          });
          that.theMap.addControl(that.theGeolocation);
          that.theGeolocation.getCurrentPosition();
          // AMap.event.addListener(that.theGeolocation, 'complete', this.onLocComplete);  // 返回定位信息
          // AMap.event.addListener(that.theGeolocation, 'error', that.onLocError);  // 返回定位出错信息
        });
      },
      setCenter () {
        // TODO 设置中心点
      },
      onLocComplete () {
        // TODO 获取当前位置并保存起来
      },
      onLocError () {
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .aMap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  #container {
    width: 100%;
    height: 100%;
  }

  .setCenter {
    position: absolute;
    top: 20%;
    left: 50px;
    width: 100px;
    height: 100px;
    background-color: #a52863;
    line-height: 100px;
  }
</style>
