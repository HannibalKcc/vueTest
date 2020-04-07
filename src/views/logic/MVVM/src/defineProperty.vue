<template>
  <div class="defineProperty">
    <em>Object.defineProperty():</em>
    <ol>
      <li>
        <a target="_blank"
           href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">api文档</a>
      </li>
      <li>在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回这个对象。</li>
      <li>语法： Object.defineProperty(obj, prop, descriptor)</li>
      <li>
        Object.defineProperty()添加的属性默认不可更改
        <button @click="add">新增属性</button>
        <button @click="change">修改属性</button>
        <button @click="del">删除属性</button>
        <span>{{obj}}</span>
      </li>
    </ol>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        obj: {
          name: '大毛'
        }
      };
    },
    methods: {
      add () {
        Object.defineProperty(this.obj, 'age', {enumerable: false, value: 18});
        Object.defineProperty(this.obj, 'color', {enumerable: true, value: '黄色'}); // 注意枚举与否在组件上与console中的差别
        this.$set(this.obj, 'sex', '公'); // 官方文档所使用
        console.log('obj:', this.obj);
      },
      change () {
        this.obj.name = '老黑';
        this.obj.age = 20;
      },
      del () {
        delete this.obj.name;
        delete this.obj.age;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .defineProperty {
    margin-top: 50px;
  }
</style>
