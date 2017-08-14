<template>
  <div class="quicksort">
    <input type="text" v-model="arr">
    <br>
    <button @click="getQuicksort(arr)">quicksort</button>
    <button @click="getQuicksort(arr)">quicksort</button>
    <button @click="getBucketsort(arr)">bucketsort</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        arr: [10, 4, 12, 23, 43, 43, 54, 66, 9, 22, 6, 1, 6, 23, 99, 23]
      };
    },
    methods: {
      getQuicksort (arr) {
        this.arr = this.quicksort(arr);
        alert('quickosrted!');
      },
      quicksort (arr) {
        if (arr.length === 0) return [];
        let tmp = arr[Math.floor(arr.length / 2)];
        let [left, right] = [[], []];
        arr.forEach((val, index) => {
          if (index === Math.floor(arr.length / 2)) return;
          if (val < tmp) {
            left.push(val);
          } else {
            right.push(val);
          }
        });
        console.log(arr);
        console.log('tmp', tmp);
        console.log(left);
        console.log(right);
        console.log(left.concat(tmp).concat(right));
        console.log(this.quicksort(left));
        return this.quicksort(left).concat(tmp, this.quicksort(right));
      }
    }
  }
  ;
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  input {
    width: 20em;
  }
</style>
