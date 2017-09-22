// 工具
import FullPage from '../../components/utils/fullPage/fullPage.vue';
import MintUI from '../../components/utils/mint-ui/mint-ui.vue';
import AMap from '../../components/utils/aMap/aMap.vue';
import VeeValidate from '../../components/utils/vee-validate/veeValidate.vue';

export default [
  {
    path: '/fullPage',
    component: FullPage
  },
  {
    path: '/mintUI',
    component: MintUI
  },
  {
    path: '/aMap',
    component: AMap
  },
  {
    path: '/veeValidate',
    component: VeeValidate
  }
];
