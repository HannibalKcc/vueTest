<template>
  <div class="observer">
    <em>实现Observer以监听属性变动</em>
    <ol>
      <li>利用Obeject.defineProperty()来监听属性变动</li>
      <li>将需要observe的数据对象进行递归遍历，包括子属性对象的属性，都加上 setter和getter</li>
    </ol>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {};
    }
  };
  function observe (data) {
    if (!data || typeof data !== 'object') {
      return;
    }
    // 取出所有属性遍历
    Object.keys(data).forEach(function (key) {
      console.log(key);
    });
  };
  let testData = {a1: 1, a2: {b2: 12, b3: 13}, a3: 3};
  observe(testData);
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .observer {
    margin-top: 50px;
  }
</style>
