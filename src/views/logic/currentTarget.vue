<template>
  <div class="currentTarget">
    <h3>描述：在事件委托时，target代表的是真正触发者，而currentTarget则是被委托者。</h3>
    <h3>描述：在需要对一个父组件内的大量标签绑定事件时，通过事件委托能提高性能。</h3>
    <em>点击以下li标签查看target与currentTarget的区别。</em>
    <ul class="wrap">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
    </ul>
    <div>target--{{target.nodeName}} {{target.innerText}}</div>
    <div>currentTarget--{{currentTarget.nodeName}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      document.querySelector('.wrap').addEventListener('click', (e) => {
        this.target = e.target;
        this.currentTarget = e.currentTarget;
      });
    },
    data () {
      return {
        target: '',
        currentTarget: ''
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
.wrap {
  li{
    width: 500px;
    margin: auto;
  }
}
</style>
