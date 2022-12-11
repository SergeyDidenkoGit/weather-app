import axios from "axios";

export const weatherModule = {
  state: () => {
    return {
      isLoading: true,
      units: "metric",
      appid: "d8e5bc3db521d7a0cb06d99ce63610aa",
      limit: 1,
      currentWeatherData: null,
      weatherData: null,
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
    date(state) {
      return new Date(state.currentWeatherData?.dt * 1000).toLocaleString(
        "en-US",
        state.dateOptions
      );
    },
    currentTemperature(state) {
      return Math.floor(state.currentWeatherData?.main?.temp);
    },
    currentFeels(state) {
      return Math.round(state.currentWeatherData?.main?.feels_like);
    },
    currentClouds(state) {
      return (
        state.currentWeatherData?.weather[0]?.description[0].toUpperCase() +
        state.currentWeatherData?.weather[0]?.description?.slice(1)
      );
    },
    currentWind(state) {
      return state.currentWeatherData?.wind?.speed;
    },
    currentPressure(state) {
      return (
        state.currentWeatherData?.main?.pressure * 0.750063755419211
      ).toFixed(0);
    },
    currentHumidity(state) {
      return state.currentWeatherData?.main?.humidity;
    },
    weakWeatherDate(state) {
      const weakDate = [];
      const today = new Date(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      );

      let nextDay = new Date(today.setDate(today.getDate() + 1));

      for (let i = 0; i < state.weatherData?.list.length; i++) {
        if (state.weatherData?.list[i].dt > Date.parse(nextDay) / 1000) {
          weakDate.push(state.weatherData?.list[i]);
          nextDay.setDate(nextDay.getDate() + 1);
        } else {
          continue;
        }
      }

      return weakDate;
    },
    formattedWeakWeatherDate(state, getters) {
      return getters.weakWeatherDate?.map((item) => {
        return {
          date: new Date(item?.dt * 1000).toLocaleString(
            "en-US",
            state.dateOptions
          ),
          temperature: Math.round(item?.main?.temp),
          feels: Math.round(item?.main?.feels_like),
          clouds:
            item?.weather[0]?.description[0].toUpperCase() +
            item?.weather[0]?.description?.slice(1),
          wind: item?.wind?.speed,
          pressure: (item?.main?.pressure * 0.750063755419211).toFixed(0),
          humidity: item?.main?.humidity,
        };
      });
    },
  },
  mutations: {
    setCurrentWeatherData(state, data) {
      state.currentWeatherData = data;
    },
    setWeatherData(state, data) {
      state.weatherData = data;
    },
    setLoading(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    async fetchCurrentWeatherByIP({ state, commit }, userData) {
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
        commit("setCurrentWeatherData", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(() => {
          commit("setLoading", false);
        }, 1000);
      }
    },
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
        setTimeout(() => {
          commit("setLoading", false);
        }, 1000);
      }
    },
    async fetchCurrentWeatherByCity({ state, commit }, city) {
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
              "https://api.openweathermap.org/data/2.5/weather",
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
        commit("setCurrentWeatherData", response.data);
      } catch (e) {
        console.log(e);
      } finally {
        commit("setLoading", false);
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
        commit("setLoading", false);
      }
    },
  },
  namespaced: true,
};
