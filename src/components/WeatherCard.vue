<template>
  <section class="weather-card">
    <div class="weather-card__wrapper">
      <div class="weather-card__date">
        <span>{{ date }}</span>
      </div>
      <div class="weather-card__temperature">
        <span v-if="temperature > 0">+</span>
        <span>{{ temperature }}</span>
      </div>
      <div class="weather-card__feels">
        <span>Feels </span>
        <span v-if="feels > 0">+</span>
        <span>{{ feels }}</span>
      </div>
      <div class="weather-card__clouds">
        <span>{{ clouds }}</span>
      </div>
      <div class="weather-card__other-info">
        <div class="weather-card__wind">
          <span class="name">Wind</span>
          <span>{{ wind }}<span class="symbol">m/s</span></span>
        </div>
        <div class="weather-card__pressure">
          <span class="name">Pressure</span>
          <span>{{ pressure }}<span class="symbol">mm Hg</span></span>
        </div>
        <div class="weather-card__humidity">
          <span class="name">Humidity</span>
          <span>{{ humidity }}<span class="symbol">%</span></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "weather-card",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      weatherData: (state) => state.weather.weatherData,
    }),
    ...mapGetters({
      city: "weather/city",
      todayWeather: "weather/todayWeather",
      date: "weather/date",
      temperature: "weather/temperature",
      feels: "weather/feels",
      clouds: "weather/clouds",
      wind: "weather/wind",
      pressure: "weather/pressure",
      humidity: "weather/humidity",
    }),
  },
  mounted() {
    console.log(this.weatherData);
  },
};
</script>

<style scoped>
.weather-card {
  margin-top: 30px;
  padding: 15px;
  width: 80%;
  background: #ffffff;
  box-shadow: 0px 0px 11px 7px rgb(0, 153, 255, 0.2);
}

.weather-card__wrapper {
  position: relative;
  height: 400px;
  border-radius: 6px;
  background: url("@/assets/imgs/weather-card-background.jpg") no-repeat
    center/cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
}

.weather-card__date {
  padding-top: 22px;
}

.weather-card__date span {
  font-size: 17px;
  line-height: 20px;
  color: #0e3c62;
}

.weather-card__temperature {
  padding-top: 10px;
}

.weather-card__temperature span {
  font-size: 120px;
  line-height: 1;
  color: #0e3c62;
}

.weather-card__feels {
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.1);
  display: inline-block;
}

.weather-card__feels span {
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.5px;
  color: #0e3c62;
}

.weather-card__clouds {
  margin-top: 50px;
}

.weather-card__clouds span {
  font-size: 17px;
  line-height: 20px;
  color: #0e3c62;
}

.weather-card__other-info {
  position: absolute;
  bottom: 0;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.weather-card__wind,
.weather-card__pressure,
.weather-card__humidity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.weather-card__other-info span {
  display: inline-block;
  font-size: 32px;
  line-height: 1;
  color: #0e3c62;
}

.weather-card__other-info .name {
  font-size: 13px;
  line-height: 15px;
}

.weather-card__other-info .symbol {
  font-size: 13px;
  line-height: 15px;
  vertical-align: top;
}
</style>
