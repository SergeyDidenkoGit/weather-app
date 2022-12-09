import axios from "axios";

export const autocompleteModule = {
  state: () => {
    return {
      ipData: null,
    };
  },
  getters: {},
  mutations: {
    setIP(state, ipData) {
      state.ipData = ipData;
    },
  },
  actions: {
    async fetchCities({ commit }) {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        console.log(response);
        // commit("setIP", response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
