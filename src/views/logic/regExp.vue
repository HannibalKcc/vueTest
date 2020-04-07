<template>
  <div class="regExp">
    <h3>描述：正则表达式的各种验证</h3>
    <div class="bracket">
      <span>验证括号封闭正确——</span>
      <input type="text" v-model="bracket.txt">
      <span>{{bracketF()}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        bracket: {
          txt: '(123){}',
          res: false
        }
      };
    },
    methods: {
      bracketF () {
        let tmp = this.bracket.txt.replace(/[^()\[\]{}]/g, '').split(''); // eslint-disable-line
        let stack = [];
        for (let key of tmp) {
          if ((key === ')' && stack[stack.length - 1] === '(') ||
            (key === ']' && stack[stack.length - 1] === '[') ||
            (key === '}' && stack[stack.length - 1] === '{') ||
            (key === '{' && stack[stack.length - 1] === '}')) {
            stack.pop();
          } else {
            stack.push(key);
          }
        }
        return stack.length === 0 ? '匹配' : '不匹配';
      }
    }
  }
  ;
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
