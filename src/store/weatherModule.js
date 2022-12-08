import axios from "axios";

export const weatherModule = {
  state: () => {
    return {
      units: "metric",
      appid: "d8e5bc3db521d7a0cb06d99ce63610aa",
      weatherData: null,
    };
  },
  getters: {
    city(state) {
      return `${state.weatherData?.name}, ${state.weatherData?.sys?.country}`;
    },
    temperature(state) {
      return `${Math.round(state.weatherData?.main?.temp)} ℃`;
    },
    feats(state) {
      return `Feats ${Math.round(state.weatherData?.main?.feels_like)} ℃`;
    },
    clouds(state) {
      return state.weatherData?.weather[0]?.description;
    },
    humidity(state) {
      return `${state.weatherData?.main?.humidity} %`;
    },
    wind(state) {
      return `${state.weatherData?.wind?.speed} m/sec`;
    },
  },
  mutations: {
    setWeatherData(state, data) {
      state.weatherData = data;
    },
  },
  actions: {
    async fetchCurrentUserWeather({ state, commit }, userData) {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather",
          {
            params: {
              lat: userData.latitude,
              lon: userData.longitude,
              units: state.units,
              appid: state.appid,
            },
          }
        );

        commit("setWeatherData", response.data);
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
  },
  namespaced: true,
};
