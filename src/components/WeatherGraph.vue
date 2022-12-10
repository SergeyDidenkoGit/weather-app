<template>
  <div class="graph-wrapper">
    <canvas ref="weatherGraph"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "weather-graph",
  data() {
    return {
      graphOptions: {
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Temperature",
              data: [],
              backgroundColor: "#0099ff",
              borderColor: "#0099ff",
              borderWidth: 3,
            },
          ],
        },
        options: {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 0,
                },
              },
            ],
          },
          plugins: {
            legend: {
              align: "end",
            },
          },
        },
      },
      graphInstance: null,
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
  },
  methods: {
    setGraphOptions() {
      this.graphOptions.data.datasets[0].data = this.listTemperatures;
      this.graphOptions.data.labels = this.listTemperatureTimes;
    },
    initGraph() {
      const ctx = this.$refs.weatherGraph;
      this.graphInstance = new Chart(ctx, this.graphOptions);
    },
    destroyGraph() {
      this.graphInstance?.destroy();
    },
    renderGraph() {
      this.setGraphOptions();
      this.initGraph();
    },
    rerenderGraph() {
      this.setGraphOptions();
      this.destroyGraph();
      this.initGraph();
    },
  },
  watch: {
    weatherData() {
      this.rerenderGraph();
    },
  },
  mounted() {
    this.renderGraph();
  },
};
</script>

<style scoped>
.graph-wrapper {
  width: 100%;
}
</style>
