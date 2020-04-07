// 逻辑
import MobileTerminal from './src/mobileTerminal.js';

import Sort from '../../../views/logic/sort.vue';
import ForLoop from '../../../views/logic/forLoop.vue';
import Object from '../../../views/logic/object.vue';
import TouchPenetration from '../../../views/logic/touchPenetration.vue';
import CurrentTarget from '../../../views/logic/currentTarget.vue';
import Array from '../../../views/logic/array.vue';
import IIFE from '../../../views/logic/IIFE.vue';
import SVG from '../../../views/logic/svg/svg.vue';
import This from '../../../views/logic/this.vue';
import CondenseImg from '../../../views/logic/canvas.vue';
import RegExp from '../../../views/logic/regExp.vue';
import MVVM from '../../../views/logic/MVVM/MVVM.vue';
import GetCamera from '../../../views/logic/input.vue';
import NavigatorAPI from '../../../views/logic/navigatorAPI.vue';
import Generator from '../../../views/logic/generator.vue';
import Promise from '../../../views/logic/promise.vue';
import Async from '../../../views/logic/async.vue';
import Notification from '../../../views/logic/notification.vue';
import RichText from '../../../views/logic/richText.vue';
import MyScroll from '../../../views/logic/myScroll/myScroll.vue';
import LazyImg from '../../../views/logic/lazyImg.vue';
import Queen8 from '../../../views/logic/queens8.vue';

const ImportExport = () => import('../../../views/logic/import&export/import&export.vue');

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
    },
    {
      path: '/queen8',
      component: Queen8,
      info: '八皇后问题'
    }
  ]
};
