import { IHomeState } from "@/common/interfaces";
const initState = () => ({
  cacheKeepAlive: [],
});

// states
const state = initState();

// getters
const getters = {
  cacheKeepAlive: (state: IHomeState) => state.cacheKeepAlive,
};

// actions
const actions = {};

// mutations
const mutations = {
  SET_KEEPALIVE(state: IHomeState, payload: any) {
    if (!state.cacheKeepAlive.includes(payload as never)) {
      state.cacheKeepAlive.push(payload as never);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
