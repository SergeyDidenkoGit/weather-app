<template>
  <section class="favorites">
    <template v-if="!isLoading">
      <div class="favorites__wrapper">
        <div>
          <h1 class="main__header">Favorites cities weather</h1>
        </div>
        <div class="weather">
          <transition-group name="favorites-city-weather-card">
            <favorites-city-weather-card
              v-for="(item, index) in citiesCoords"
              :key="item?.lat"
              :id="index"
              :coords="item"
              @click="refreshData"
            ></favorites-city-weather-card>
          </transition-group>
        </div>
      </div>
    </template>
    <custom-loader class="custom-loader" v-if="isLoading"></custom-loader>
  </section>
</template>

<script>
import FavoritesCityWeatherCard from "@/components/FavoritesCityWeatherCard";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    FavoritesCityWeatherCard,
  },
  data() {
    return {
      citiesCoords: null,
    };
  },
  computed: {
    ...mapState({
      ipData: (state) => state.ip.ipData,
      isLoading: (state) => state.weather.isLoading,
    }),
  },
  methods: {
    ...mapActions({
      fetchIP: "ip/fetchIP",
      fetchCurrentWeatherByIP: "weather/fetchCurrentWeatherByIP",
      fetchWeatherByIP: "weather/fetchWeatherByIP",
    }),
    refreshData() {
      this.citiesCoords = JSON.parse(
        localStorage.getItem("favoritesCitiesWeather")
      )?.map((item) => item?.coord);
    },
  },
  mounted() {
    this.citiesCoords = JSON.parse(
      localStorage.getItem("favoritesCitiesWeather")
    )?.map((item) => item?.coord);
  },
  async created() {
    await this.fetchIP();
    await this.fetchCurrentWeatherByIP(this.ipData);
    await this.fetchWeatherByIP(this.ipData);
  },
};
</script>

<style scoped>
.favorites {
  max-width: 100%;
}

.favorites__wrapper {
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.weather {
  position: relative;
  width: 80%;
}

.favorites-city-weather-card-enter-active,
.favorites-city-weather-card-leave-active {
  transition: all 0.5s ease;
}

.favorites-city-weather-card-enter-from,
.favorites-city-weather-card-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.custom-loader {
  margin: 50px auto;
}
</style>
