<template>
  <div class="objectStudy">
    <h2>对象</h2>
    <h3>对象的深浅拷贝</h3>
    <p>
      浅拷贝与深拷贝都创建了新的对象，但是若原始值内还有对象，则会产生关联改变。深拷贝则无论如何也不会发生关联改变。
    </p>
    <ul class="showList">
      <li>obj1:{{obj1}} <span class="keyWords">原始值</span></li>
      <li>obj2:{{obj2}} <span class="keyWords">等号赋值</span></li>
      <li>obj3:{{obj3}} <span class="keyWords">Object.assign({}, this.obj1)</span></li>
      <li>obj4:{{obj4}} <span class="keyWords">{...this.obj1}</span></li>
      <li>obj5:{{obj5}} <span class="keyWords">JSON.parse(JSON.stringify(this.obj1))</span></li>
      <li>
        <pre>
          更进一步的深度拷贝（针对函数）
          function copy (aObject) {
            var bObject, v, k;
            bObject = Array.isArray(aObject) ? [] : {};
            for (k in aObject) { // 无法遍历出不可枚举属性
            v = aObject[k];
            bObject[k] = (typeof v === 'object') ? copy(v) : v;
            }
            return bObject;
          }
          </pre>
      </li>
    </ul>
    <br>
    <button @click="change">改变obj1的属性值</button>

    <h3>对象的内容比较方法</h3>
    <span>JSON.stringify(NaN) === JSON.stringify(NaN)</span>

    <h3>对象与[]</h3>
    <span>{{obj6}}</span>

    <h3>描述：对象的深度合并</h3>
    <span>{{objMixin(mixinA, mixinB)}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    mounted () {
      this.objCopy();
      this.objBracket();
    },
    data () {
      return {
        obj1: {a: {b: 1}, c: [1, 9, 8, 4], d: 'old'},
        obj2: '',
        obj3: '',
        obj4: '',
        obj5: '',
        obj6: {},
        mixinA: {
          a1: 1,
          a2: 2,
          a3: {
            b1: 13,
            b2: 14,
            b3: 15
          },
          a4: 4
        },
        mixinB: {
          a3: {
            b4: 14,
            b9: 19
          },
          a5: 5
        },
        minxinRes: {}
      };
    },
    methods: {
      change () {
        this.obj1.a.b = 'newVal';
        this.obj1.c[3] = 999;
        this.obj1.d = 'new';
      },
      objCopy () {
        this.obj2 = this.obj1;
        this.obj3 = Object.assign({}, this.obj1);
        this.obj4 = {...this.obj1};
        this.obj5 = JSON.parse(JSON.stringify(this.obj1));
      },
      objBracket () {
        this.obj6['txt'] = '胡汉三'; // 可以直接使用字符串
        let old = 'old';  // eslint-disable-line
        this.obj6.old = 88;
        // this.obj6.'error' 报错！点后面不能加字符串
      },
      objMixin (source) {
        if (arguments.length === 1 || arguments[2] === []) return source;  // 退出循环
        let s = JSON.parse(JSON.stringify(source));
        let arg = [];
        for (let i = 0; i < arguments.length; i++) {
          arg[i] = arguments[i];
        }
        let tar = arg[1];
        for (let key in tar) {
          if (typeof s[key] === 'object' && typeof tar[key] === 'object') {
            s[key] = this.objMixin(s[key], tar[key]);
          } else if (!s[key]) {
            s[key] = tar[key];
          } else {
            // TODO 是否遗漏了什么？
          }
        }
        if (arg.slice(2).length === 0) {
          return s;
        } else {
          arg.splice(1, 2, s);  // 检测到多余2个参数后，剔除已合并参数，刷新source
          return this.objMixin.apply(this.objMixin, arg); // apply改变传参方式
        }
      }
    }
  };
</script>

<style scoped rel="stylesheet/less" type="text/less" lang="less">
  .showList {
    li {
      width: 800px;
      margin: auto;
      text-align: left;
      .keyWords {
        background-color: #dddddd;
      }
    }
  }
</style>
