import Vue from 'vue';
import VeeValidate, {Validator} from 'vee-validate';
// 官网： http://vee-validate.logaretm.com/rules.html#custom-rules

// 自定义规则并设置错误信息
Validator.extend('mobile', {
  getMessage (field, params, data) {
    return `${field} isn't a corret mobile`;
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
  }
});

// 添加多语言的错误信息
const dictionary = {
  zh_CN: {
    messages: {
      mobile: (field) => `${field} 不是一个有效的手机格式`,
      required: (field) => `${field} 必填`
    }
  }
};

Validator.localize(dictionary); // 载入字典 或者下文
// Vue.use(VeeValidate, {locale: 'en', dictionary}); // 初始化时载入字典

Vue.use(VeeValidate); // 启动
