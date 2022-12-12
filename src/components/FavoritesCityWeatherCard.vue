<template>
  <section class="favorites-city-weather-card" v-if="!isLoading">
    <div class="favorites-city-weather-card__wrapper">
      <button
        class="favorites-city-weather-card__delete-button"
        @click="deleteCard"
      ></button>
      <div class="favorites-city-weather-card__date">
        <span>{{ cityWeather.date }}</span>
      </div>
      <div class="favorites-city-weather-card__date">
        <span>{{ cityWeather.name }}</span>
      </div>
      <div class="favorites-city-weather-card__temperature">
        <span v-if="cityWeather.temperature > 0">+</span>
        <span>{{ cityWeather.temperature }}</span>
      </div>
      <div class="favorites-city-weather-card__feels">
        <span>Feels </span>
        <span v-if="cityWeather.feels > 0">+</span>
        <span>{{ cityWeather.feels }}</span>
      </div>
      <div class="favorites-city-weather-card__clouds">
        <span>{{ cityWeather.clouds }}</span>
      </div>
      <div class="favorites-city-weather-card__other-info">
        <div class="favorites-city-weather-card__wind info">
          <span class="name">Wind</span>
          <span>{{ cityWeather.wind }}<span class="symbol">m/s</span></span>
        </div>
        <div class="favorites-city-weather-card__pressure info">
          <span class="name">Pressure</span>
          <span
            >{{ cityWeather.pressure }}<span class="symbol">mm Hg</span></span
          >
        </div>
        <div class="favorites-city-weather-card__humidity info">
          <span class="name">Humidity</span>
          <span>{{ cityWeather.humidity }}<span class="symbol">%</span></span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "favorites-city-weather-card",
  props: {
    id: {
      type: [Number, String],
    },
    coords: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      favoritesCityData: null,
    };
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.weather.isLoading,
      dateOptions: (state) => state.weather.dateOptions,
    }),
    ...mapGetters({
      city: "weather/city",
    }),
    cityWeather() {
      return {
        name: this.favoritesCityData?.name,
        date: new Date(this.favoritesCityData?.dt * 1000).toLocaleString(
          "en-US",
          this.dateOptions
        ),
        temperature: Math.round(this.favoritesCityData?.main?.temp),
        feels: Math.round(this.favoritesCityData?.main?.feels_like),
        clouds:
          this.favoritesCityData?.weather[0]?.description[0].toUpperCase() +
          this.favoritesCityData?.weather[0]?.description?.slice(1),
        wind: this.favoritesCityData?.wind?.speed,
        pressure: (
          this.favoritesCityData?.main?.pressure * 0.750063755419211
        ).toFixed(0),
        humidity: this.favoritesCityData?.main?.humidity,
      };
    },
  },
  methods: {
    ...mapActions({
      fetchCurrentWeatherByCoords: "weather/fetchCurrentWeatherByCoords",
    }),
    deleteCard() {
      let lsFavoritesCitiesWeather = this.getLocalStorageItem();
      if (lsFavoritesCitiesWeather.length > 1) {
        lsFavoritesCitiesWeather.splice(this.id, 1);
        this.setLocalStorageData(lsFavoritesCitiesWeather);
      } else {
        localStorage.removeItem("favoritesCitiesWeather");
      }
    },
    getLocalStorageItem() {
      return JSON.parse(localStorage.getItem("favoritesCitiesWeather"));
    },
    setLocalStorageData(arr) {
      localStorage.setItem("favoritesCitiesWeather", JSON.stringify(arr));
    },
  },
  async mounted() {
    this.favoritesCityData = await this.fetchCurrentWeatherByCoords(
      this.coords
    );
  },
};
</script>

<style scoped>
.favorites-city-weather-card {
  margin-top: 30px;
  padding: 15px;
  width: 100%;
  height: 100%;
  border-radius: 6px;
  background: #ffffff;
}

.favorites-city-weather-card__wrapper {
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

.favorites-city-weather-card__delete-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border: none;
  background: url("@/assets/imgs/close-icon.png") no-repeat center/contain;
}

.favorites-city-weather-card__date {
  padding-top: 22px;
}

.favorites-city-weather-card__date span {
  font-size: 17px;
  line-height: 20px;
  color: #0e3c62;
}

.favorites-city-weather-card__temperature {
  padding-top: 10px;
}

.favorites-city-weather-card__temperature span {
  font-size: 120px;
  line-height: 1;
  color: #0e3c62;
}

.favorites-city-weather-card__feels {
  margin-top: 5px;
  padding: 5px 10px;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.1);
  display: inline-block;
}

.favorites-city-weather-card__feels span {
  font-size: 13px;
  line-height: 15px;
  letter-spacing: 0.5px;
  color: #0e3c62;
}

.favorites-city-weather-card__clouds {
  margin-top: 50px;
}

.favorites-city-weather-card__clouds span {
  font-size: 17px;
  line-height: 20px;
  color: #0e3c62;
}

.favorites-city-weather-card__other-info {
  margin-top: 40px;
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.favorites-city-weather-card__wind,
.favorites-city-weather-card__pressure,
.favorites-city-weather-card__humidity {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.favorites-city-weather-card__other-info span {
  display: inline-block;
  font-size: 32px;
  line-height: 1;
  color: #0e3c62;
}

.favorites-city-weather-card__other-info .name {
  font-size: 13px;
  line-height: 15px;
}

.favorites-city-weather-card__other-info .symbol {
  font-size: 13px;
  line-height: 15px;
  vertical-align: top;
}

@media (max-width: 570px) {
  .favorites-city-weather-card__other-info {
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
