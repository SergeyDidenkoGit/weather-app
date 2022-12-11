<template>
  <section class="favorites">
    <div class="favorites__wrapper">
      <div>
        <h1 class="main__header">Favorites cities weather</h1>
      </div>
      <div class="weather">
        <favorites-city-weather-card
          v-for="item in citiesCoords"
          :key="item.lat"
          :coords="item"
        ></favorites-city-weather-card>
      </div>
    </div>
  </section>
</template>

<script>
import FavoritesCityWeatherCard from "@/components/FavoritesCityWeatherCard";

export default {
  components: {
    FavoritesCityWeatherCard,
  },
  data() {
    return {
      citiesCoords: null,
    };
  },
  computed: {},
  methods: {},
  mounted() {
    this.citiesCoords = JSON.parse(
      localStorage.getItem("favoritesCitiesWeather")
    ).map((item) => item.coord);
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
</style>
