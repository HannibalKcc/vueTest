<template>
  <div class="lazyImg">
    <h2>图片懒加载</h2>
    <h3>利用getBoundingClientRect()判断dom当前的位置，并判断加载</h3>
    <div class="demoBlock">
      <ul class="img-list">
        <li class="img-item" v-for="(item, index) in 100" :key="index">
          <img alt="loading" class="lazyImg"
               :data-src="imgList[index%4]">
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import img1 from '../../assets/img/timg.png';
  import img2 from '../../assets/img/timg2.png';
  import img3 from '../../assets/img/timg3.png';
  import img4 from '../../assets/img/timg4.png';

  export default {
    mounted () {
      this.initScrollEvent();
    },
    data () {
      return {
        imgList: [img1, img2, img3, img4]
      };
    },
    methods: {
      initScrollEvent () {
        this.checkImgs(); // 初始化一次
        document.onscroll = () => {
          setTimeout(() => {
            this.checkImgs(); // 随事件绑定
          }, 500);
        };
      },
      checkImgs () {
        const imgs = document.querySelectorAll('.lazyImg');
        Array.from(imgs).forEach(el => {
          if (this.isInSight(el)) {
            this.loadImg(el);
          }
        });
      },
      isInSight (el) {
        const bound = el.getBoundingClientRect();
        const clientHeight = window.innerHeight;
        // 如果只考虑向下滚动加载
        // const clientWidth = window.innerWeight;
        return bound.top <= clientHeight + 100;
      },
      loadImg (el) {
        if (!el.src) {
          const source = el.dataset.src;
          el.src = source;
        }
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .demoBlock {
    width: 200px;
  }

  .lazyImg {
    width: 100px;
    height: 100px;
  }
</style>
