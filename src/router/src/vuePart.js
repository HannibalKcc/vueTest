// vue部分
import Transition from '../../components/vueSelf/transition/transition.vue';
import PropSolt from '../../components/vueSelf/props/slotFather.vue';
import Resource from '../../components/vueSelf/resource.vue';
import Tree from '../../components/vueSelf/tree/tree.vue';
import VueRouter from '../../components/vueSelf/vue-router/vue-router.vue';
import SecondRouterA from '../../components/vueSelf/vue-router/src/a.vue';
import SecondRouterB from '../../components/vueSelf/vue-router/src/b.vue';
import SecondRouterC from '../../components/vueSelf/vue-router/src/c.vue';
const SecondRouterD = () => import('../../components/vueSelf/vue-router/src/d.vue');  // 异步组件
import Key from '../../components/vueSelf/key.vue';
import Hello from '../../components/Hello.vue';

export default [
  {
    path: '/transition',
    component: Transition
  },
  {
    path: '/propSolt',
    component: PropSolt
  },
  {
    path: '/resource',
    component: Resource
  },
  {
    path: '/tree',
    component: Tree
  },
  {
    path: '/vueRouter',
    component: VueRouter,
    // 二级路由，配置children
    children: [
      {
        path: 'a',  // 不要写/a因为那代表了根目录下的a标签
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
        component: SecondRouterD  //  异步组件引入
      }
    ]
  },
  {
    path: '/key',
    component: Key
  },
  {
    path: '/hello',
    component: Hello
  }
];
