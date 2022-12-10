import axios from "axios";
import { computed, onMounted, ref } from "vue";

export default function useAutocomplete() {
  const listCities = ref([]);
  let searchTerm = ref("");

  const fetchCities = async () => {
    try {
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/population/cities"
      );
      listCities.value = response.data.data.map((item) => item.city);
    } catch (e) {
      console.log(e);
    }
  };

  const searchCities = computed(() => {
    if (searchTerm.value === "") {
      return [];
    }

    return listCities.value.filter((city) => {
      return (
        city.indexOf(searchTerm.value) > -1 ||
        city.toLowerCase().indexOf(searchTerm.value) > -1
      );
    });
  });

  onMounted(fetchCities);

  return {
    searchTerm,
    searchCities,
  };
}
