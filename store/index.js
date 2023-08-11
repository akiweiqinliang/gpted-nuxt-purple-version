import cardData from '@/enums/cardData';
export const state = () => ({
  showData: cardData,
});
export const actions = () => ({});
export const mutations = () => ({
  setShowData(state, data) {
    state.showData = data;
  },
});
export const getters = () => ({
  getShowData: (state) => {
    return state.showData;
  },
});
