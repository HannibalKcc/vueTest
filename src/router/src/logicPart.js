// 逻辑
import Sort from '../../components/logic/sort.vue';
import ForLoop from '../../components/logic/forLoop.vue';
import IE from '../../components/logic/import&export.vue';
import Object from '../../components/logic/object.vue';
import TouchPenetration from '../../components/logic/touchPenetration.vue';
import CurrentTarget from '../../components/logic/currentTarget.vue';
import Array from '../../components/logic/array.vue';
import Mobile1px from '../../components/logic/mobileTerminal/src/border1px.vue';
import IIFE from '../../components/logic/IIFE.vue';
import SVG from '../../components/logic/svg.vue';
import This from '../../components/logic/this.vue';
import CondenseImg from '../../components/logic/condenseImg.vue';
import RegExp from '../../components/logic/regExp.vue';
import MVVM from '../../components/logic/MVVM/MVVM.vue';
import GetCamera from '../../components/logic/input.vue';
import NavigatorAPI from '../../components/logic/navigatorAPI.vue';
import Generator from '../../components/logic/generator.vue';
import Promise from '../../components/logic/promise.vue';

export default [
  {
    path: '/sort',
    component: Sort
  },
  {
    path: '/forLoop',
    component: ForLoop
  },
  {
    path: '/import-export',
    component: IE
  },
  {
    path: '/object',
    component: Object
  },
  {
    path: '/touchPenetration',
    component: TouchPenetration
  },
  {
    path: '/currentTarget',
    component: CurrentTarget
  },
  {
    path: '/array',
    component: Array
  },
  {
    path: '/mobile1px',
    component: Mobile1px
  },
  {
    path: '/iife',
    component: IIFE
  },
  {
    path: '/svg',
    component: SVG
  },
  {
    path: '/this',
    component: This
  },
  {
    path: '/condenseImg',
    component: CondenseImg
  },
  {
    path: '/regExp',
    component: RegExp
  },
  {
    path: '/mvvm',
    component: MVVM
  },
  {
    path: '/getCamera',
    component: GetCamera
  },
  {
    path: '/navigatorAPI',
    component: NavigatorAPI
  },
  {
    path: '/generator',
    component: Generator
  },
  {
    path: '/promise',
    component: Promise
  }
];
