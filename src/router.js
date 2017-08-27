import VueRouter from 'vue-router';

// vue部分
import Transition from './components/transition/transition.vue';
import PropSolt from './components/props/slotFather.vue';
// 逻辑
import Sort from './components/logic/sort.vue';
import ForLoop from './components/logic/forLoop.vue';
import IE from './components/logic/import&export.vue';
import ObjectStudy from './components/logic/objectStudy.vue';
import TouchPenetration from './components/logic/touchPenetration.vue';
import CurrentTarget from './components/logic/currentTarget.vue';
import Array from './components/logic/array.vue';

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
    path: '/objectStudy',
    component: ObjectStudy
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
