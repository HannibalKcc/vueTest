import vuePart from './src/vuePart.js';
import logicPart from './src/logicPart.js';
import utilsPart from './src/utilsPart.js';

import VueRouter from 'vue-router';

const routes = [...vuePart, ...logicPart, ...utilsPart];

const router = new VueRouter({
  routes
});
export default router;
