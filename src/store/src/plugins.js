import {STORAGE_KEY} from './mutations';

const localStoragePlugin = store => {
  // 订阅mutation并本地存储
  store.subscribe((mutation, state) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.counts));
  });
  // 订阅action并本地存储
  store.subscribeAction((action, state) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.counts));
  });
};

export default [localStoragePlugin]; // plugins的值需要是数组
