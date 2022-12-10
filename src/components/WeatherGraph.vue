<template>
  <div class="graph-wrapper">
    <canvas ref="weatherGraph" id="weatherGraph"></canvas>
    <div>{{ listForecast }}</div>
    <!-- <div>{{ listTemperatures }}</div>
    <div>{{ listTemperatureTimes }}</div> -->
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import useGraph from "@/hooks/useGraph";

export default {
  name: "weather-graph",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  setup() {
    const weatherGraph = ref(null);
    const store = useStore();

    const {
      // listForecast,
      // listTemperatures,
      // listTemperatureTimes,
      setGraphOptions,
      initGraph,
    } = useGraph(store.state.weather.weatherData?.list);

    onMounted(() => {
      setGraphOptions();
      initGraph(weatherGraph.value);
    });

    return {
      weatherGraph,
      // listForecast,
      // listTemperatures,
      // listTemperatureTimes,
    };
  },
};
</script>

<style scoped>
.graph-wrapper {
  width: 100%;
}
</style>
