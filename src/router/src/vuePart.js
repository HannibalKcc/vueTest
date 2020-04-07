// vue部分
import Transition from '../../views/vueSelf/transition/transition.vue';
import PropSlot from '../../views/vueSelf/slot/slot.vue';
import Tree from '../../views/vueSelf/tree/tree.vue';
import Vuex from '../../views/vueSelf/vuex/vuex.vue';
import Resource from '../../views/vueSelf/resource.vue';
import VueRouter from '../../views/vueSelf/vue-router/vue-router.vue';
import SecondRouterA from '../../views/vueSelf/vue-router/src/a.vue';
import SecondRouterB from '../../views/vueSelf/vue-router/src/b.vue';
import SecondRouterC from '../../views/vueSelf/vue-router/src/c.vue';
import Key from '../../views/vueSelf/key.vue';
import VModel from '../../views/vueSelf/v-model/v-model.vue';
import Sync from '../../views/vueSelf/sync/sync.vue';
import Global from '../../views/vueSelf/global/global.vue';
import KeepAlive from '../../views/vueSelf/keep-alive/keep-alive.vue';
import VueFile from '../../views/vueSelf/vueFile/vueFile.vue';
import Directives from '../../views/vueSelf/directives.vue';
import MixinExtend from '../../views/vueSelf/mixinExtend/mixinExtend.vue';

const SecondRouterD = () => import('../../views/vueSelf/vue-router/src/d.vue'); // 异步组件

export default {
  farName: 'vuePart',
  classChild: [
    {
      path: '/transition',
      component: Transition,
      info: 'transition组件'
    },
    {
      path: '/propSlot',
      component: PropSlot,
      info: 'solt槽'
    },
    {
      path: '/tree',
      component: Tree,
      info: '递归组件'
    },
    {
      path: '/vuex',
      component: Vuex,
      info: 'vuex'
    },
    {
      path: '/resource',
      component: Resource,
      info: 'vue-resource'
    },
    {
      path: '/vueRouter',
      component: VueRouter,
      info: 'vue-router',
      // 二级路由，配置children
      children: [
        {
          path: 'a', // 不要写/a因为那代表了根目录下的a标签
          component: SecondRouterA
        },
        {
          path: 'b',
          component: SecondRouterB,
          meta: {needStorage: true}
        },
        {
          path: 'c',
          component: SecondRouterC,
          // 制定路由的导航钩子
          beforeEnter: (to, from, next) => {
            console.log('这是二级理由独享的导航钩子');
            next(); // 不能不写
          }
        },
        {
          path: 'd',
          component: SecondRouterD //  异步组件引入
        }
      ]
    },
    {
      path: '/key',
      component: Key,
      info: '属性key'
    },
    {
      path: '/vModel',
      component: VModel,
      info: '属性vmodel'
    },
    {
      path: '/sync',
      component: Sync,
      info: '修饰符sync'
    },
    {
      path: '/global',
      component: Global,
      info: '全局变量、函数'
    },
    // {
    //   path: '/hello',
    //   component: Hello
    // },
    {
      path: '/keepAlive',
      component: KeepAlive,
      info: '组件keep-alive'
    },
    {
      path: '/vueFile',
      component: VueFile,
      info: '.vue文件研究'
    },
    {
      path: '/directives',
      component: Directives,
      info: 'vue自定义指令'
    },
    {
      path: '/mixin-extend',
      component: MixinExtend,
      info: 'vue组件的混合与继承'
    }
  ]
};
