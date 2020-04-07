<template>
  <div class="directives">
    <h2>vue自定义指令</h2>
    <h3>用directives（有全局版本）来注册一个自定义的vue指令</h3>
    <div class="demoBlock">
      <div v-myShow="isShow">自定义的show指令</div>
      <button @click="isShow = !isShow">按我切换</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    directives: {
      myShow: {
        update (el, binding) {
          if (binding.value === true) {
            el.style.display = 'block';
          } else if (binding.value === false) {
            el.style.display = 'none';
          }
        }
      }
    },
    data () {
      return {
        isShow: false
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
