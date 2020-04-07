// 工具
import FullPage from '../../../views/utils/fullPage/fullPage.vue';
import mintUi from './src/mint-ui';
import AMap from '../../../views/utils/aMap/aMap.vue';
import VeeValidate from '../../../views/utils/vee-validate/veeValidate.vue';
import WX from '../../../views/utils/wx/wx.vue';

export default {
  farName: 'utilsPart',
  classChild: [
    mintUi,
    {
      path: '/fullPage',
      component: FullPage,
      info: '一屏一层'
    },
    {
      path: '/aMap',
      component: AMap,
      info: '高德地图'
    },
    {
      path: '/veeValidate',
      component: VeeValidate,
      info: '表单验证'
    },
    {
      path: '/wx',
      component: WX,
      info: '微信'
    }
  ]
};
