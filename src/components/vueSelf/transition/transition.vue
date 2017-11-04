<template>
  <div class="transition">
    <h2>使用vue中的transition组件</h2>
    <h3></h3>
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

    <h3>制作折叠面板</h3>
    <p>
      transition属性与auto搭配会失效。变相的解决方法为类似max-height的属性，
      但是在关闭时会有延迟，原因是关闭动画会从max-height的值开始算。<br>
      <br>
      曲线救国：使用js控制
    </p>
    <div class="demoBlock foldTest">
      <button @click="foldShow = !foldShow">折叠开关</button>
      <transition name="fold">
        <p v-if="foldShow" class="fold">
          社会主义好啊！<br>
          社会主义好啊！社会主义好啊！<br>
          社会主义好啊！社会主义好啊！社会主义好啊！<br>
        </p>
      </transition>
    </div>
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
        show: false,
        foldShow: false
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

  .fold-enter-active, .fold-leave-active {
    transition: all 2s linear;
  }

  .fold-enter, .fold-leave-to {
    max-height: 0 !important;
    color: #42b983;
    /*transform: translateX(100px);*/
  }

  .demoBlock.foldTest {
    overflow: hidden;
    p {
      max-height: 200px;
      margin-top: 0;
    }
  }
</style>
