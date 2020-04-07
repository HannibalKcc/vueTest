<template>
  <div class="touchPenetration">
    <h3>描述：在移动端弹窗采用touchstart关闭后会触发底层的click时间。</h3>
    <h3>解决1：采用动画延迟300毫秒退出即可解决。</h3>
    <h3>解决2：使用pointer-events属性也是一个解决方法，详情见代码注释。</h3>
    <div class="backLayer">
      底层内容
    </div>
    <div class="popupLayer">
      <button class="btn1">click关闭</button>
      <button class="btn2">touchstart关闭</button>
    </div>
    <hr>
    <h3>描述：JQ中$.get(index)返回的是DOM对象，$.eq(index)返回的是JQ对象</h3>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from 'jquery';
  export default {
    mounted () {
      $('.backLayer').on('click', () => {
        alert('底层被点击了');
      });
      $('.btn1').on('click', () => {
        $('.popupLayer').hide();
        // 使用pointer-events属性也是一个解决方法
//        $('.backLayer').css('pointer-events', 'none');
//
//        setTimeout(function () {
//          $('.backLayer').css('pointer-events', 'auto');
//        }, 400);
      });
      $('.btn2').on('touchstart', () => {
        $('.popupLayer').hide();
      });
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .WH100 {
    width: 100%;
    height: 100%;
  }

  .touchPenetration {
    position: relative;
    .WH100();
    height: 1800px;
    font-size: 50px;
  }

  .backLayer {
    .WH100();
  }

  .popupLayer {
    position: absolute;
    top: 0;
    left: 0;
    .WH100();
    background-color: rgba(0, 0, 0, .5);
    .btn1 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 50px;
    }
    .btn2 {
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 50px;
    }
  }
</style>
