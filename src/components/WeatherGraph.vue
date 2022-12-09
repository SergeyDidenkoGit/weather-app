<template>
  <div>
    <canvas id="weather-graph"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  name: "weather-graph",
  data() {
    return {
      graphOptions: {
        type: "line",
        data: {
          labels: [
            "1 pm",
            "2 pm",
            "3 pm",
            "4 pm",
            "5 pm",
            "6 pm",
            "7 pm",
            "8 pm",
          ],
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
  mounted() {
    const ctx = document.getElementById("weather-graph");
    new Chart(ctx, this.graphOptions);
  },
};
</script>

<style scoped></style>
