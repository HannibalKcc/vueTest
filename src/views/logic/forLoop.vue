<template>
  <div class="foorLoop">
    <button @click="go">运行循环</button>
    <span>forEach无法break,return无法跳出全部迭代</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        arr1: [92, 56, 12, 346, 93, 3, 10, 4],
        object1: {
          a: 1,
          b: 2,
          c: 3
        }
      };
    },
    methods: {
      go () {
        this.nativeForEach();
        this.nativeForOf();
        this.nativeForIn();
      },
      nativeForEach () {
        console.log('---forEach遍历数组---');
        this.arr1.forEach((val, index) => {
          // break; 无法允许的语法
          if (index === 5) return; // return只跳出当前迭代，并非全部迭代
          console.log(val, index);
        });
      },
      nativeForOf () {
        console.log('---for of遍历数组---');
        /**
         * 实际上for of调用的是数据结构的Iterator接口（[]，string，Map， Set，参数args，DOM Nodelist已经自带），
         * 设置一个对象 [Symbol.iterator]() { ... }
         * 具体见 http://es6.ruanyifeng.com/#docs/iterator#字符串的-Iterator-接口
         * */
        for (let keyVal of this.arr1.entries()) { // forOf对于数组无法简单地获取index
          if (keyVal === 346) {
            break;
          } else if (keyVal === 10) {
            return;
          }
          console.log(keyVal);
        }
        console.log('---for of遍历普通对象---');
        for (var key of Object.keys(this.object1)) { // 遍历与数组不相似的对象需要使用Object的entries()、keys()、values()
          console.log(key + ': ' + this.object1[key]);
        }
      },
      nativeForIn () {
        /**
         * forIn数组的话，可能是随机遍历、会遍历出数组的自定义属性
         * 用于遍历对象是理想的选择，这也是它的本职工作
         */
        console.log('---for in遍历对象---');
        for (let key in this.object1) {
          console.log(key, this.object1[key]); // 这里无法直接使用this.object1.key
        }
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
