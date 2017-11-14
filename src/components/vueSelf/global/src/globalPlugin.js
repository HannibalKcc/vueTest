// 对象必须提供install，而函数会被当成install方法。在main.js中Vue.use()调用
exports.install = (Vue, option) => {
  // 全局函数
  Vue.prototype.globalFun1 = () => {
    alert('hello world');
  };
  Vue.prototype.log = (val) => {
    console.log(val);
  };
  // 全局变量
  Vue.prototype.a = 996;
};
