// 工具
import FullPage from '../../components/utils/fullPage/fullPage.vue';
import MintUI from '../../components/utils/mint-ui/minu-ui.vue';
import GetPhoto from '../../components/logic/mobileTerminal/src/getCamera.vue';
import AMap from '../../components/utils/aMap.vue';
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
    path: '/getPhoto',
    component: GetPhoto
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
