<template>
  <div class="regExp">
    <h3>描述：正则表达式的各种验证</h3>
    <div class="bracket">
      <input type="text" v-model="bracket.txt">
      <button @click="bracketF">括号匹配</button>
      <span>{{bracket.res}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        bracket: {
          txt: '(){}{{}}',
          res: false
        }
      };
    },
    methods: {
      bracketF () {
        console.log(/[(){}]*/g.exec(this.bracket.txt));
        let stack = /[(){}]*/g.exec(this.bracket.txt).split('');
        let tmp = stack;
        let flag = 1;
        tmp.forEach((val, index) => {
          if (val === ')' && stack[stack.length - 1] === '(' ||
            val === ']' && stack[stack.length - 1] === '[' ||
            val === '}' && stack[stack.length - 1] === '{' ||
            val === '{' && stack[stack.length - 1] === '}') {
            stack.pop();
          } else {
            flag = 0;
          }
        });
        if (stack.length === 0 && flag === 1) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
