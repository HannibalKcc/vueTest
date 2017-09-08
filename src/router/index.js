import vuePart from './vuePart.js';
import logicPart from './logicPart.js';
import utilsPart from './utilsPart.js';

import VueRouter from 'vue-router';

const routes = [...vuePart, ...logicPart, ...utilsPart];

const router = new VueRouter({
  routes
});
export default router;
