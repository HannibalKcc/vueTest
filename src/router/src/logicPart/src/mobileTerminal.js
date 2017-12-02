import MobileTerminal from '../../../../components/logic/mobileTerminal/mobileTerminal.vue';
import Border1px from '../../../../components/logic/mobileTerminal/border1px.vue';

export default {
  farName: 'mobileTerminal',
  classChild: [
    {
      path: '/mobileTerminal',
      component: MobileTerminal
    },
    {
      path: '/mobileTerminalBorder1px',
      component: Border1px
    }
  ]
};
