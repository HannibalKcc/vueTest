import VueRouter from 'vue-router';

// 組件
import Transition from '@/components/transition/transition.vue';
// 属性
import PropSolt from '@/components/props/slotFather.vue';
// 逻辑
import Sort from '@/components/logic/sort.vue';

const routes = [
  // 组件
  {
    path: '/transition',
    component: Transition
  },
  // 属性
  {
    path: '/propSolt',
    component: PropSolt
  },
  // 逻辑
  {
    path: '/sort',
    component: Sort
  }
];

const router = new VueRouter({
  routes
});
export default router;
