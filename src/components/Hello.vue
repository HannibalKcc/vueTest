<template>
  <div class="hello">
    <div v-for="(index,key) in arr1" v-show="flag">
      {{index}}{{key}}
    </div>
    <button @click="fun">btn</button>
    <array></array>
    <input type="text" :to="txt">
  </div>
</template>

<script>
  import array from './logic/array.vue';
  export default {
    components: {array},
    data () {
      return {
        arr1: ['a', 'b'],
        flag: false,
        txt: '测试文本'
      };
    },
    methods: {
       fun () {
         this.flag = !this.flag;
       }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
