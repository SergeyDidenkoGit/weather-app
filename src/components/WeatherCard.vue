<template>
  <section class="weather-card">
    <div class="weather-card__wrapper">
      <div class="weather-card__date">
        <span>{{ date }}</span>
      </div>
      <div class="weather-card__temperature">
        <span v-if="currentTemperature > 0">+</span>
        <span>{{ currentTemperature }}</span>
      </div>
      <div class="weather-card__feels">
        <span>Feels </span>
        <span v-if="currentFeels > 0">+</span>
        <span>{{ currentFeels }}</span>
      </div>
      <div class="weather-card__clouds">
        <span>{{ currentClouds }}</span>
      </div>
      <div class="weather-card__other-info">
        <div class="weather-card__wind info">
          <span class="name">Wind</span>
          <span>{{ currentWind }}<span class="symbol">m/s</span></span>
        </div>
        <div class="weather-card__pressure info">
          <span class="name">Pressure</span>
          <span>{{ currentPressure }}<span class="symbol">mm Hg</span></span>
        </div>
        <div class="weather-card__humidity info">
          <span class="name">Humidity</span>
          <span>{{ currentHumidity }}<span class="symbol">%</span></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters } from "vuex";

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
      date: "weather/date",
      currentTemperature: "weather/currentTemperature",
      currentFeels: "weather/currentFeels",
      currentClouds: "weather/currentClouds",
      currentWind: "weather/currentWind",
      currentPressure: "weather/currentPressure",
      currentHumidity: "weather/currentHumidity",
    }),
  },
};
</script>

<style scoped>
.weather-card {
  margin-top: 30px;
  padding: 15px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: #ffffff;
}

.weather-card__wrapper {
  position: relative;
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
  margin-top: 40px;
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

@media (max-width: 570px) {
  .weather-card__other-info {
    margin-top: 20px;
    width: 100%;
    flex-direction: column;
  }

  .info {
    margin-top: 10px;
    align-items: center;
  }
}
</style>
