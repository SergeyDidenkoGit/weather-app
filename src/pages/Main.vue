<template>
  <section class="main">
    <div class="search">
      <div class="search__wrapper">
        <autocomplete-input class="search-input"></autocomplete-input>
      </div>
    </div>
    <transition-group name="weather-card">
      <template v-if="!isLoading">
        <div class="main__wrapper">
          <div>
            <h1 class="main__header">Weather in {{ city }}</h1>
          </div>
          <div class="weather">
            <div class="weather__buttons">
              <custom-button
                class="weather__button day"
                :class="{ weather__button_active: !isWeakWeather }"
                @click="changeWeatherRange"
                >Day</custom-button
              >
              <custom-button
                class="weather__button weak"
                :class="{ weather__button_active: isWeakWeather }"
                @click="changeWeatherRange"
                >Weak</custom-button
              >
            </div>
            <weather-card v-if="!isWeakWeather"></weather-card>
            <weak-weather-card v-if="isWeakWeather"></weak-weather-card>
          </div>
          <weather-cities></weather-cities>
          <weather-graph :range="isWeakWeather"></weather-graph>
        </div>
      </template>
    </transition-group>
    <custom-loader class="custom-loader" v-if="isLoading"></custom-loader>
  </section>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";
import WeakWeatherCard from "@/components/WeakWeatherCard";
import WeatherCities from "@/components/WeatherCities";
import WeatherGraph from "@/components/WeatherGraph";
import AutocompleteInput from "@/components/AutocompleteInput";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    WeatherCard,
    WeakWeatherCard,
    WeatherCities,
    WeatherGraph,
    AutocompleteInput,
  },
  data() {
    return {
      isWeakWeather: false,
    };
  },
  computed: {
    ...mapState({
      ipData: (state) => state.ip.ipData,
      weatherData: (state) => state.weather.weatherData,
      isLoading: (state) => state.weather.isLoading,
    }),
    ...mapGetters({
      city: "weather/city",
    }),
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchIP: "ip/fetchIP",
      fetchCurrentWeatherByIP: "weather/fetchCurrentWeatherByIP",
      fetchWeatherByIP: "weather/fetchWeatherByIP",
    }),
    changeWeatherRange() {
      this.isWeakWeather = !this.isWeakWeather;
    },
  },
  async created() {
    await this.fetchIP();
    await this.fetchCurrentWeatherByIP(this.ipData);
    await this.fetchWeatherByIP(this.ipData);
  },
};
</script>

<style scoped>
.main {
  max-width: 100%;
}

.search {
  padding: 20px 20px;
  width: 100%;
  background-color: #0099ff;
}

.search__wrapper {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
}

.search-input {
  width: 30%;
  align-self: flex-start;
}

.main__wrapper {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.main__header {
  text-align: center;
}

.weather {
  position: relative;
  width: 80%;
}

.weather__buttons {
  padding: 10px;
  width: 20%;
  display: flex;
  justify-content: space-between;
}

.weather__button.weather__button_active {
  background: #ffffff;
  color: #0e3c62;
  border: 1px solid #0e3c62;
  pointer-events: none;
}

.weather-card-enter-active,
.weather-card-leave-active {
  transition: all 1s ease;
}

.weather-card-enter-from,
.weather-card-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.custom-loader {
  margin: 50px auto;
}

@media (max-width: 570px) {
  .search-input {
    width: 100%;
  }

  .weather__buttons {
    width: 100%;
    flex-direction: column;
  }

  .weather__button {
    width: 100%;
  }
}
</style>
