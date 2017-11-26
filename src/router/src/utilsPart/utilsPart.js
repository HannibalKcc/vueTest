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
