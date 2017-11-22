// 工具
import FullPage from '../../../components/utils/fullPage/fullPage.vue';
import mintUi from './src/mint-ui';
import AMap from '../../../components/utils/aMap/aMap.vue';
import VeeValidate from '../../../components/utils/vee-validate/veeValidate.vue';
import WX from '../../../components/utils/wx/wx.vue';

export default {
  farName: 'utilsPart',
  classChild: [
    mintUi,
    {
      path: '/fullPage',
      component: FullPage
    },
    {
      path: '/aMap',
      component: AMap
    },
    {
      path: '/veeValidate',
      component: VeeValidate
    },
    {
      path: '/wx',
      component: WX
    }
  ]
};
