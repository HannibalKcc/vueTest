<template>
  <div class="observer">
    <em>实现Observer以监听属性变动</em>
    <ol>
      <li>利用Obeject.defineProperty()来监听属性变动</li>
      <li>将需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter</li>
      <li>
        <button @click="change">修改数据对象的值</button>
      </li>
    </ol>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {};
    },
    methods: {
      change () {
        testData.a2.b2 = Math.round(Math.random() * 10);
      }
    }
  };
  function observe (data) {
    if (!data || typeof data !== 'object') {
      return;
    }
    // 取出所有属性遍历
    Object.keys(data).forEach(function (key) {
      define(data, key, data[key]);
    });
  };
  function define (data, key, val) {
    observe(val);
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: false,
      get () {
        return val;
      },
      set (newVal) {
        if (val === newVal) return;
        console.log('检测到值的变化：', val, '-->', newVal);
        val = newVal;
        // data[key] = newVal; // err
        // val === this[key] === data[key] 但是如果set内给data[key]、this[key]赋值会死循环触发set！！！
      }
    });
  }
  var testData = {a1: 1, a2: {b2: 12, b3: 13}, a3: 3};
  observe(testData);
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .observer {
    margin-top: 50px;
  }
</style>
