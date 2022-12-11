<template>
  <section class="weather-cities">
    <div class="weather-cities__buttons">
      <custom-button class="weather-cities__button" @click="addCity"
        >Add</custom-button
      >
      <custom-button class="weather-cities__button" @click="deleteCity(e)"
        >Delete</custom-button
      >
      <custom-button class="weather-cities__button" @click="clearCities"
        >Clear</custom-button
      >
      <custom-button
        class="weather-cities__button favorites-button"
        @click="addToFavorites"
        >Add Favorites</custom-button
      >
    </div>
    <div class="weather-cities__wrapper">
      <KeepAlive>
        <city-weather-item
          v-for="item in formattedCitiesWeather"
          :class="{ selected: item.id === itemData?.id }"
          :key="item.id"
          :weather-data="item"
          @click="getItemData(item)"
        ></city-weather-item>
      </KeepAlive>
    </div>
  </section>
</template>

<script>
import cityWeatherItem from "@/components/UI/CityWeatherItem.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "weather-cities",
  components: {
    cityWeatherItem,
  },
  data() {
    return {
      itemData: null,
    };
  },
  computed: {
    ...mapState({
      citiesWeather: (state) => state.weather.citiesWeather,
      currentWeatherData: (state) => state.weather.currentWeatherData,
    }),
    ...mapGetters({
      formattedCitiesWeather: "weather/formattedCitiesWeather",
    }),
  },
  methods: {
    ...mapMutations({
      setCitiesWeather: "weather/setCitiesWeather",
      deleteCitiesWeatherItem: "weather/deleteCitiesWeatherItem",
      clearCitiesWeather: "weather/clearCitiesWeather",
    }),
    ...mapActions({
      fetchWeatherByIP: "weather/fetchWeatherByIP",
    }),
    addCity() {
      this.setCitiesWeather(this.currentWeatherData);
    },
    deleteCity() {
      if (this.itemData) {
        this.deleteCitiesWeatherItem(this.itemData);
        this.resetItemData();
      }
    },
    clearCities() {
      this.clearCitiesWeather();
    },
    getLocalStorageItem() {
      return JSON.parse(localStorage.getItem("favoritesCitiesWeather"));
    },
    setLocalStorageData(arr) {
      arr.push(this.itemData);
      localStorage.setItem("favoritesCitiesWeather", JSON.stringify(arr));
    },
    checkLocalStorage() {
      return this.getLocalStorageItem().some((item) => {
        return item.id === this.itemData.id;
      });
    },
    addToFavorites() {
      let lsFavoritesCitiesWeather = [];

      if (this.getLocalStorageItem()) {
        if (!this.checkLocalStorage()) {
          lsFavoritesCitiesWeather = this.getLocalStorageItem();
          this.setLocalStorageData(lsFavoritesCitiesWeather);
        } else {
          console.log("Element exist");
        }
      } else {
        this.setLocalStorageData(lsFavoritesCitiesWeather);
      }

      this.resetItemData();
    },
    getItemData(itemData) {
      console.log(itemData);
      this.itemData = itemData;
    },
    resetItemData() {
      this.itemData = [];
    },
  },
};
</script>

<style scoped>
.weather-cities {
  margin-top: 30px;
  padding: 15px;
  width: 80%;
  background: #ffffff;
  box-shadow: 0px 0px 11px 7px rgb(0, 153, 255, 0.2);
}

.weather-cities__buttons {
  width: 100%;
  display: flex;
}

.weather-cities__button {
  margin-left: 10px;
}

.favorites-button {
  margin-left: auto;
}

.weather-cities__wrapper {
  position: relative;
  margin-top: 10px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.selected {
  box-shadow: 0px 0px 11px 7px rgb(0, 153, 255, 0.85);
}
</style>
