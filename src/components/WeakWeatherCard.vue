<template>
  <section class="weak-weather-card">
    <div
      class="weak-weather-card__element"
      v-for="item in formattedWeakWeatherDate"
      :key="item.dt"
    >
      <div class="weather-card__date">
        <span>{{ item.date }}</span>
      </div>
      <div class="weather-card__temperature">
        <span v-if="item.temperature > 0">+</span>
        <span>{{ item.temperature }}</span>
      </div>
      <div class="weather-card__feels">
        <span>Feels </span>
        <span v-if="item.feels > 0">+</span>
        <span>{{ item.feels }}</span>
      </div>
      <div class="weather-card__clouds">
        <span>{{ item.clouds }}</span>
      </div>
      <div class="weather-card__other-info">
        <div class="weather-card__wind">
          <span class="name">Wind</span>
          <span>{{ item.wind }}<span class="symbol">m/s</span></span>
        </div>
        <div class="weather-card__pressure">
          <span class="name">Pressure</span>
          <span>{{ item.pressure }}<span class="symbol">mm Hg</span></span>
        </div>
        <div class="weather-card__humidity">
          <span class="name">Humidity</span>
          <span>{{ item.humidity }}<span class="symbol">%</span></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "weak-weather-card",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      weakWeatherDate: "weather/weakWeatherDate",
      formattedWeakWeatherDate: "weather/formattedWeakWeatherDate",
    }),
  },
};
</script>

<style scoped>
.weak-weather-card {
  margin-top: 30px;
  padding: 15px;
  width: 100%;
  border-radius: 6px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}

.weak-weather-card__element {
  position: relative;
  margin: 0 5px;
  width: 100%;
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
  font-size: 60px;
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
  margin-top: 20px;
}

.weather-card__clouds span {
  font-size: 17px;
  line-height: 20px;
  color: #0e3c62;
}

.weather-card__other-info {
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.weather-card__wind,
.weather-card__pressure,
.weather-card__humidity {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.weather-card__other-info span {
  display: inline-block;
  font-size: 32px;
  color: #0e3c62;
  text-align: center;
}

.weather-card__other-info .name {
  font-size: 13px;
}

.weather-card__other-info .symbol {
  font-size: 13px;
  vertical-align: top;
}

@media (max-width: 980px) {
  .weak-weather-card {
    flex-direction: column;
    align-items: center;
  }

  .weak-weather-card__element{
    margin-top: 10px;
  }
}
</style>
