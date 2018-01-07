<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
  import './iconfont.js';
  import '../../../../assets/img/svg/animals.svg';

  export default {
    name: 'icon-svg',
    props: {
      iconClass: {
        type: String,
        required: true
      }
    },
    computed: {
      iconName () {
        return `#icon-${this.iconClass}`;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
