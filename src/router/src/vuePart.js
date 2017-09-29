// vue部分
import Transition from '../../components/vueSelf/transition/transition.vue';
import PropSolt from '../../components/vueSelf/props/slotFather.vue';
import Resource from '../../components/vueSelf/resource.vue';
import Tree from '../../components/vueSelf/tree/tree.vue';
import VueRouter from '../../components/vueSelf/vue-router/vue-router.vue';
import SecondRuterA from '../../components/vueSelf/vue-router/src/a.vue';
import SecondRuterB from '../../components/vueSelf/vue-router/src/b.vue';
import SecondRuterC from '../../components/vueSelf/vue-router/src/c.vue';
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
        component: SecondRuterA
      },
      {
        path: 'b',
        component: SecondRuterB,
        meta: {needStorage: true}
      },
      {
        path: 'c',
        component: SecondRuterC
        // TODO 待改进
        // beforeRouteLeave (to, from, next) {
        //   console.log(this);
        //   if (this.allowLeave === false) next(false);  // 不合条件就拒绝跳转
        // }
      }
    ]
  },
  {
    path: '/hello',
    component: Hello
  }
];
