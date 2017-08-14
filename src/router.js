import VueRouter from 'vue-router';

// 組件
import Transition from '@/components/transition/transition.vue';

const routes = [
  {
    path: '/transition',
    component: Transition
  }
];

const router = new VueRouter({
  routes
});
export default router;
