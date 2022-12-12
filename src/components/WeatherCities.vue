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
    <custom-dialog class="delete-city-dialog" v-model:show="dialogVisible">{{
      dialogMessage
    }}</custom-dialog>
  </section>
</template>

<script>
import cityWeatherItem from "@/components/CityWeatherItem.vue";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "weather-cities",
  components: {
    cityWeatherItem,
  },
  data() {
    return {
      itemData: null,
      dialogVisible: false,
      dialogMessage: null,
    };
  },
  computed: {
    ...mapState({
      citiesWeather: (state) => state.weather.citiesWeather,
      currentWeatherData: (state) => state.weather.currentWeatherData,
      dialogMessageStore: (state) => state.weather.dialogMessage,
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
    dialogOpen(message) {
      this.dialogMessage = message;
      this.dialogVisible = true;
    },
    addCity() {
      this.setCitiesWeather(this.currentWeatherData);
      if (this.dialogMessageStore) {
        this.dialogOpen(this.dialogMessageStore);
      } else {
        this.dialogOpen("City added to list");
      }
    },
    deleteCity() {
      if (this.itemData) {
        this.deleteCitiesWeatherItem(this.itemData);
        this.resetItemData();
        this.dialogOpen("City deleted from list");
      }
    },
    clearCities() {
      this.clearCitiesWeather();
      this.dialogOpen("Cities list is cleared");
    },
    getLocalStorageItem() {
      return JSON.parse(localStorage.getItem("favoritesCitiesWeather"));
    },
    setLocalStorageData(arr) {
      arr.push(this.itemData);
      localStorage.setItem("favoritesCitiesWeather", JSON.stringify(arr));
    },
    checkLocalStorage() {
      return (
        this.getLocalStorageItem().length === 5 ||
        this.getLocalStorageItem().some((item) => {
          return item.id === this.itemData?.id;
        })
      );
    },
    addToFavorites() {
      if (this.itemData) {
        let lsFavoritesCitiesWeather = [];

        if (this.getLocalStorageItem()) {
          if (!this.checkLocalStorage()) {
            lsFavoritesCitiesWeather = this.getLocalStorageItem();
            this.setLocalStorageData(lsFavoritesCitiesWeather);
          } else {
            this.dialogOpen(
              "City exist in favorites list or favorites list is over"
            );
          }
        } else {
          this.setLocalStorageData(lsFavoritesCitiesWeather);
        }
        this.resetItemData();
      } else {
        this.dialogOpen("You must select city");
      }
    },
    getItemData(itemData) {
      this.itemData = itemData;
    },
    resetItemData() {
      this.itemData = null;
    },
  },
};
</script>

<style scoped>
.weather-cities {
  margin-top: 30px;
  padding: 15px;
  width: 80%;
  border-radius: 6px;
  background: #ffffff;
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
  opacity: 0.9;
  transform: scale(1.02);
  transition: all 0.5s;
}

.delete-city-dialog,
.local-storage-dialog {
  text-align: center;
}

@media (max-width: 570px) {
  .weather-cities__buttons {
    flex-direction: column;
  }

  .weather-cities__button {
    width: 100%;
    margin: 10px 0 auto;
  }
}
</style>
