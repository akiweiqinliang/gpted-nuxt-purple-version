import cardData from '@/enums/cardData';
export const state = () => ({
  showData: cardData,
  token: '',
  userinfo: {
    keywords: [],
  },
});
export const actions = {
  initToken({ commit }) {
    const token = sessionStorage.getItem('token');
    console.log('initToken');
    if (token) {
      commit('setToken', token);
    }
  },
};
export const mutations = {
  setShowData(state, data) {
    state.showData = data;
  },
  setToken(state, data) {
    state.token = data;
  },
};
export const getters = {
  getShowData(state) {
    return state.showData;
  },
  getToken(state) {
    return state.token;
  },
};
