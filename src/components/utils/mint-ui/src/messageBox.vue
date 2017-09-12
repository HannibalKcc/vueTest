<template>
  <div class="messageBox">
    <p class="txtIndent">
      描述：在参数message中，是可以内部html标签的。但是vue的任何指令都无效了
    </p>
    <button @click="msgBox">打开提示框</button>
    <button @click="alertBox">打开alert提示框</button>
    <!--<button @click="confirmBox">打开confirm提示框</button>-->
    <!--<button @click="promptBox">打开prompt提示框</button>-->
  </div>
</template>

<script type="text/ecmascript-6">
  import {MessageBox} from 'mint-ui';
  export default {
    methods: {
      data () {
        return {
          txt: 'foo'
        };
      },
      msgBox () {
        MessageBox({
          title: '提示',
          message: '<div>div1</div><div>div2</div>',
          showCancelButton: true
        });
      },
      alertBox () {
        MessageBox.alert('<div @click="logSomthing">@click无效</div><input type="text" value="你好">', 'alert');
      },
      confirmBox () {
      },
      promptBox () {
      },
      logSomthing () {
        console.log('点击成功！');
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .txtIndent {
    text-indent: 2em;
  }
</style>
