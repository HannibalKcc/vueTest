<template>
  <div class="comVelocity">
    <input type="text" placeholder="输入X坐标" v-model="posX">
    <input type="text" placeholder="输入Y坐标" v-model="posY">
    <button class="btn" @click="go" ref="btn">start para</button>
    <transition name="para"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
    >
      <div v-show="show" class="ball"></div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import Velocity from 'velocity-animate';
  export default {
    data () {
      return {
        posX: '',
        posY: '',
        show: false
      };
    },
    methods: {
      go () {
        this.$refs.btn.disabled = true;
        this.show = !this.show;
      },
      beforeEnter (el) {
        el.style.top = `${this.posX}px`;
        el.style.left = `${this.posY}px`;
      },
      enter (el, done) {
        Velocity(el, {
          top: '500px', // 不可以直接写0
          left: ['500px', [0.09, -0.43, 0.91, 0.38]],
          opacity: 0.5, // 不能赋string
          rotateZ: '100deg',
          scale: 1.5
        }, {
          duration: 2000,
          easing: 'linear',
          complete: done
        });
      },
      afterEnter (el) {
        this.show = !this.show;
        el.style.top = 0;
        el.style.left = 0;
        this.$refs.btn.disabled = false;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .comVelocity {
    position: relative;
    input {
      width: 5em;
    }
    .ball {
      position: absolute;
      top: 0;
      left: 0;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgb(160, 220, 0);
    }
  }

</style>
