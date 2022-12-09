<template>
  <div>
    <custom-input v-model="value" placeholder="City Name" />
    <div style="background: white">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: "weather-input",
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped></style>
