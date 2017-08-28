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
    <h3>描述：对象的内容比较方法</h3>
    <span>JSON.stringify(NaN) === JSON.stringify(NaN)</span>
    <hr>
    <h3>描述：对象与[]</h3>
    <span>{{obj5}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.objCopy();
      this.objBracket();
    },
    data () {
      return {
        obj1: {a: {b: 1}},
        obj2: '',
        obj3: '',
        obj4: '',
        obj5: {}
      };
    },
    methods: {
      objCopy () {
        this.obj2 = Object.assign({}, this.obj1);
        this.obj3 = {...this.obj1};
        this.obj4 = JSON.parse(JSON.stringify(this.obj1));
      },
      objBracket () {
        this.obj5['txt'] = '胡汉三'; // 可以直接使用字符串
        let old = 'old';  // eslint-disable-line
        this.obj5.old = 88;
        // this.obj5.'error' 报错！点后面不能加字符串
      }
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
