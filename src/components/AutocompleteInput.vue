<template>
  <section class="autocomplete">
    <custom-input
      ref="autocompleteInput"
      class="autocomplete__input"
      v-model="searchTerm"
      placeholder="Type city name ..."
    />
    <ul class="autocomplete__dropdown" v-if="searchCities.length > 0">
      <li
        class="autocomplete__option"
        v-for="city in searchCities"
        :key="city"
        @click="selectCity(city)"
      >
        {{ city }}
      </li>
    </ul>
  </section>
</template>

<script>
import useAutocomplete from "@/hooks/useAutocomplete";
import { mapActions } from "vuex";

export default {
  name: "autocomplete-input",
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchCurrentWeatherByCity: "weather/fetchCurrentWeatherByCity",
      fetchWeatherByCity: "weather/fetchWeatherByCity",
    }),
    selectCity(city) {
      this.fetchCurrentWeatherByCity(city);
      this.fetchWeatherByCity(city);
      this.searchTerm = "";
    },
  },
  setup() {
    const { searchTerm, searchCities } = useAutocomplete();

    return {
      searchTerm,
      searchCities,
    };
  },
};
</script>

<style scoped>
.autocomplete {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.autocomplete__dropdown {
  position: absolute;
  top: 26px;
  padding: 5px;
  width: 100%;
  max-height: 100px;
  border: 1px solid #808080;
  border-radius: 5px;
  background: #ffffff;
  overflow-y: scroll;
  z-index: 100000;
}

.autocomplete__option {
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
}
.autocomplete__option:hover {
  background: #d3d3d3;
}
</style>
