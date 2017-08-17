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
          if (index === 5) return;  // return只跳出当前迭代，并非全部迭代
          console.log(val, index);
        });
      },
      nativeForOf () {
        console.log('---forOf遍历数组---');
        { // 添加的块级作用域
          let index = 0;
          for (let val of this.arr1) { // forOf对于数组无法简单地获取index
            if (val === 346) {
              break;
            } else if (val === 10) {
              return;
            }
            console.log(val, index);
            index++;
          }
        }
        console.log('---forOf遍历普通对象---');
        for (var key of Object.keys(this.object1)) {  // 遍历非set、map对象需要使用Object.keys()方法
          console.log(key + ': ' + this.object1[key]);
        }
      },
      nativeForIn () {
        /**
         * forIn数组的话，可能是随机遍历、会遍历出数组的自定义属性
         * 用于遍历对象是理想的选择，这也是它的本职工作
         */
        console.log('---forIn遍历对象---');
        for (let key in this.object1) {
          console.log(key, this.object1[key]);  // 这里无法直接使用this.object1.key
        }
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
