// import Vue from 'vue';
// import Vuex from 'vuex';

import cardData from '@/enums/cardData';

// Vue.use(Vuex);

// export default new Vuex.Store({
export const state = () => ({
  showData: cardData,
  // collectIds: JSON.parse(localStorage.getItem('collectIds')) || [],
});
export const actions = () => ({
  // setCollectIds({ state, commit }, data) {
  //     if (state.collectIds.includes(data)) {
  //         commit('removeCollectId', data);
  //         return { msg: 'info' };
  //     } else {
  //         commit('addCollectId', data);
  //         return { msg: 'success' };
  //     }
  // },
});
export const mutations = () => ({
  setShowData(state, data) {
    state.showData = data;
  },
  // addCollectId(state, data) {
  //     state.collectIds = [...state.collectIds, data];
  // },
  // removeCollectId(state, data) {
  //     state.collectIds = state.collectIds.filter(el => el !== data);
  // },
});
export const getters = () => ({
  getShowData: (state) => {
    return state.showData;
  },
  // getCollectIds: state =>  {
  //     return state.collectIds;
  // }
});
