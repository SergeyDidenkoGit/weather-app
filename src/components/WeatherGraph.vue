<template>
  <section class="weather-graph">
    <canvas ref="weatherGraph" class="weather-graph__canvas"></canvas>
  </section>
</template>

<script>
import Chart from "chart.js/auto";
import { mapState } from "vuex";

export default {
  name: "weather-graph",
  props: {
    range: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    this.graphInstance = null;
    return {
      dayOptions: {
        hour: "numeric",
        minute: "numeric",
      },
      weakOptions: {
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      },
    };
  },
  computed: {
    ...mapState({
      weatherData: (state) => state.weather.weatherData,
    }),
    listForecast() {
      return this.range
        ? this.weatherData?.list
        : this.weatherData?.list?.slice(0, 9);
    },
    listTemperatures() {
      return this.listForecast?.map((item) => Math.round(item.main.temp));
    },
    listTemperatureTimes() {
      const dateOptions = this.range ? this.weakOptions : this.dayOptions;

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
      const ctx = this.$refs.weatherGraph;
      this.graphInstance = new Chart(ctx, this.graphOptions);
    },
  },
  watch: {
    graphOptions: {
      handler() {
        this.graphInstance.destroy();
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
  border-radius: 6px;
  background: #ffffff;
}

.weather-graph__canvas {
  width: 100% !important;
  height: auto !important;
}
</style>
