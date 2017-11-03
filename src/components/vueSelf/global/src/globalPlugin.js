// 对象必须提供install，而函数会被当成install方法。在main.js中Vue.use()调用
exports.install = (Vue, option) => {
  Vue.prototype.globalFun1 = () => {
    alert('hello world');
  };
  Vue.prototype.log = (val) => {
    console.log(val);
  };
};
