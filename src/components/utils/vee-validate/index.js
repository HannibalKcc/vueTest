import Vue from 'vue';
import VeeValidate, {Validator} from 'vee-validate';

Vue.use(VeeValidate);

// 自定义规则并设置错误信息
Validator.extend('mobile', {
  messages: {
    en: field => field + '必须是11位手机号码' // en语言的错误信息
  },
  validate: value => {
    return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value);
  }
});
