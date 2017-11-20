import MobileTerminal from '../../../../components/logic/mobileTerminal/mobile.vue';
import Mobile1px from '../../../../components/logic/mobileTerminal/src/border1px.vue';

export default {
  path: '/mobileTerminal',
  component: MobileTerminal,
  children: [
    {
      path: 'mobile1px',
      component: Mobile1px
    }
  ]
};
