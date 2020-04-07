<template>
  <div class="queens8">
    <h2>八皇后问题</h2>
    <p>
      递归问题的思考，传递的必要参数是什么？递归之间通过return还是共有变量沟通？
    </p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      console.log(this.foo());
    },
    data () {
      return {
        count: 0
      };
    },
    methods: {
      foo (list = []) {
        if (list.length >= 8) return this.count++;

        var enableList = [0, 1, 2, 3, 4, 5, 6, 7];
        for (var i = 0; i < list.length; i++) {
          var index;
          index = enableList.indexOf(list[i]);
          if (index !== -1) enableList.splice(index, 1);
          index = enableList.indexOf(list[i] + (list.length - i));
          if (index !== -1) enableList.splice(index, 1);
          index = enableList.indexOf(list[i] - (list.length - i));
          if (index !== -1) enableList.splice(index, 1);
        }
        for (var j = 0; j < enableList.length; j++) {
          var tmp = JSON.parse(JSON.stringify(list));
          tmp.push(enableList[j]);
          this.foo(tmp);
        }
        return this.count;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
