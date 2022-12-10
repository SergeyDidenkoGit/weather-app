import axios from "axios";

export const weatherModule = {
  state: () => {
    return {
      cnt: 2,
      units: "metric",
      appid: "afd610eb48b6805bd69ff2d873ee4bf1",
      limit: 1,
      weatherData: null,
      todayWeather: null,
    };
  },
  getters: {
    city(state) {
      return `${state.weatherData?.city?.name}, ${state.weatherData?.city?.country}`;
    },
    todayWeather(state) {
      const today = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      );
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      return state.weatherData?.list?.filter((item) => {
        return item.dt < Date.parse(tomorrow) / 1000;
      });
    },
    // temperatureRange(state){
    //   return state.todayWeather.map((item) => ({item.}));
    // }
    // temperature(state) {
    //   return `${Math.round(state.weatherData?.main?.temp)} ℃`;
    // },
    // feats(state) {
    //   return `Feats ${Math.round(state.weatherData?.main?.feels_like)} ℃`;
    // },
    // clouds(state) {
    //   return state.weatherData?.weather[0]?.description;
    // },
    // humidity(state) {
    //   return `${state.weatherData?.main?.humidity} %`;
    // },
    // wind(state) {
    //   return `${state.weatherData?.wind?.speed} m/sec`;
    // },
  },
  mutations: {
    setWeatherData(state, data) {
      state.weatherData = data;
    },
  },
  actions: {
    async fetchWeatherByIP({ state, commit }, userData) {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/forecast",
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
    async fetchWeatherByCity({ state, commit }, city) {
      try {
        const response = await axios
          .get("http://api.openweathermap.org/geo/1.0/direct", {
            params: {
              q: city,
              limit: state.limit,
              appid: state.appid,
            },
          })
          .then((response) => {
            return axios.get(
              "https://api.openweathermap.org/data/2.5/forecast",
              {
                params: {
                  lat: response.data[0].lat,
                  lon: response.data[0].lon,
                  units: state.units,
                  appid: state.appid,
                },
              }
            );
          });
        commit("setWeatherData", response.data);
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
  },
  namespaced: true,
};
