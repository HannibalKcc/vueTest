<template>
  <div class="notification">
    <h2>H5新增的桌面通知notification功能</h2>
    <h3></h3>
    <p>
      notification是脱离浏览器的，即使用户不在当前标签、最小化了浏览器也能有效 <br>
      移动端全挂，PC端需要考虑兼容问题
    </p>
    <div class="demoBlock">
      <button @click="showNotify">启用</button>
      <div>点击notify窗体改变计数：{{count}}</div>
      <button @click="n.close()">手动关闭</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.getPermission();
    },
    data () {
      return {
        n: null, // notify实例
        count: 0
      };
    },
    methods: {
      getPermission () {
        if (Notification.permission === 'granted') {
          // 用户允许通知
          this.$notify.success('您已同意notify请求');
        } else if (Notification.permission === 'denied') {
          // 用户拒绝通知
          this.$notify.warning('您已拒绝notify请求');
        } else if (Notification.permission === 'default') {
          // 用户没选，可以请求
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              this.$notify.success('您已同意notify请求');
            } else if (permission === 'denied') {
              this.$notify.warning('您已拒绝notify请求');
            }
          });
        }
      },
      showNotify () {
        this.n = new Notification('发现新大陆', {
          body: '哈哈哈哈哈 可有意思了',
          tag: 'notify0', // 相同的tag只会存在一个
          icon: 'http://localhost:9090/static/img/logo.png',
          requireInteraction: true // 保持不关闭，默认false
        });
        this.n.onclick = () => this.count++;
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">

</style>
