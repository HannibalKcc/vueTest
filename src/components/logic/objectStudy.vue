<template>
  <div class="objectStudy">
    <h3>描述：对象的深浅拷贝研究</h3>
    <ul class="showList">
      <li>obj1:{{obj1}} <span class="keyWords"></span></li>
      <li>obj2:{{obj2}} <span class="keyWords">Object.assign({}, this.obj1)</span></li>
      <li>obj3:{{obj3}} <span class="keyWords">{...this.obj1}</span></li>
      <li>obj4:{{obj4}} <span class="keyWords">JSON.parse(JSON.stringify(this.obj1))</span></li>
    </ul>
    <br>
    <button @click="obj1.a.b = 'newVal'">改变obj1的属性值</button>
    <hr>
    <h3>描述：对象的内容比较</h3>
    <span>JSON.stringify(NaN) === JSON.stringify(NaN)</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.obj2 = Object.assign({}, this.obj1);
      this.obj3 = {...this.obj1};
      this.obj4 = JSON.parse(JSON.stringify(this.obj1));
    },
    data () {
      return {
        obj1: {a: {b: 1}},
        obj2: '',
        obj3: '',
        obj4: ''
      };
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .showList {
    li {
      width: 500px;
      margin: auto;
      text-align: left;
      .keyWords {
        background-color: #dddddd;
      }
    }
  }
</style>
