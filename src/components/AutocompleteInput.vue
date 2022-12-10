<template>
  <div class="autocomplete">
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
  </div>
</template>

<script>
import useAutocomplete from "@/hooks/useAutocomplete";

export default {
  name: "autocomplete-input",
  data() {
    return {
      selectedCity: null,
    };
  },
  methods: {
    selectCity(city) {
      this.selectedCity = city;
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
