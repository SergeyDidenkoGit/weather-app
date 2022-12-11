<template>
  <section class="city-weather-item">
    <div class="city-weather-item__wrapper">
      <div class="city-weather-item__city">
        <span>{{ weatherData.name }}</span>
      </div>
      <div class="city-weather-item__temperature">
        <span v-if="weatherData.temperature > 0">+</span>
        <span>{{ weatherData.temperature }}</span>
      </div>
      <div class="city-weather-item__feels">
        <span>Feels </span>
        <span v-if="weatherData.feels > 0">+</span>
        <span>{{ weatherData.feels }}</span>
      </div>
      <div class="city-weather-item__clouds">
        <span>{{ weatherData.clouds }}</span>
      </div>
      <div class="city-weather-item__other-info">
        <div class="city-weather-item__wind">
          <span class="name">Wind</span>
          <span>{{ weatherData.wind }}<span class="symbol">m/s</span></span>
        </div>
        <div class="city-weather-item__pressure">
          <span class="name">Pressure</span>
          <span
            >{{ weatherData.pressure }}<span class="symbol">mm Hg</span></span
          >
        </div>
        <div class="city-weather-item__humidity">
          <span class="name">Humidity</span>
          <span>{{ weatherData.humidity }}<span class="symbol">%</span></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "city-weather-item",
  props: {
    weatherData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.city-weather-item {
  margin-top: 10px;
  padding: 15px;
  width: 100%;
  height: 100%;
  background: url("@/assets/imgs/cities-weather-item-background.jpg") no-repeat
    center/cover;
  cursor: pointer;
}

.city-weather-item__wrapper {
  width: 100%;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.85);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.city-weather-item__name {
  padding-left: 10px;
}

.city-weather-item__date .name {
  font-size: 25px;
  color: #0e3c62;
}

.city-weather-item__temperature {
  padding-left: 10px;
}

.city-weather-item__temperature span {
  font-size: 40px;
  color: #0e3c62;
}

.city-weather-item__feels {
  padding: 5px 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.1);
  display: inline-block;
}

.city-weather-item__feels span {
  font-size: 13px;
  letter-spacing: 0.5px;
  color: #0e3c62;
}

.city-weather-item__clouds {
  margin-top: 0;
}

.city-weather-item__clouds span {
  font-size: 17px;
  color: #0e3c62;
}

.city-weather-item__other-info {
  width: 40%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.city-weather-item__wind,
.city-weather-item__pressure,
.city-weather-item__humidity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.city-weather-item__other-info span {
  display: inline-block;
  font-size: 32px;
  line-height: 1;
  color: #0e3c62;
}

.city-weather-item__other-info .name {
  font-size: 13px;
  line-height: 15px;
}

.city-weather-item__other-info .symbol {
  font-size: 13px;
  line-height: 15px;
  vertical-align: top;
}
</style>
