import VueRouter from 'vue-router';

// vue部分
import Transition from './components/vueSelf/transition/transition.vue';
import PropSolt from './components/vueSelf/props/slotFather.vue';
import Resource from './components/vueSelf/resource.vue';

// 逻辑
import Sort from './components/logic/sort.vue';
import ForLoop from './components/logic/forLoop.vue';
import IE from './components/logic/import&export.vue';
import Object from './components/logic/object.vue';
import TouchPenetration from './components/logic/touchPenetration.vue';
import CurrentTarget from './components/logic/currentTarget.vue';
import Array from './components/logic/array.vue';
import Mobile1px from './components/logic/mobile1px.vue';
import IIFE from './components/logic/IIFE.vue';

// 工具
import FullPage from './components/utils/fullPage/fullPage.vue';

const routes = [
  // vue部分
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
  // 逻辑
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/forLoop',
    component: ForLoop
  },
  {
    path: '/import-export',
    component: IE
  },
  {
    path: '/object',
    component: Object
  },
  {
    path: '/touchPenetration',
    component: TouchPenetration
  },
  {
    path: '/currentTarget',
    component: CurrentTarget
  },
  {
    path: '/array',
    component: Array
  },
  {
    path: '/mobile1px',
    component: Mobile1px
  },
  {
    path: '/IIFE',
    component: IIFE
  },
  // 工具
  {
    path: '/fullPage',
    component: FullPage
  }
];

const router = new VueRouter({
  routes
});
export default router;
