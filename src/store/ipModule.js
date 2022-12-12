import axios from "axios";

export const ipModule = {
  state: () => {
    return {
      ipData: null,
      apiKey: "bb691e293eec4a21a615c07be7216208",
    };
  },
  getters: {},
  mutations: {
    setIP(state, ipData) {
      state.ipData = ipData;
    },
  },
  actions: {
    async fetchIP({ state, commit }) {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        // const response = await axios.get("https://api.ipgeolocation.io/ipgeo", {
        //   params: {
        //     apiKey: state.apiKey,
        //   },
        // });
        commit("setIP", response.data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
