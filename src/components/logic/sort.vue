<template>
  <div class="quicksort">
    <input type="text" v-model="arr" style="width: 20em;">
    <br>
    <button @click="shuffle">shuffle</button>
    <button @click="getQuicksort">quicksort</button>
    <hr>
    <select v-model="seleMin">
      <option v-for="val in min" :value="val">{{val}}</option>
    </select>
    <select v-model="seleMax">
      <option v-for="val in max" :value="val">{{val}}</option>
    </select>
    <input type="text" placeholder="count" v-model="count" style="width: 3em;">
    <button @click="getVS">bucketsort VS quicksort</button>
    <div class="res">
      <span>quickTime:{{quickTime}}ms</span>
      <br>
      <span>bucketTime:{{bucketTime}}ms</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import _ from 'lodash';
  import { Toast } from 'mint-ui';
  export default {
    data () {
      return {
        arr: [10, 4, 12, 23, 43, 43, 54, 66, 9, 22, 6, 1, 6, 23, 99, 23],
        min: [0, 100, 500, 1000],
        max: [100, 1000, 10000],
        seleMin: 0,
        seleMax: 100,
        count: '',
        quickTime: 0,
        bucketTime: 0
      };
    },
    methods: {
      shuffle () {
        this.arr = _.shuffle(this.arr);
        Toast({message: 'shuffled!'});
      },
      getQuicksort () {
        let sorted = this.quicksort(this.arr);
        this.arr = sorted;
        Toast({message: `quickosrted!\n${this.arr} ==> ${sorted}`});
      },
      getVS () {
        let arr = [];
        for (let i = 0; i < this.count; i++) {
          arr.push(Math.round(Math.random() * this.seleMax + this.seleMin));
        }
        let [a1, a2] = [[], []];
        let t1 = new Date();
        a1 = this.quicksort(arr);
        let t2 = new Date();
        a2 = this.bucketsort(arr);
        let t3 = new Date();
        this.quickTime = t2 - t1;
        this.bucketTime = t3 - t2;
        console.log('计算相等？', a1.toString() === a2.toString());
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
        return this.quicksort(left).concat(tmp, this.quicksort(right));
      },
      bucketsort (arr) {
        let bucket = new Array(this.seleMax - this.seleMin + 1);
        bucket.fill(0);
        let newArr = [];
        arr.forEach((val) => {
          bucket[val]++;
        });
        bucket.forEach((val, index) => {
          for (let i = 0; i < val; i++) {  // eslint-disable-line
            newArr.push(index);
          }
        });
        return newArr;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
</style>
