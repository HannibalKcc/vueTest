export const STORAGE_KEY = 'counts';

// for testing
if (navigator.userAgent.indexOf('PhantomJS') > -1) {
  window.localStorage.clear();
}

let state = {
  counts: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || 0)
};

let mutations = {
  addCounts (state) {
    state.counts += 10;
  },

  reduceCounts (state) {
    state.counts -= 1;
  }
};

let actions = {
  asyncAdd ({commit}) {
    setTimeout(() => {
      commit('addCounts');
    }, 1.5e3);
  }
};

export {
  state,
  mutations,
  actions
};
