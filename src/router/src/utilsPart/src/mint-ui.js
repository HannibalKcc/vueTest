import MintUi from '../../../../components/utils/mint-ui/mint-ui.vue';
import InfiniteScroll from '../../../../components/utils/mint-ui/src/infiniteScroll.vue';
import MsgBox from '../../../../components/utils/mint-ui/src/msgBox.vue';

export default {
  farName: 'mintUi',
  classChild: [
    {
      path: '/mintUi',
      component: MintUi,
      redirect: '/mintUi/infiniteScroll',
      children: [
        {
          path: 'infiniteScroll',
          component: InfiniteScroll
        },
        {
          path: 'msgBox',
          component: MsgBox
        }
      ]
    }
  ]
};
