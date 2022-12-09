<template>
  <div class="main">
    <div class="weather-block">
      <div>City: {{ city }}</div>
      <div>Temperature: {{ temperature }}</div>
      <div>{{ feats }}</div>
      <div>Clouds: {{ clouds }}</div>
      <div>Humidity: {{ humidity }}</div>
      <div>Wind: {{ wind }}</div>
    </div>
    <div class="temperature-block">
      <weather-graph></weather-graph>
    </div>
  </div>
</template>

<script>
import WeatherGraph from "@/components/WeatherGraph";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {
    WeatherGraph,
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
      temperature: "weather/temperature",
      feats: "weather/feats",
      clouds: "weather/clouds",
      humidity: "weather/humidity",
      wind: "weather/wind",
    }),
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      fetchIP: "ip/fetchIP",
      fetchCurrentUserWeather: "weather/fetchCurrentUserWeather",
    }),
  },
  async created() {
    await this.fetchIP();
    await this.fetchCurrentUserWeather(this.ipData);
    console.log(this.weatherData)
  },
};
</script>

<style scoped>
.main {
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.weather-block,
.temperature-block {
  padding: 20px;
  width: 90%;
  background: white;
}
</style>
