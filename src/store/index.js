import Vue from 'vue';
import Vuex from 'vuex';
import {state, mutations, actions} from './src/mutations';
import plugins from './src/plugins';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins
});

