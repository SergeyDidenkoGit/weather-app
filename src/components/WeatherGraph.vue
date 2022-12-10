<template>
  <div class="graph-wrapper">
    <canvas id="weather-graph"></canvas>
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
        type: "bar",
        data: {
          labels: [],
          datasets: [
            {
              label: "Temperature",
              data: [],
              backgroundColor: "#09f",
              borderColor: "transparent",
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
        console.log(date);
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
      const ctx = document.getElementById("weather-graph");
      new Chart(ctx, this.graphOptions);
    },
  },
  mounted() {
    setTimeout(() => {
      this.setGraphOptions();
      this.initGraph();
    }, 1000);
  },
};
</script>

<style scoped>
.graph-wrapper {
  width: 100%;
}
</style>
