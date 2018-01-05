<template>
  <div class="veeValidate">
    <h2>vee-validate插件</h2>
    <p>表单验证的插件，可自定义检查规则。错误提示可国际化。</p>
    <div class="base">
      <div class="eg1">
        <h3>多种规则</h3>
        <input v-validate="'required|email'" name="email" type="text" placeholder="邮箱、必填">
        <span v-show="errors.has('email')">{{errors.first('email')}}</span>
      </div>
      <div class="eg2">
        <h3>对于自定义组件同样适用。</h3>
        <my-com v-model="testEg2" v-validate="'required'" name="eg2"></my-com>
        <span class="err" v-show="errors.has('eg2')">{{errors.first('eg2')}}</span>
      </div>
      <div class="eg3">
        <h3>自定义规则：11位手机号</h3>
        <my-com v-model="testEg3" v-validate="'required|mobile'" name="eg3"></my-com>
        <span class="err" v-show="errors.has('eg3')">{{errors.first('eg3')}}</span>
      </div>
      <div class="eg4">
        <h3>对初始值验证(默认是没有的)</h3>
        <input type="text" placeholder="非数字、必填" v-model="testEg4"
               v-validate.initial="'required|alpha'" name="eg4">
        <span class="err" v-show="errors.has('eg4')">{{errors.first('eg4')}}</span>
      </div>
      <div class="eg5">
        <h3>手动验证所有表单</h3>
        <button @click="check">验证所有表单</button>
      </div>
      <div class="eg6">
        <h3>验证指定表单</h3>
        <p>关键在于data-vv-scope声明名字。在已声明form中的input已经归属到该表单下，查找方式也有所不同了。</p>
        <form @submit.prevent="checkScope('form-1')" data-vv-scope="form-1">
          <input type="password" placeholder="3-6位密码"
                 v-validate="'required|min:3|max:6'" name="eg6">
          <!--注意这里的errors查找例子-->
          <span class="err" v-show="errors.has('form-1.eg6')">{{errors.first('form-1.eg6')}}</span>
          <button type="submit">提交</button>
        </form>
      </div>

      <h3>切换提示语言</h3>
      <div class="demoBlock">
        <my-com v-model="testEg3" v-validate="'required|mobile'" name="eg7"></my-com>
        <span class="err" v-show="errors.has('eg7')">{{errors.first('eg7')}}</span>
        <button @click="changeLanguage">切换语言</button>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import myCom from './src/myCom.vue';
  import img1 from '../../../assets/img/logo.png';
  export default {
    components: {myCom},
    data () {
      return {
        testEg2: '删了我试试', // 初始化eg
        testEg3: '15113324499',
        testEg4: '996',
        imglist: [img1]
      };
    },
    methods: {
      check () {
        // 验证所有表单
        this.$validator.validateAll().then((result) => {
          if (result) { // result = true | false
            return;
          }
        });
      },
      checkScope (scope) {
        // 验证指定表单
        this.$validator.validateAll(scope).then((result) => {
          if (result) {
            return;
          }
        });
      },
      changeLanguage () {
        this.locale = this.$validator.locale === 'en' ? 'zh_CN' : 'en';
        this.$validator.localize(this.locale);
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .veeValidate {
    padding: 0 80px;
    text-align: left;
  }

  .err {
    color: brown;
  }
</style>
