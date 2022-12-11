<template>
  <section class="weather-graph" :key="componentKey">
    <canvas ref="weatherGraph" class="weather-graph__canvas"></canvas>
  </section>
</template>

<script>
import Chart from "chart.js/auto";
import { mapState, mapGetters } from "vuex";

export default {
  name: "weather-graph",
  data() {
    return {
      graphInstance: null,
      componentKey: 0,
    };
  },
  computed: {
    ...mapState({
      weatherData: (state) => state.weather.weatherData,
    }),
    ...mapGetters({
      city: "weather/city",
    }),
    listForecast() {
      return this.weatherData?.list?.splice(0, 10);
    },
    listTemperatures() {
      return this.listForecast?.map((item) => Math.round(item.main.temp));
    },
    listTemperatureTimes() {
      const dateOptions = {
        hour: "numeric",
        minute: "numeric",
      };
      return this.listForecast?.map((item) => {
        let date = new Date(item.dt * 1000).toLocaleString(
          "en-US",
          dateOptions
        );
        return `${date}`;
      });
    },
    graphOptions() {
      return {
        type: "line",
        data: {
          labels: this.listTemperatureTimes,
          datasets: [
            {
              label: "Temperature",
              data: this.listTemperatures,
              backgroundColor: "#0099ff",
              borderColor: "#0099ff",
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            y: {
              type: "linear",
            },
          },
          plugins: {
            legend: {
              align: "end",
            },
          },
        },
      };
    },
  },
  methods: {
    initGraph() {
      setTimeout(() => {
        const ctx = this.$refs.weatherGraph;
        this.graphInstance = new Chart(ctx, this.graphOptions);
      }, 100);
    },
  },
  watch: {
    graphOptions: {
      handler() {
        this.componentKey += 1;
        this.initGraph();
      },
      deep: true,
    },
  },
  mounted() {
    this.initGraph();
  },
};
</script>

<style scoped>
.weather-graph {
  margin-top: 30px;
  padding: 15px;
  width: 80%;
  background: #ffffff;
  box-shadow: 0px 0px 11px 7px rgb(0, 153, 255, 0.2);
}

.weather-graph__canvas {
  width: 100% !important;
  height: auto !important;
}
</style>
