<template>
  <div class="main">
    <div class="search">
      <div class="search__wrapper">
        <weather-input class="search-input"></weather-input>
        <div class="f-button"></div>
      </div>
    </div>
    <div class="main__wrapper">
      <div class="weather-block">
        <!-- <div>City: {{ city }}</div>
      <div>Temperature: {{ temperature }}</div>
      <div>{{ feats }}</div>
      <div>Clouds: {{ clouds }}</div>
      <div>Humidity: {{ humidity }}</div>
      <div>Wind: {{ wind }}</div> -->
      </div>
      <div class="temperature-block">
        <weather-graph></weather-graph>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherGraph from "@/components/WeatherGraph";
import WeatherInput from "@/components/WeatherInput";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    WeatherGraph,
    WeatherInput,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      ipData: (state) => state.ip.ipData,
      weatherData: (state) => state.weather.weatherData,
    }),
    ...mapGetters({
      city: "weather/city",
      todayWeather: "weather/todayWeather",
      // temperature: "weather/temperature",
      // feats: "weather/feats",
      // clouds: "weather/clouds",
      // humidity: "weather/humidity",
      // wind: "weather/wind",
    }),
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchIP: "ip/fetchIP",
      fetchWeatherByIP: "weather/fetchWeatherByIP",
    }),
  },
  async created() {
    await this.fetchIP();
    await this.fetchWeatherByIP(this.ipData);
  },
};
</script>

<style scoped>
.search {
  padding: 20px 20px;
  background-color: #09f;
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

.weather-block,
.temperature-block {
  padding: 20px;
  width: 100%;
  min-height: 40%;
  background: white;
}
</style>
