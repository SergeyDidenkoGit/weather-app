import axios from "axios";

export const ipModule = {
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
    async fetchIP({ commit }) {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        commit("setIP", response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
