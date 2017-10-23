<template>
  <div class="transition">
    <h2>使用vue中的transition组件</h2>
    <button @click="show = !show">
      Toggle
    </button>
    <transition name="fade" :duration="{leave: 2500}">
      <p v-if="show">参数设置离开时间</p>
    </transition>
    <transition name="jump"
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
    >
      <p v-show="show" style="position: relative; top: 0; left: 0;">绑定钩子</p>
    </transition>
    <comVelocity></comVelocity>
  </div>
</template>

<script type="text/ecmascript-6">
  import comVelocity from './src/comVelocity.vue';
  export default {
    components: {
      comVelocity
    },
    data () {
      return {
        show: false
      };
    },
    updated () {
      console.log('updated');
    },
    methods: {
      beforeEnter (e) {
      },
      enter (e) {
        setTimeout(() => {
          e.style.top = '200px';
          e.style.background = 'pink';
        }, 0);
      },
      afterEnter (e) {
        console.log('afterEnter');
        e.style.top = 0;
        e.style.left = 0;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .fade-enter-active, .fade-leave-active {
    transition: all .5s
  }

  .fade-enter, .fade-leave-to {
    transform: translateX(100px);
    opacity: .3;
  }

  .jump-enter-active {
    transition: all 3s;
  }

  .jump-enter {
    /*opacity: 0;*/
  }
</style>
