import { computed, onMounted, ref } from "vue";
import Chart from "chart.js/auto";

export default function useGraph(weatherData) {
  //   console.log(weatherData);
  const dateOptions = {
    hour: "numeric",
    minute: "numeric",
  };
  const graphInstance = ref(null);
  const graphOptions = ref({
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
  });

  const listForecast = computed(() => {
    console.log(weatherData);
    return weatherData?.splice(0, 10);
  });

  const listTemperatures = computed(() => {
    return listForecast?.map((item) => Math.round(item.main.temp));
  });

  const listTemperatureTimes = computed(() => {
    return listForecast?.map((item) => {
      let date = new Date(item.dt * 1000).toLocaleString("en-US", dateOptions);
      return `${date}`;
    });
  });

  const setGraphOptions = () => {
    graphOptions.value.data.datasets[0].data = listTemperatures;
    graphOptions.value.data.labels = listTemperatureTimes;

    // console.log(graphOptions.value.data.datasets[0].data);
    // console.log(graphOptions.value.data.labels);
  };

  const initGraph = (ctx) => {
    graphInstance.value = new Chart(ctx, graphOptions);
  };

  //   const updateGraph = () => {
  //     graphInstance.update();
  //   };

  //   onMounted();

  return {
    listForecast,
    listTemperatures,
    listTemperatureTimes,
    setGraphOptions,
    initGraph,
  };
}
