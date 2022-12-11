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
      dateOptions: {
        month: "long",
        day: "numeric",
      },
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
    date(state) {
      return new Date(state.weatherData?.list[0]?.dt * 1000).toLocaleString(
        "en-US",
        state.dateOptions
      );
    },
    temperature(state) {
      return Math.floor(state.weatherData?.list[0]?.main?.temp);
    },
    feels(state) {
      return Math.round(state.weatherData?.list[0]?.main?.feels_like);
    },
    clouds(state) {
      return (
        state.weatherData?.list[0]?.weather[0]?.description[0].toUpperCase() +
        state.weatherData?.list[0]?.weather[0]?.description?.slice(1)
      );
    },
    wind(state) {
      return state.weatherData?.list[0]?.wind?.speed;
    },
    pressure(state) {
      return (
        state.weatherData?.list[0]?.main?.pressure * 0.750063755419211
      ).toFixed(0);
    },
    humidity(state) {
      return state.weatherData?.list[0]?.main?.humidity;
    },
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
