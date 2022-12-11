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
        <h1 class="main__header">Weather in {{ city }} now</h1>
      </div>
      <weather-card></weather-card>
      <weather-graph></weather-graph>
    </div>
  </div>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";
import WeatherGraph from "@/components/WeatherGraph";
import AutocompleteInput from "@/components/AutocompleteInput";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    WeatherCard,
    WeatherGraph,
    AutocompleteInput,
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

.weather-block,
.temperature-block {
  padding: 20px;
  width: 100%;
}
</style>
