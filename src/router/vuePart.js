// vue部分
import Transition from '../components/vueSelf/transition/transition.vue';
import PropSolt from '../components/vueSelf/props/slotFather.vue';
import Resource from '../components/vueSelf/resource.vue';
import Tree from '../components/logic/tree/tree.vue';

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
  }
];
