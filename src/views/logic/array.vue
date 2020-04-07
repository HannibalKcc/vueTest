1·<template>
  <div class="array">
    <h2>数组的研究</h2>
    <h3>取数组中出现次数最多的元素（元素类型不定）</h3>
    <div class="demoBlock">
      <span>实验数组——</span>
      <input type="text" disabled style="width: 800px;" v-model="arr1">
      <button @click="run1">计算</button>
      <br>
      <div>reduce()统计结果——{{resultReduce}}</div>
      <div>出现最多的元素——{{maxObj1.key}}，次数：{{maxObj1.max}}</div>
      <br>
      <div>replace()统计结果——{{resultReplace}}</div>
      <div>出现最多的元素——{{maxObj2.key}}，次数：{{maxObj2.max}}</div>
    </div>

    <h3>描述：数组转成无逗号字符串</h3>
    <span>arr1.toString().replace(/,/g,'')——{{arr1.toString().replace(/,/g, '')}}</span>
    <h3>描述：String、Map、Set转化成为数组</h3>
    <span>Array.from()——{{}}</span>

    <h3>利用sort()函数排序</h3>
    <p>
      注意！若是sort()不含参数，则按照字符编码排序。如：1，100,25,50,6 <br>
      参数函数的返回值决定了排序方式，返回值小于、等于0不变，大于0则逆ab的顺序 <br>
      利用这个函数可以轻松对对象数组排序
    </p>
    <div class="demoBlock">
      {{sortArray}}
      <button @click="sort">排序</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
    },
    data () {
      return {
        arr1: ['a', 'b', 562, 'c', 'c', '93', 'aaa', 'b', 'b', 562, 'c', 'z', 'k', 'a', '39', 'c', 'vv', 'd', 'c', 'd'],
        resultReduce: {},
        resultReplace: {},
        maxObj1: {},
        maxObj2: {},
        str1: 'String转化数组',
        sortArray: [9, 60, 1, 3, 70, 3, 40, 0, -12]
      };
    },
    methods: {
      run1 () {
        this.reduce();
        this.replace();
        this.ariseMax();
      },
      reduce () {
        this.resultReduce = this.arr1.reduce((preVal, val, index) => {
          preVal[val]++ || (preVal[val] = 1);
          return preVal;
        }, {}); // reduce() 别忘了传递初始值
      },
      replace () {
        let tmp = {};
        this.arr1.toString().replace(/(\w+)/g, ($1) => {
          // 这里$1是正则表达式匹配到第一组的内容
          tmp[$1] ? tmp[$1]++ : tmp[$1] = 1;
        });
        this.resultReplace = tmp;
      },
      ariseMax () {
        // reduce
        let maxObj = {max: 0};
        for (let key in this.resultReduce) {
          if (this.resultReduce[key] > maxObj.max) {
            maxObj = {max: this.resultReduce[key], key};
          }
        }
        this.maxObj1 = maxObj;

        // replace
        maxObj = {max: 0};
        for (let key in this.resultReplace) {
          if (this.resultReplace[key] > maxObj.max) {
            maxObj = {max: this.resultReplace[key], key};
          }
        }
        this.maxObj2 = maxObj;
      },
      delRepeat (arr) {
        // 非set数组去重
        let res = [];
        arr.forEach((val, index) => {
          if (arr.indexOf(val) === index) {
            res.push(val);
          }
        });
        return res;
      },
      sort () {
        this.sortArray.sort((a, b) => a - b);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .array {
    text-align: left;
  }
</style>
