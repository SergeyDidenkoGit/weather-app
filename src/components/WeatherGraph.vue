<template>
  <div>
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
        type: "line",
        data: {
          labels: [],
          datasets: [
            {
              label: "Temperature",
              data: [
                0.166, 2.081, 3.003, 0.323, 954.792, 285.886, 43.662, 51.514,
              ],
              backgroundColor: "rgba(71, 183,132,.5)",
              borderColor: "#47b784",
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
                  padding: 25,
                },
              },
            ],
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
  },
  methods: {},
  mounted() {
    const ctx = document.getElementById("weather-graph");
    new Chart(ctx, this.graphOptions);
  },
};
</script>

<style scoped></style>
