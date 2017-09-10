<template>
  <div class="array">
    <h3>描述：取数组中出现次数最多的元素（元素类型不定）</h3>
    <span>实验数组——</span>
    <input type="text" disabled style="width: 800px;" v-model="arr1">
    <button @click="run1">计算</button>
    <br>
    <div>reduce()统计结果——{{resultReduce}}</div>
    <div>出现最多的元素——{{maxObj1.key}}，次数：{{maxObj1.max}}</div>
    <br>
    <div>replace()统计结果——{{resultReplace}}</div>
    <div>出现最多的元素——{{maxObj2.key}}，次数：{{maxObj2.max}}</div>

    <hr>
    <h3>描述：数组转成无逗号字符串</h3>
    <span>arr1.toString().replace(/,/g,'')——{{arr1.toString().replace(/,/g, '')}}</span>
    <h3>描述：String、Map、Set转化成为数组</h3>
    <span>Array.from()——{{}}</span>
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
        str1: 'String转化数组'
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
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .array {
    text-align: left;
  }

  h3 {
    text-align: center;
  }
</style>
