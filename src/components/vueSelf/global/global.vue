<template>
  <div class="global">
    <h2>在vue中设置全局云云</h2>

    <h3>全局变量、函数</h3>
    <p>
      Vue.use符合规则的js文件就可以使用了 <br>
      在Vue.prototype上添加
    </p>
    <div class="demoBlock">
      <button @click="globalFun1">点我调用全局方法</button>
      <div>全局变量{{globalA}}</div>
    </div>

    <h3>全局组件</h3>
    <p>在main.js中调用Vue.component()注册</p>
    <div class="demoBlock">
      <global-component></global-component>
    </div>

    <h3>js函数挂载组件</h3>

    <div class="demoBlock">
      <button @click="selfWindowOpen">selfWindowOpen</button>
      <div id="wrap">
        被挂载到此处，整个标签都被替换掉了
      </div>
      <div id="wrap2">
        让我们试试另一种挂载方法
      </div>
      <div id="wrap3">
        先渲染，然后挂载
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    methods: {
      openElementMsg () {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: () => {
            alert('已选确定');
          }
        });
      },
      selfWindowOpen () {
        // 创建构造器，必须通过new实例化 不存在$extend
        var Profile = Vue.extend({
          template: `<div class="selfWindow">
                        <h6>通过Vue.extend创建子类，并且使用mount()挂载到指定标签内</h6>
                        <p>data数据展示{{firstName}} {{lastName}} aka {{alias}}</p>
                      </div>`,
          created () {
            console.log('我被渲染啦！');
          },
          data () {
            return {
              firstName: 'Walter',
              lastName: 'White',
              alias: 'Heisenberg'
            };
          }
        });
        // 创建 Profile 实例，并挂载到一个元素上（替换挂载元素，而非成为子组件）
        new Profile().$mount('#wrap');
        new Profile({el: '#wrap2'});  // eslint-disable-line
        // 或者，在文档之外渲染并且随后挂载
        var component = new Profile().$mount();
        setTimeout(() => {
          document.getElementById('wrap3').appendChild(component.$el);  // 但是会成为子组件而非替换挂载元素
        }, 3e3);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
