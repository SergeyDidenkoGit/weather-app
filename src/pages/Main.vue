<template>
  <div class="main">
    <div class="search">
      <div class="search__wrapper">
        <autocomplete-input class="search-input"></autocomplete-input>
        <div class="f-button"></div>
      </div>
    </div>
    <div class="main__wrapper">
      <div>
        <h1 class="main__header">Weather in {{ city }}</h1>
      </div>
      <div class="weather">
        <div class="weather__buttons">
          <custom-button
            class="weather__button day"
            :class="{ weather__button_active: weatherRange[0].active }"
            @click="changeWeatherRange(0)"
            >Day</custom-button
          >
          <custom-button
            class="weather__button weak"
            :class="{ weather__button_active: weatherRange[1].active }"
            @click="changeWeatherRange(1)"
            >Weak</custom-button
          >
        </div>
        <transition-group name="weather-card">
          <weather-card
            v-if="weatherRange[0].active && !isLoading"
            key="weatherCard"
          ></weather-card>
          <weak-weather-card
            v-if="weatherRange[1].active && !isLoading"
            key="weakWeatherCard"
          ></weak-weather-card>
        </transition-group>
      </div>
      <weather-graph></weather-graph>
    </div>
  </div>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";
import WeakWeatherCard from "@/components/WeakWeatherCard";
import WeatherGraph from "@/components/WeatherGraph";
import AutocompleteInput from "@/components/AutocompleteInput";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    WeatherCard,
    WeakWeatherCard,
    WeatherGraph,
    AutocompleteInput,
  },
  data() {
    return {
      weatherRange: [{ active: true }, { active: false }],
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
    changeWeatherRange(id) {
      this.weatherRange.forEach((item, index) => {
        item.active = index === id;
      });
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
.search {
  padding: 20px 20px;
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

.main {
  max-width: 100%;
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

.weather__button_active {
  background: #ffffff;
  color: #0e3c62;
  border: 1px solid #0e3c62;
}

.weather-card-enter-active,
.weather-card-leave-active {
  transition: all 0.1s ease;
}

.weather-card-enter-from,
.weather-card-leave-to {
  opacity: 0;
}
</style>
