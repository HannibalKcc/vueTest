// 逻辑
import Sort from '../components/logic/sort.vue';
import ForLoop from '../components/logic/forLoop.vue';
import IE from '../components/logic/import&export.vue';
import Object from '../components/logic/object.vue';
import TouchPenetration from '../components/logic/touchPenetration.vue';
import CurrentTarget from '../components/logic/currentTarget.vue';
import Array from '../components/logic/array.vue';
import Mobile1px from '../components/logic/mobile1px.vue';
import IIFE from '../components/logic/IIFE.vue';
import SVG from '../components/logic/svg.vue';
import This from '../components/logic/this.vue';

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
  }
];