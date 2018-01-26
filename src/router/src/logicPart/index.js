// 逻辑
import MobileTerminal from './src/mobileTerminal.js';

import Sort from '../../../components/logic/sort.vue';
import ForLoop from '../../../components/logic/forLoop.vue';
const ImportExport = () => import('../../../components/logic/import&export/import&export.vue');
import Object from '../../../components/logic/object.vue';
import TouchPenetration from '../../../components/logic/touchPenetration.vue';
import CurrentTarget from '../../../components/logic/currentTarget.vue';
import Array from '../../../components/logic/array.vue';
import IIFE from '../../../components/logic/IIFE.vue';
import SVG from '../../../components/logic/svg/svg.vue';
import This from '../../../components/logic/this.vue';
import CondenseImg from '../../../components/logic/canvas.vue';
import RegExp from '../../../components/logic/regExp.vue';
import MVVM from '../../../components/logic/MVVM/MVVM.vue';
import GetCamera from '../../../components/logic/input.vue';
import NavigatorAPI from '../../../components/logic/navigatorAPI.vue';
import Generator from '../../../components/logic/generator.vue';
import Promise from '../../../components/logic/promise.vue';
import Async from '../../../components/logic/async.vue';
import Notification from '../../../components/logic/notification.vue';
import RichText from '../../../components/logic/richText.vue';
import MyScroll from '../../../components/logic/myScroll/myScroll.vue';
import LazyImg from '../../../components/logic/lazyImg.vue';

export default {
  farName: 'logicPart',
  classChild: [
    MobileTerminal,
//   farName: 'mobileTerminal',
//   classChild: [
//    {
//       path: 'mobileTerminalBorder1px',
//       component: mobileTerminalBorder1px
//    }
//  ]
    {
      path: '/sort',
      component: Sort,
      info: '排序'
    },
    {
      path: '/forLoop',
      component: ForLoop,
      info: 'JS中的循环'
    },
    {
      path: '/import-export',
      component: ImportExport,
      info: 'es6-模块'
    },
    {
      path: '/object',
      component: Object,
      info: 'JS对象'
    },
    {
      path: '/touchPenetration',
      component: TouchPenetration,
      info: '???'
    },
    {
      path: '/currentTarget',
      component: CurrentTarget,
      info: '事件委托、currentTarget'
    },
    {
      path: '/array',
      component: Array,
      info: 'JS数组'
    },
    {
      path: '/iife',
      component: IIFE,
      info: 'JS立即执行函数'
    },
    {
      path: '/svg',
      component: SVG,
      info: 'SVG'
    },
    {
      path: '/this',
      component: This,
      info: 'JSThis'
    },
    {
      path: '/condenseImg',
      component: CondenseImg,
      info: 'canvas压缩图片'
    },
    {
      path: '/regExp',
      component: RegExp,
      info: '正则表达式'
    },
    {
      path: '/mvvm',
      component: MVVM,
      info: 'MVVM'
    },
    {
      path: '/getCamera',
      component: GetCamera,
      info: '获取拍照'
    },
    {
      path: '/navigatorAPI',
      component: NavigatorAPI,
      info: 'API navigator'
    },
    {
      path: '/generator',
      component: Generator,
      info: 'es6 Generator'
    },
    {
      path: '/promise',
      component: Promise,
      info: 'es6 Promise'
    },
    {
      path: '/async',
      component: Async,
      info: 'es6 Async'
    },
    {
      path: '/notification',
      component: Notification,
      info: 'H5 Notification弹窗特性'
    },
    {
      path: '/richText',
      component: RichText,
      info: '富文本编辑器'
    },
    {
      path: '/myScroll',
      component: MyScroll,
      info: '自做Scroll'
    },
    {
      path: '/lazyImg',
      component: LazyImg,
      info: '实现懒加载'
    }
  ]
};
