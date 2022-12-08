<template>
  <div class="navbar">
    <div @click="$router.push('/')">Weather App</div>
    <div class="navbar__buttons">
      <custom-button class="navbar__button-main" @click="$router.push('/weather-app/')"
        >Main</custom-button
      >
      <custom-button
        class="navbar__button-favorites"
        @click="$router.push('/weather-app/favorites')"
        >Favorites</custom-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "navbar",
};
</script>

<style>
.navbar {
  padding: 0 15px;
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 4px 4px gray;
  display: flex;
  align-items: center;
}

.navbar__buttons {
  margin-left: auto;
}

.navbar__button-main {
  margin-right: 20px;
}
</style>
